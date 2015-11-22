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

  remove() {
    if (this.data.messages.length === 0) return alert('더이상 메시지가 없습니다.');
    Messages.remove(this.data.messages[0]._id);
  },

  render() {
    var message = (this.data.messages.length > 0)
      ? this.data.messages[0].message
      : '메시지가 없습니다';

    return (
      <div className="container">
        <h1>Receiver</h1>
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
                 <a href="#" onClick={this.remove}>삭제</a>
               </div>
             </div>
           </div>
         </div>
      </div>
    )
  }})
