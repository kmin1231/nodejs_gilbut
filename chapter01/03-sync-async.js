// 03-sync-async.js

function longRunningTask() {
    console.log('Long-running task...');
    console.log('Completed!');
}

console.log('version 1: blocking (synchronous)');
console.log('Start');
longRunningTask();
console.log('Next task');  // printed after the task is completed

console.log();

console.log('version 2: non-blocking (asynchronous)');
console.log('Start');
setTimeout(longRunningTask, 0);  // feat. event loop
console.log('Next task');
// 'setTimeout' callback function is executed only after the current execution stack is clear