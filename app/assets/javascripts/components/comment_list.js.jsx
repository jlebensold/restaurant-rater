var CommentList = React.createClass({

  componentDidMount: function() {
    window.Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    window.Store.removeChangeListener(this._onChange)
  },

  render: function() {
    console.log("rendering");
    return (
      <div>
        {window.Store.comments().map(function(comment) {
          return <Comment key={comment.id} {...comment} />
        })}
      </div>
    );
  },

  _onChange: function() {
    this.forceUpdate();
  }
});
