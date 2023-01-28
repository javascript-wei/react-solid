import type { IBaseMode } from "./mode";

class ModeShare implements IBaseMode {
  init(mode) {
    mode['share'] = this;
  }
  shareToWx() {
    console.log('分析至微信...');
  }
}
export default ModeShare;