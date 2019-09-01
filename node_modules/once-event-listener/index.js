'use strict'

var listen = require('event-listener')

module.exports = function listenOnce (target, event, callback) {
  var remove = listen(target, event, function handleOnce () {
    callback.apply(this, arguments)
    remove()
  })
  .remove
}
