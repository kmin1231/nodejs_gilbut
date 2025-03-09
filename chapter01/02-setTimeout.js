// 02-setTimeout.js

function run() {
    // function to be run after 'x' seconds
    // 'x' is dynamic variable
    console.log(`executed after ${x} seconds...`);
}

let x = 3;  // set the delay in seconds

console.log('START!');  // executed immediately

setTimeout(run, x * 1000);
// 'setTimeout' schedules 'run()' to execute after 'x' seconds (x * 1000 milliseconds)
// changed to use a dynamic variable 'x' for flexibility

console.log('END!');  // executed immediately