// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Func = (...args: any[]) => any;

// 递归类型支持任意层链式调用
type ChainUtils<T extends [string, Func][] = []> = {
  add: <K extends string, V extends Func>(
    key: K,
    value: V,
  ) => ChainUtils<[...T, [K, V]]>;
  all: { [K in T[number][0]]: Extract<T[number], [K, Func]>[1] };
};

export function createUtils(): ChainUtils;
export function createUtils(): unknown {
  const utils: Record<string, Func> = {};

  const instance = {
    add: <K extends string, V extends Func>(key: K, value: V) => {
      utils[key] = value;
      return instance;
    },
    all: utils,
  };
  return instance;
}
