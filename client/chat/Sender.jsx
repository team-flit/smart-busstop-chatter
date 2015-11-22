Sender = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      data: [],
    }
  },

  onSubmit(evt) {
    evt.preventDefault();
    var message = this.refs.message.value.trim();
    if (message.length === 0) return;

    Messages.insert({
      createdAt: new Date(),
      message: message,
    });
    this.refs.message.value = '';
    Materialize.toast('메시지를 전송하였습니다!', 3000);
  },

  sendMessage(message, evt) {
    var message = message.trim();
    if (message.length === 0) return;

    console.log(message);

    Messages.insert({
      createdAt: new Date(),
      message: message,
    });
    this.refs.message.value = '';
    Materialize.toast('특별한 메시지를 전송하였습니다!', 3000);
  },

  render() {
    return (
      <div className="container">
        <h4>메시지 보내기</h4>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" ref="message" className="materialize-textarea" placeholder="전달하려는 메시지를 입력해주세요" autoFocus></textarea>
              <label for="textarea1">메시지</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button style={{width: '100%'}} className="btn-large waves-effect waves-light" type="submit" name="action"><i className="material-icons left">send</i> 입력한 메시지 보내기</button>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col s12">
            {
              _.map(SPECIAL_MESSAGES, (msg) => {
                return (
                  <div className="row">
                    <div className="col s12">
                      <button style={{width: '100%'}} className={`btn-large ${msg.color} waves-effect waves-light`} onClick={this.sendMessage.bind(this, msg.key)}>
                        <i className="material-icons left">{msg.icon}</i> {msg.title}
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

});
