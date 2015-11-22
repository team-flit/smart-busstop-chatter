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


// FlowRouter.route('/diary', {
//   action(params) {
//     ReactLayout.render(Diary);
//   }
// });
//
// FlowRouter.route('/diary/:shortId', {
//   action(params) {
//     ReactLayout.render(Diary, {shortId: params.shortId});
//   }
// });
//
// FlowRouter.route('/login', {
//   action(params) {
//     ReactLayout.render(Login);
//   }
// });
//
// FlowRouter.route('/profile', {
//   action(params) {
//     ReactLayout.render(Profile);
//   }
// });
