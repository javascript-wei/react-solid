import type { IBaseMode } from './mode';

class ModeComment implements IBaseMode {
  init(mode) {
    mode['comment'] = this;
  }
  startComment() {
    console.log('评论...');
  }
}

export default ModeComment;