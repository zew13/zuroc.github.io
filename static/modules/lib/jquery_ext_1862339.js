define("lib/jquery_ext",function(){$.txt2html=function(e){var n,t,r,i,p;for(t=[],p=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split("\n"),r=0,i=p.length;i>r;r++)n=p[r],t.push($.escape(n));return"<p>"+t.join("</p><p>")+"</p>"},window.devicePixelRatio=window.devicePixelRatio||1,$.extend({escape:function(e){return $("<div/>").text(e).html()}}),$(document).ajaxError(function(){return $.modal_alert('<h1><p>出错了 !</p><p><a href=".">点此这里</a> 刷新页面试试？</p></h1>')})});