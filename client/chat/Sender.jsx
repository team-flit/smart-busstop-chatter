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
          <button style={{width: '100%'}} className="btn-large waves-effect waves-light" type="submit" name="action">메시지 보내기
            <i className="material-icons right">send</i>
          </button>
        </form>

        <div className="row">
          <div className="col s12">
            <h6>특별한 메시지를 보내주세요</h6>
          </div>
          <div className="col s12">
            <div className="row">
              <div className="col s4">
                <button style={{width: '100%'}} className="btn-large orange waves-effect waves-light" onClick={this.sendMessage.bind(this, 'STOP_SMOKING')}>
                  <i className="material-icons left">smoke_free</i> 담배 좀 꺼주세요
                </button>
              </div>
              <div className="col s4">
                <button style={{width: '100%'}} className="btn-large red waves-effect waves-light" onClick={this.sendMessage.bind(this, 'PERVERT_ALERT')}>
                  <i className="material-icons left">report</i> 치한이 있어요
                </button>
              </div>
              <div className="col s4">
                <button style={{width: '100%'}} className="btn-large indigo waves-effect waves-light" onClick={this.sendMessage.bind(this, 'NEED_YOUR_HELP')}>
                  <i className="material-icons left">live_help</i> 도움이 필요해요
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

});
