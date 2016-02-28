var $ = require('jquery');

$(document).ready(function(){
  var win1 = document.getElementById('win1');
  win1.insertCSS("body{border-top:4px red solid !important;}");
  win1.executeJavaScript("$('#content').hide();");

  console.log("check");
});
