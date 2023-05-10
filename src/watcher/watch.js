const { TscWatchClient } = require('tsc-watch/client.js');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});
myEmitter.on('example', function exampleListener(...args) {
   const sum = args.reduce((a, b) => a + b);
   console.log(sum);
})

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

const watch = new TscWatchClient();



watch.on('started', () => {
   console.log('Compilation started');
})

watch.on('first_success', () => {
   console.log('First success!');
})

watch.on('success', async () => {
   console.log('successfully building waiting for 5 seconds');
   myEmitter.emit('example', 1,2,3,4);
})

watch.on('compile_errors', () => {
   console.error(`compilation error`);
   myEmitter.emit('example', 1,2,3,4);

   watch.em
})

watch.start('--project', '.');

try {
   
} catch (e) {
   watch.kill();
}