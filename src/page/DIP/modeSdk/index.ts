import Mode from './mode'
import ModeComment from './comment'
import ModeShare from './share';
interface IModeInterface{
  share?: ModeShare;
  comment?: ModeComment;
}

const share = new ModeShare();
const comment = new ModeComment();
Mode.inject<ModeShare>(share);
Mode.inject<ModeComment>(comment);
const mode: IModeInterface = new Mode();
mode.comment.startComment();
mode.share.shareToWx();

export default mode;