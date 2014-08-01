module.exports = (app) ->

  app.get '/', (req, res) ->
    res.render 'index', title: 'Express'

  app.get '/sensors', (req, res) ->
    res.render 'index', title: 'Express'
