import AppDispatcher from 'app_dispatcher';
import Constants from 'constants';
class CommentStore extends EventEmitter {
  constructor() {
    super()
    this._comments = []    


    AppDispatcher.register((payload) => {
      switch(payload.actionType) {
        case Constants.ADD_COMMENT:
          this.addComment(payload.comment)
          break
        default:
          //nothing
      }
      this.emitChange()
    });

  }

  addComment(comment) {
    this._comments[comment.id] = comment;
  }

  comments() {
    return this._comments;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }
}

export default CommentStore;
