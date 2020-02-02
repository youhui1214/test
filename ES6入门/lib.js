
var counter = 3;

function addCounter() {
    counter = 4;
    
    console.log('counter++');
}

module.exports = {
    counter: counter,
    addCounter: addCounter,
};
