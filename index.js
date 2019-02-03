module.exports = app => {
  app.log('Yay, the app was loaded!')

  app.on('pull_request.review_requested', async context => {
    app.log('review requested')
    app.log(context.payload.requested_reviewer.login);
  })

  app.on('pull_request.review_request_removed', async context => {
    app.log('review removed')
    app.log(context.payload.requested_reviewer.login);
  })
}
