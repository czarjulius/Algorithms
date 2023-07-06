const Emmiter = require('./eventEmitter');

const myEmmiter = new Emmiter();

myEmmiter.on('shout', () => console.log('Start shouting!'));

myEmmiter.emit('shout');
