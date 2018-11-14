var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function(){
    console.log('Alarm has been triggered');
}
var gn = function(){
    console.log('Call 911!');
}
eventEmitter.on('call', fn);
eventEmitter.on('call2', gn);
eventEmitter.emit('call');
eventEmitter.emit('call2');





