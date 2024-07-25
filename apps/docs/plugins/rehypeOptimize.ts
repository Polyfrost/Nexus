import type { Root } from 'hast';
import { toHtml } from 'hast-util-to-html';
import type { Transformer } from 'unified';
import { walk } from 'unist-util-walker';

type Node = any;
const headingRe = /h[0-6]/;

export function rehypeOptimizeStatic(): Transformer<Root, Root> {
	return (tree: Node) => {
		const elements = new Set<Node>();
		const elementStack: Node[] = [];

		walk(tree, {
			enter(node) {
				// @ts-expect-error tagName doesnt exist idk
				const isHeading = node.tagName && headingRe.test(node.tagName);
				if (node.type.startsWith('mdx') || isHeading)
					for (const el of elementStack) elements.delete(el);
				if (isHeading) {
					this.skip();
					return;
				}
				if (node.type === 'element' || node.type === 'mdxJsxFlowElement') {
					elementStack.push(node);
					elements.add(node);
				}
			},
			leave(node, parent) {
				if (node.type === 'element' || node.type === 'mdxJsxFlowElement') {
					elementStack.pop();
					if (elements.has(parent))
						elements.delete(node);
				}
			},
		});

		for (const el of elements) {
			if (el.type === 'mdxJsxFlowElement')
				el.attributes.push({
					type: 'mdxJsxAttribute',
					name: 'set:html',
					value: toHtml(el.children),
				});

			else
				el.properties['set:html'] = toHtml(el.children);

			el.children = [];
		}
	};
}
