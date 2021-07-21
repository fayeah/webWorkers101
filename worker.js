// function loadAll() {
//   var html = "";
//   for (var i = 0; i < 100000; i++) {
//     html += "<li>title:" + '我正在测试' + [i] + "</li>";
//   }
//   return html;
// }

// onmessage = function(e) {
//   console.log('Message received from main script');
//   var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//   console.log('Posting message back to main script');
//   postMessage(loadAll());
// }

onconnect = function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }

}