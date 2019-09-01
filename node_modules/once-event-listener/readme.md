# once-event-listener [![Build Status](https://travis-ci.org/bendrucker/once-event-listener.svg?branch=master)](https://travis-ci.org/bendrucker/once-event-listener)

> Listen on a DOM event once


## Install

```
$ npm install --save once-event-listener
```


## Usage

```js
var once = require('once-event-listener')

once(window, 'load', function onLoad () {
  //=> onLoad is removed once called
})
```

## API

#### `once(target, event, callback)` -> `undefined`

##### target

*Required*  
Type: [`eventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

A DOM node that triggers events.

##### event

*Required*  
Type: `string`

The event to listen on.

##### callback

*Required*  
Type: `string`  
Arguments: `event`

A callback to call when the event is triggered.


## License

MIT © [Ben Drucker](http://bendrucker.me)
