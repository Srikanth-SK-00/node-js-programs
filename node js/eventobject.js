var events = require('events');
var eventemitter = new events.EventEmitter();
var myevent = function()
{
    console.log('srikanth karthikeyan');
}
eventemitter.on('hi',myevent);
eventemitter.emit('hi');