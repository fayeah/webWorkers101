function loadAll() {
  let time = new Date()
  var html = "";
  for (var i = 0; i < 100000; i++) {
    html += "<li>title:" + '我正在测试' + [i] + "</li>";
  }
  document.getElementById("content").innerHTML = html;
  console.log('data calculated in diff', Math.abs(new Date() - time))
}

loadAll()