module.exports = (app) ->

  app.get '/', (req, res) ->
    res.render 'index'

  app.get '/sensors', (req, res) ->
    res.render 'index'

  app.get '/sensors/:id', (req, res) ->
    res.render 'index'
