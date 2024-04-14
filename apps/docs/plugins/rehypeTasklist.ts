import type { Root } from 'hast';
import { h } from 'hastscript';
import type { Plugin, Transformer } from 'unified';
import { CONTINUE, EXIT, SKIP, visit } from 'unist-util-visit';

export function rehypeTasklistEnhancer(): Plugin<[], Root> {
	const transformer: Transformer<Root> = (tree) => {
		visit(tree, 'element', (node) => {
			if (
				!node.properties
				|| !Array.isArray(node.properties.className)
				|| !node.properties.className.includes('task-list-item')
			)
				return CONTINUE;

			visit(node, 'element', (child, index, parent) => {
				if (child.tagName !== 'input' || typeof index !== 'number' || !parent)
					return CONTINUE;

				const [head, tail] = [
					parent.children.slice(0, index + 1),
					parent.children.slice(index + 1),
				];
				parent.children = [h('label', {}, ...head, h('span', {}, ...tail))];
				return EXIT;
			});
			return SKIP;
		});
	};

	return function attacher() {
		return transformer;
	};
}
