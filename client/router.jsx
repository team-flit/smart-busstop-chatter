const containerElement = document.getElementById("render-target");

FlowRouter.route('/sender', {
  action(params) {
    ReactLayout.render(Sender);
  }
});

FlowRouter.route('/', {
  action(params) {
    ReactLayout.render(Receiver);
  }
});
