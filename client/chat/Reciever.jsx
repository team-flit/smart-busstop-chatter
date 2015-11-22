const SPECIAL_MESSAGES = [
  {
    key: 'STOP_SMOKING',
    message: '버스정류장에서는 담배를 피시면 안되요!\n당장 꺼주세요!',
  },
  {
    key: 'PERVERT_ALERT',
    message: '주위에 치한때문에 불편한 분이 있습니다.\n도움이 사람이 있는지 찾아보세요.',
  },
  {
    key: 'NEED_YOUR_HELP',
    message: '긴급하게 도움을 필요로 하시는 분이 있습니다.\n주위를 둘러봐주세요.',
  }
]

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
    return (
      <div className="row">
         <div className="col s12">
           <div className="card pink darken-1">
             <div className="card-content white-text">
               <span className="card-title">특별한 메시지</span>
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

  render() {
    var message = (this.data.messages.length > 0)
      ? this.data.messages[0].message.trim()
      : '메시지가 없습니다';
    var specialMessage = _.find(SPECIAL_MESSAGES, {key: message});
    var rendering = (specialMessage)
      ? this.renderSpecialMessage(specialMessage.message)
      : this.renderNormalMessage(message);

    return (
      <div className="container" style={{marginTop: '20%', whiteSpace: 'pre'}}>
        {rendering}
      </div>
    )
  }})
