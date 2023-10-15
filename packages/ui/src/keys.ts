export enum ModifierKeys {
	Alt = 'Alt',
	Shift = 'Shift',
	AltGraph = 'AltGraph',
	CapsLock = 'CapsLock',
	Control = 'Control',
	Fn = 'Fn',
	FnLock = 'FnLock',
	Meta = 'Meta',
	NumLock = 'NumLock',
	ScrollLock = 'ScrollLock',
	Symbol = 'Symbol',
	SymbolLock = 'SymbolLock'
}

export type OSforKeys = 'macOS' | 'Windows' | 'Other';

export const modifierSymbols: Record<
	ModifierKeys,
	{ macOS?: string; Windows?: string; Other: string }
> = {
	Alt: { macOS: '⌥', Other: 'Alt' },
	AltGraph: { macOS: '⌥', Other: 'Alt' },
	CapsLock: { Other: '⇪' },
	Control: { macOS: '⌃', Other: 'Ctrl' },
	Fn: { macOS: 'fn', Other: 'Fn' },
	FnLock: { macOS: 'fn', Other: 'Fn' },
	Meta: { macOS: '⌘', Windows: '⊞ Win', Other: 'Meta' },
	NumLock: { macOS: '⇭', Other: 'Num' },
	ScrollLock: { macOS: '⤓', Other: 'ScrLk' },
	Shift: { Other: 'Shift', macOS: '⇧' },
	Symbol: { macOS: '⎄', Other: 'Sym' },
	SymbolLock: { macOS: '⎄', Other: 'Sym' }
};

export const keySymbols: Record<string, { macOS?: string; Windows?: string; Other: string }> = {
	' ': { Other: '␣' },
	'Tab': { macOS: '⇥', Other: '⭾' },
	'Enter': { macOS: '↩', Other: '↵' },
	'Escape': { macOS: '⎋', Other: 'Esc' },
	'Backspace': { macOS: '⌫', Other: '⟵' },
	'ArrowUp': { Other: '↑' },
	'ArrowDown': { Other: '↓' },
	'ArrowLeft': { Other: '←' },
	'ArrowRight': { Other: '→' },
	'Insert': { Other: 'Ins' },
	'Delete': { macOS: '⌦', Other: 'Del' },
	'Home': { macOS: '↖', Other: 'Home' },
	'End': { macOS: '↘', Other: 'End' },
	'PageUp': { macOS: '⇞', Other: 'PgUp' },
	'PageDown': { macOS: '⇟', Other: 'PgDn' },
	'Shift': { macOS: '⇧', Other: 'Shift' },
	'PrintScreen': { Other: 'PrtSc' },
	'ScrollLock': { macOS: '⤓', Other: 'ScrLk' },
	'Pause': { macOS: '⎉', Other: 'Pause' }
};
