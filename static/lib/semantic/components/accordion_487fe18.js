!function(e,t,n,i){"use strict";e.fn.accordion=function(n){{var o,a=e(this),s=(new Date).getTime(),r=[],c=arguments[0],l="string"==typeof c,u=[].slice.call(arguments,1);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)}}return a.each(function(){var d,m,g=e.isPlainObject(n)?e.extend(!0,{},e.fn.accordion.settings,n):e.extend({},e.fn.accordion.settings),f=g.className,p=g.namespace,v=g.selector,h=g.error,b="."+p,y="module-"+p,C=a.selector||"",O=e(this),x=O.find(v.title),F=O.find(v.content),q=this,A=O.data(y);m={initialize:function(){m.debug("Initializing",O),m.bind.events(),m.observeChanges(),m.instantiate()},instantiate:function(){A=m,O.data(y,m)},destroy:function(){m.debug("Destroying previous instance",O),O.off(b).removeData(y)},refresh:function(){x=O.find(v.title),F=O.find(v.content)},observeChanges:function(){"MutationObserver"in t&&(d=new MutationObserver(function(){m.debug("DOM tree modified, updating selector cache"),m.refresh()}),d.observe(q,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",d))},bind:{events:function(){m.debug("Binding delegated events"),O.on("click"+b,v.trigger,m.event.click)}},event:{click:function(){m.toggle.call(this)}},toggle:function(t){var n=t!==i?"number"==typeof t?x.eq(t):e(t).closest(v.title):e(this).closest(v.title),o=n.next(F),a=o.hasClass(f.animating),s=o.hasClass(f.active),r=s&&!a,c=!s&&a;m.debug("Toggling visibility of content",n),r||c?g.collapsible?m.close.call(n):m.debug("Cannot close accordion content collapsing is disabled"):m.open.call(n)},open:function(t){var n=t!==i?"number"==typeof t?x.eq(t):e(t).closest(v.title):e(this).closest(v.title),o=n.next(F),a=o.hasClass(f.animating),s=o.hasClass(f.active),r=!s&&!a;r&&(m.debug("Opening accordion content",n),g.exclusive&&m.closeOthers.call(n),n.addClass(f.active),o.addClass(f.animating),g.animateChildren&&(e.fn.transition!==i&&O.transition("is supported")?o.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:g.debug,verbose:g.verbose,duration:g.duration}):o.children().stop(!0).animate({opacity:1},g.duration,m.resetOpacity)),o.stop(!0).slideDown(g.duration,g.easing,function(){o.removeClass(f.animating).addClass(f.active),m.reset.display.call(this),g.onOpen.call(this),g.onChange.call(this)}))},close:function(t){var n=t!==i?"number"==typeof t?x.eq(t):e(t).closest(v.title):e(this).closest(v.title),o=n.next(F),a=o.hasClass(f.animating),s=o.hasClass(f.active),r=!s&&a,c=s&&a;!s&&!r||c||(m.debug("Closing accordion content",o),n.removeClass(f.active),o.addClass(f.animating),g.animateChildren&&(e.fn.transition!==i&&O.transition("is supported")?o.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:g.debug,verbose:g.verbose,duration:g.duration}):o.children().stop(!0).animate({opacity:0},g.duration,m.resetOpacity)),o.stop(!0).slideUp(g.duration,g.easing,function(){o.removeClass(f.animating).removeClass(f.active),m.reset.display.call(this),g.onClose.call(this),g.onChange.call(this)}))},closeOthers:function(t){var n,o,a,s=t!==i?x.eq(t):e(this).closest(v.title),r=s.parents(v.content).prev(v.title),c=s.closest(v.accordion),l=v.title+"."+f.active+":visible",u=v.content+"."+f.active+":visible";g.closeNested?(n=c.find(l).not(r),a=n.next(F)):(n=c.find(l).not(r),o=c.find(u).find(l).not(r),n=n.not(o),a=n.next(F)),n.length>0&&(m.debug("Exclusive enabled, closing other content",n),n.removeClass(f.active),g.animateChildren&&(e.fn.transition!==i&&O.transition("is supported")?a.children().transition({animation:"fade out",useFailSafe:!0,debug:g.debug,verbose:g.verbose,duration:g.duration}):a.children().stop().animate({opacity:0},g.duration,m.resetOpacity)),a.stop().slideUp(g.duration,g.easing,function(){e(this).removeClass(f.active),m.reset.display.call(this)}))},reset:{display:function(){m.verbose("Removing inline display from element",this),e(this).css("display",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")},opacity:function(){m.verbose("Removing inline opacity from element",this),e(this).css("opacity",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")}},setting:function(t,n){if(m.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];g[t]=n}},internal:function(t,n){return m.debug("Changing internal",t,n),n===i?m[t]:void(e.isPlainObject(t)?e.extend(!0,m,t):m[t]=n)},debug:function(){g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments)},performance:{log:function(e){var t,n,i;g.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,r.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:q,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,100)},display:function(){var t=g.name+":",n=0;s=!1,clearTimeout(m.performance.timer),e.each(r,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",C&&(t+=" '"+C+"'"),(console.group!==i||console.table!==i)&&r.length>0&&(console.table||e.each(r,function(){}),console.groupEnd()),r=[]}},invoke:function(t,n,a){var s,r,c,l=A;return n=n||u,a=q||a,"string"==typeof t&&l!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(n,o){var a=n!=s?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[a])&&n!=s)l=l[a];else{if(l[a]!==i)return r=l[a],!1;if(!e.isPlainObject(l[o])||n==s)return l[o]!==i?(r=l[o],!1):(m.error(h.method,t),!1);l=l[o]}})),e.isFunction(r)?c=r.apply(a,n):r!==i&&(c=r),e.isArray(o)?o.push(c):o!==i?o=[o,c]:c!==i&&(o=c),r}},l?(A===i&&m.initialize(),m.invoke(c)):(A!==i&&A.invoke("destroy"),m.initialize())}),o!==i?o:this},e.fn.accordion.settings={name:"Accordion",namespace:"accordion",debug:!1,verbose:!0,performance:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpen:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},e.extend(e.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document);