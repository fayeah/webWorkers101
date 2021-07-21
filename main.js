var myWorker = new Worker('./worker.js');
var workerB = new Worker('./workerB.js');

const inputAEl = document.getElementById('inputA')
const inputBEl = document.getElementById('inputB')
const terminateAEl = document.getElementById('terminateA')
const contentEl = document.getElementById('content')
let startTime;

inputAEl.onchange = function() {
  myWorker.postMessage(inputAEl.value);
  console.log('Message posted to worker');
}

inputBEl.onchange = function() {
  myWorker.postMessage(inputBEl.value);
  console.log('Message posted to workerB');
}

myWorker.onmessage = function(e) {
  contentEl.innerHTML = e.data;
  console.log('Message received from worker');
}

workerB.onmessage = function(e) {
  contentEl.innerHTML = e.data;
  console.log('Message received from workerB');
}

terminateAEl.onclick = function() {
  myWorker.terminate()
  workerB.terminate()
}