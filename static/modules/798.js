define("798",function(){var t,i,o,r;$(function(){return NProgress.done()}),t=$(window).width(),414>t&&(o=t/414,document.write("<style>body{zoom:"+o+"}</style>")),i=AV.User.current(),r="",i?(i.fetch(),r="//zuroc.github.io/static/modules/798/login1.js"):r="//zuroc.github.io/static/modules/798/login0.js",document.write('<script src="'+r+'"></script><script>require("798/login'+(!!i-0)+'")</script>')});