!function(n,i,e,t){"use strict";n.fn.transition=function(){{var a,o=n(this),r=o.selector||"",s=(new Date).getTime(),l=[],u=arguments,m=u[0],c=[].slice.call(arguments,1),d="string"==typeof m;i.requestAnimationFrame||i.mozRequestAnimationFrame||i.webkitRequestAnimationFrame||i.msRequestAnimationFrame||function(n){setTimeout(n,0)}}return o.each(function(i){var f,p,g,v,b,y,h,w,C,A,S,T=n(this),x=this;S={initialize:function(){f=S.get.settings.apply(x,u),v=f.className,g=f.error,b=f.metadata,A="."+f.namespace,C="module-"+f.namespace,p=T.data(C)||S,h=S.get.animationEndEvent(),w=S.get.animationName(),y=S.get.animationStartEvent(),d&&(d=S.invoke(m)),d===!1&&(S.verbose("Converted arguments into settings object",f),f.interval?S.delay(f.animate):S.animate(),S.instantiate())},instantiate:function(){S.verbose("Storing instance of module",S),p=S,T.data(C,p)},destroy:function(){S.verbose("Destroying previous module for",x),T.removeData(C)},refresh:function(){S.verbose("Refreshing display type on next animation"),delete S.displayType},forceRepaint:function(){S.verbose("Forcing element repaint");var n=T.parent(),i=T.next();0===i.length?T.detach().appendTo(n):T.detach().insertBefore(i)},repaint:function(){S.verbose("Repainting element");x.offsetWidth},delay:function(n){var e,a=f.reverse===!0,r="auto"==f.reverse&&S.get.direction()==v.outward;n=typeof n!==t?n:f.interval,e=a||r?(o.length-i)*f.interval:i*f.interval,S.debug("Delaying animation by",e),setTimeout(S.animate,e)},animate:function(n){if(f=n||f,!S.is.supported())return S.error(g.support),!1;if(S.debug("Preparing animation",f.animation),S.is.animating()){if(f.queue)return!f.allowRepeats&&S.has.direction()&&S.is.occurring()&&S.queuing!==!0?S.debug("Animation is currently occurring, preventing queueing same animation",f.animation):S.queue(f.animation),!1;if(!f.allowRepeats&&S.is.occurring())return S.debug("Animation is already occurring, will not execute repeated animation",f.animation),!1;S.debug("New animation started, completing previous early",f.animation),S.complete()}S.can.animate()?S.set.animating(f.animation):S.error(g.noAnimation,f.animation,x)},reset:function(){S.debug("Resetting animation to beginning conditions"),S.remove.animationCallbacks(),S.restore.conditions(),S.remove.animating()},queue:function(n){S.debug("Queueing animation of",n),S.queuing=!0,T.one(h+".queue"+A,function(){S.queuing=!1,S.repaint(),S.animate.apply(this,f)})},complete:function(){S.debug("Animation complete",f.animation),S.remove.completeCallback(),S.remove.failSafe(),S.is.looping()||(S.is.outward()?(S.verbose("Animation is outward, hiding element"),S.restore.conditions(),S.hide(),f.onHide.call(this)):S.is.inward()?(S.verbose("Animation is outward, showing element"),S.restore.conditions(),S.show(),f.onShow.call(this)):S.restore.conditions(),S.remove.animation(),S.remove.animating()),f.onComplete.call(this)},has:{direction:function(i){var e=!1;return i=i||f.animation,"string"==typeof i&&(i=i.split(" "),n.each(i,function(n,i){(i===v.inward||i===v.outward)&&(e=!0)})),e},inlineDisplay:function(){var i=T.attr("style")||"";return n.isArray(i.match(/display.*?;/,""))}},set:{animating:function(n){n=n||f.animation,S.is.animating()||S.save.conditions(),S.remove.direction(),S.remove.completeCallback(),S.can.transition()&&!S.has.direction()&&S.set.direction(),S.remove.hidden(),S.set.display(),T.addClass(v.animating+" "+v.transition+" "+n).addClass(n).one(h+".complete"+A,S.complete),f.useFailSafe&&S.add.failSafe(),S.set.duration(f.duration),f.onStart.call(this),S.debug("Starting tween",n,T.attr("class"))},duration:function(n,i){i=i||f.duration,i="number"==typeof i?i+"ms":i,(i||0===i)&&(S.verbose("Setting animation duration",i),T.css({"-webkit-animation-duration":i,"-moz-animation-duration":i,"-ms-animation-duration":i,"-o-animation-duration":i,"animation-duration":i}))},display:function(){var n=S.get.style(),i=S.get.displayType(),e=n+"display: "+i+" !important;";T.css("display",""),S.refresh(),T.css("display")!==i&&(S.verbose("Setting inline visibility to",i),T.attr("style",e))},direction:function(){T.is(":visible")&&!S.is.hidden()?(S.debug("Automatically determining the direction of animation","Outward"),T.removeClass(v.inward).addClass(v.outward)):(S.debug("Automatically determining the direction of animation","Inward"),T.removeClass(v.outward).addClass(v.inward))},looping:function(){S.debug("Transition set to loop"),T.addClass(v.looping)},hidden:function(){S.is.hidden()||T.addClass(v.transition).addClass(v.hidden),"none"!==T.css("display")&&(S.verbose("Overriding default display to hide element"),T.css("display","none"))},visible:function(){T.addClass(v.transition).addClass(v.visible)}},save:{displayType:function(n){T.data(b.displayType,n)},transitionExists:function(i,e){n.fn.transition.exists[i]=e,S.verbose("Saving existence of transition",i,e)},conditions:function(){T.attr("class")||!1,T.attr("style")||"";T.removeClass(f.animation),S.remove.direction(),S.cache={className:T.attr("class"),style:S.get.style()},S.verbose("Saving original attributes",S.cache)}},restore:{conditions:function(){return S.cache===t?!1:(S.cache.className?T.attr("class",S.cache.className):T.removeAttr("class"),S.cache.style?(S.verbose("Restoring original style attribute",S.cache.style),T.attr("style",S.cache.style)):(S.verbose("Clearing style attribute"),T.removeAttr("style")),void S.verbose("Restoring original attributes",S.cache))}},add:{failSafe:function(){var n=S.get.duration();S.timer=setTimeout(function(){T.trigger(h)},n+f.failSafeDelay),S.verbose("Adding fail safe timer",S.timer)}},remove:{animating:function(){T.removeClass(v.animating)},animation:function(){T.css({"-webkit-animation":"","-moz-animation":"","-ms-animation":"","-o-animation":"",animation:""})},animationCallbacks:function(){S.remove.queueCallback(),S.remove.completeCallback()},queueCallback:function(){T.off(".queue"+A)},completeCallback:function(){T.off(".complete"+A)},display:function(){T.css("display","")},direction:function(){T.removeClass(v.inward).removeClass(v.outward)},failSafe:function(){S.verbose("Removing fail safe timer",S.timer),S.timer&&clearTimeout(S.timer)},hidden:function(){T.removeClass(v.hidden)},visible:function(){T.removeClass(v.visible)},looping:function(){S.debug("Transitions are no longer looping"),S.is.looping()&&(S.reset(),T.removeClass(v.looping))},transition:function(){T.removeClass(v.visible).removeClass(v.hidden)}},get:{settings:function(i,e,t){return"object"==typeof i?n.extend(!0,{},n.fn.transition.settings,i):"function"==typeof t?n.extend({},n.fn.transition.settings,{animation:i,onComplete:t,duration:e}):"string"==typeof e||"number"==typeof e?n.extend({},n.fn.transition.settings,{animation:i,duration:e}):"object"==typeof e?n.extend({},n.fn.transition.settings,e,{animation:i}):"function"==typeof e?n.extend({},n.fn.transition.settings,{animation:i,onComplete:e}):n.extend({},n.fn.transition.settings,{animation:i})},direction:function(i){return i=i||f.animation,"string"==typeof i&&(i=i.split(" "),n.each(i,function(n,i){return i===v.inward?v.inward:i===v.outward?v.outward:void 0})),S.can.transition()?T.is(":visible")&&!S.is.hidden()?v.outward:v.inward:"static"},duration:function(n){return n=n||f.duration,n===!1&&(n=T.css("animation-duration")||0),"string"==typeof n?n.indexOf("ms")>-1?parseFloat(n):1e3*parseFloat(n):n},displayType:function(){return f.displayType?f.displayType:(T.data(b.displayType)===t&&S.can.transition(!0),T.data(b.displayType))},style:function(){var n=T.attr("style")||"";return n.replace(/display.*?;/,"")},transitionExists:function(i){return n.fn.transition.exists[i]},animationName:function(){var n,i=e.createElement("div"),a={animation:"animationName",OAnimation:"oAnimationName",MozAnimation:"mozAnimationName",WebkitAnimation:"webkitAnimationName"};for(n in a)if(i.style[n]!==t)return a[n];return!1},animationStartEvent:function(){var n,i=e.createElement("div"),a={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in a)if(i.style[n]!==t)return a[n];return!1},animationEndEvent:function(){var n,i=e.createElement("div"),a={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in a)if(i.style[n]!==t)return a[n];return!1}},can:{transition:function(i){var e,a,o,r,s,l=T.attr("class"),u=T.prop("tagName"),m=f.animation,c=S.get.transitionExists(m);if(c===t||i){if(S.verbose("Determining whether animation exists"),e=n("<"+u+" />").addClass(l).insertAfter(T),a=e.addClass(m).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css(w),o=e.addClass(v.inward).css(w),s=e.attr("class",l).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"),S.verbose("Determining final display state",s),S.save.displayType(s),e.remove(),a!=o)S.debug("Direction exists for animation",m),r=!0;else{if("none"==a||!a)return void S.debug("No animation defined in css",m);S.debug("Static animation found",m,s),r=!1}S.save.transitionExists(m,r)}return c!==t?c:r},animate:function(){return S.can.transition()!==t}},is:{animating:function(){return T.hasClass(v.animating)},inward:function(){return T.hasClass(v.inward)},outward:function(){return T.hasClass(v.outward)},looping:function(){return T.hasClass(v.looping)},occurring:function(n){return n=n||f.animation,n="."+n.replace(" ","."),T.filter(n).length>0},visible:function(){return T.is(":visible")},hidden:function(){return"hidden"===T.css("visibility")},supported:function(){return w!==!1&&h!==!1}},hide:function(){S.verbose("Hiding element"),S.is.animating()&&S.reset(),S.remove.display(),S.remove.visible(),S.set.hidden(),S.repaint()},show:function(n){S.verbose("Showing element",n),S.remove.hidden(),S.set.visible(),S.set.display(),S.repaint()},toggle:function(){S.is.visible()?S.hide():S.show()},stop:function(){S.debug("Stopping current animation"),T.trigger(h)},stopAll:function(){S.debug("Stopping all animation"),S.remove.queueCallback(),T.trigger(h)},clear:{queue:function(){S.debug("Clearing animation queue"),S.remove.queueCallback()}},enable:function(){S.verbose("Starting animation"),T.removeClass(v.disabled)},disable:function(){S.debug("Stopping animation"),T.addClass(v.disabled)},setting:function(i,e){if(S.debug("Changing setting",i,e),n.isPlainObject(i))n.extend(!0,f,i);else{if(e===t)return f[i];f[i]=e}},internal:function(i,e){if(n.isPlainObject(i))n.extend(!0,S,i);else{if(e===t)return S[i];S[i]=e}},debug:function(){f.debug&&(f.performance?S.performance.log(arguments):(S.debug=Function.prototype.bind.call(console.info,console,f.name+":"),S.debug.apply(console,arguments)))},verbose:function(){f.verbose&&f.debug&&(f.performance?S.performance.log(arguments):(S.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),S.verbose.apply(console,arguments)))},error:function(){S.error=Function.prototype.bind.call(console.error,console,f.name+":"),S.error.apply(console,arguments)},performance:{log:function(n){var i,e,t;f.performance&&(i=(new Date).getTime(),t=s||i,e=i-t,s=i,l.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:x,"Execution Time":e})),clearTimeout(S.performance.timer),S.performance.timer=setTimeout(S.performance.display,100)},display:function(){var i=f.name+":",e=0;s=!1,clearTimeout(S.performance.timer),n.each(l,function(n,i){e+=i["Execution Time"]}),i+=" "+e+"ms",r&&(i+=" '"+r+"'"),o.length>1&&(i+=" ("+o.length+")"),(console.group!==t||console.table!==t)&&l.length>0&&(console.table||n.each(l,function(){}),console.groupEnd()),l=[]}},invoke:function(i,e,o){var r,s,l,u=p;return e=e||c,o=x||o,"string"==typeof i&&u!==t&&(i=i.split(/[\. ]/),r=i.length-1,n.each(i,function(e,a){var o=e!=r?a+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(n.isPlainObject(u[o])&&e!=r)u=u[o];else{if(u[o]!==t)return s=u[o],!1;if(!n.isPlainObject(u[a])||e==r)return u[a]!==t?(s=u[a],!1):!1;u=u[a]}})),n.isFunction(s)?l=s.apply(o,e):s!==t&&(l=s),n.isArray(a)?a.push(l):a!==t?a=[a,l]:l!==t&&(a=l),s!==t?s:!1}},S.initialize()}),a!==t?a:this},n.fn.transition.exists={},n.fn.transition.settings={name:"Transition",debug:!1,verbose:!0,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"There is no css animation matching the one you specified.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);