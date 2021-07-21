const heavyCalculate = input => {
  // assume there is a heavey calculation
  // ...
  return 'B: ' + input 
}


onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (heavyCalculate(e.data));
  console.log('Posting message back to main script');
  postMessage(workerResult);
}
