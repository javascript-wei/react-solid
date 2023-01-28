export interface IBaseMode {
  init: (mode) => void;
  [key: string]: any;
}
class Mode {
  static deps = {};
  constructor() {
    Object.values(Mode.deps).forEach((item: IBaseMode) => {
      item.init(this);
    })
  }
  static inject<T>(dep: T) {
    Mode.deps[dep.constructor.name] = dep;
  }
}
export default Mode;