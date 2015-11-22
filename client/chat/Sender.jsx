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

  render() {
    return (
      <div className="container">
        <h1>Sender</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" ref="message" className="materialize-textarea"></textarea>
              <label for="textarea1">전달하려는 메시지를 입력해주세요</label>
            </div>
          </div>
          <button style={{width: '100%'}} className="btn-large waves-effect waves-light" type="submit" name="action">메시지 보내기
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
  }

});
