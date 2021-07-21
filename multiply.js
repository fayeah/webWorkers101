var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result1 = document.querySelector('.result1');

if (!!window.SharedWorker) {
  var myWorker = new SharedWorker("worker.js");

  first.onchange = function() {
    myWorker.port.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  second.onchange = function() {
    myWorker.port.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  myWorker.port.onmessage = function(e) {
    result1.textContent = e.data;
    console.log('Message received from worker');
    console.log(e.lastEventId);
  }
}


// if (!!window.Worker) {

//   // squareNumber.onchange = function() {
//   //   myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
//   //   console.log('Message posted to worker');
//   // }

//   // myWorker.port.onmessage = function(e) {
//   //   result2.textContent = e.data;
//   //   console.log('Message received from worker');
//   // }


//   first.onchange = function(e) {
//     myWorker.postMessage([first.value, second.value]);
//   }
 
//   second.onchange = function(e) {
//     myWorker.postMessage([first.value, second.value]);
//   }
  
//   myWorker.onmessage = function(e) {
//     result1.textContent = e.data;
//   }
// }
