var broccoli = require('broccoli')
var program = require('commander')
var copyDereferenceSync = require('copy-dereference').sync
var server = require('./server')

module.exports = broccoliCLI
function broccoliCLI () {
  var actionPerformed = false

  program.command('serve')
    .description('start a broccoli server')
    .option('--port <port>', 'the port to bind to [4200]', 4200)
    .option('--host <host>', 'the host to bind to [localhost]', 'localhost')
    .action(function(options) {
      actionPerformed = true
      server.serve(getBuilder(), options)
    })

  program.parse(process.argv)
  if(!actionPerformed) {
    server.serve(getBuilder(), {port: 4200, host: 'localhost'})
  }
}

function getBuilder () {
  var tree = broccoli.loadBrocfile()
  return new broccoli.Builder(tree)
}
