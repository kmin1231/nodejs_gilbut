// 12-promise-function-version.js

function checkCondition(condition) {
    return new Promise((resolve, reject) => {
        if (condition) {
            resolve('Success');
        } else {
            reject('Failure');
        }
    });
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function handleCondition(condition, label) {
    checkCondition(condition)
    .then((message) => {
        console.log(`${label}: ${message}`);
    })
    .catch((error) => {
        console.error(`${label}: ${error}`);
    })
    .finally(() => {
        console.log(`${label}: Always`);
    });
}


const condition1 = true;
const condition2 = false;


async function runCondition() {
    console.log('[case1] true');
    await handleCondition(condition1, 'condition 1');

    await sleep(2000);
    console.log();

    console.log('[case2] false');
    await handleCondition(condition2, 'condition 2');
}

runCondition();