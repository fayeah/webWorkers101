var myWorker = new Worker('./worker.js');

const btnEl = document.getElementById('loadBtn')
const contentEl = document.getElementById('content')
let startTime;

btnEl.onclick = function() {
  startTime = new Date()
  myWorker.postMessage([]);
  console.log('Message posted to worker');
}

myWorker.onmessage = function(e) {
  contentEl.innerHTML = e.data;
  console.log('Message received from worker');
  // 119 milliseconds from click to receive data from web worker
  console.log('time diff', Math.abs(new Date() - startTime));
}