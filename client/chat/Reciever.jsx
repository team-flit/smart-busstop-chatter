Receiver = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var subs = Meteor.subscribe('messages');

    return {
      messages: (subs)
        ? Messages.find({}, { sort: { createdAt: -1 }}).fetch()
        : []
    }
  },

  removeLatest() {
    if (this.data.messages.length === 0) return alert('더이상 메시지가 없습니다.');
    Messages.remove(this.data.messages[0]._id);
  },

  renderNormalMessage(message) {
    return (
      <div className="row">
         <div className="col s12">
           <div className="card blue-grey darken-1">
             <div className="card-content white-text">
               <span className="card-title">메시지</span>
               <p>
                 {message}
               </p>
             </div>
             <div className="card-action">
               <a href="#" onClick={this.removeLatest}>삭제</a>
             </div>
           </div>
         </div>
       </div>
    )
  },

  renderSpecialMessage(message) {
    console.log(message);
    return (
      <div className="row">
         <div className="col s12">
           <div className={`card ${message.color}`}>
              <div className="card-content white-text">
                <span className="card-title">{/*<i className="material-icons">{msg.icon}</i>*/} {message.title}</span>
                <p>
                  {message.message}
                </p>
             </div>
             <div className="card-action">
               <a href="#" onClick={this.removeLatest} className="white-text">삭제</a>
             </div>
           </div>
         </div>
       </div>
    )
  },

  render() {
    var message = (this.data.messages.length > 0)
      ? this.data.messages[0].message.trim()
      : '메시지가 없습니다';
    var specialMessage = _.find(SPECIAL_MESSAGES, {key: message});
    var rendering = (specialMessage)
      ? this.renderSpecialMessage(specialMessage)
      : this.renderNormalMessage(message);

    return (
      <div className="container" style={{marginTop: '10%', whiteSpace: 'pre'}}>
        {rendering}
      </div>
    )
  }})
