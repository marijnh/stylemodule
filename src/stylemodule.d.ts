export function styleModule<S extends {[name: string]: Style}>(spec: S, priority?: 0 | 1 | 2): StyleModule<S>

export declare namespace styleModule {
  export function mount(root: Document | ShadowRoot | DocumentOrShadowRoot, module: StyleModule);
}

export type StyleModule<S = any> = {[id in keyof S]: string}

export type Style = {
  [propOrSelector: string]: string | number | Style
}