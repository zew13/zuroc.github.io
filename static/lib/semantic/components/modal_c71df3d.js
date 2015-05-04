!function(e,i,n,t){"use strict";e.fn.modal=function(o){var a,s=e(this),r=e(i),c=e(n),l=e("body"),u=s.selector||"",d=(new Date).getTime(),m=[],f=arguments[0],g="string"==typeof f,h=[].slice.call(arguments,1),v=i.requestAnimationFrame||i.mozRequestAnimationFrame||i.webkitRequestAnimationFrame||i.msRequestAnimationFrame||function(e){setTimeout(e,0)};return s.each(function(){var s,b,p,y,w,k,S,M,A,C=e.isPlainObject(o)?e.extend(!0,{},e.fn.modal.settings,o):e.extend({},e.fn.modal.settings),D=C.selector,F=C.className,H=C.namespace,T=C.error,O="."+H,x="module-"+H,z=e(this),q=e(C.context),E=z.find(D.close),j=this,N=z.data(x);A={initialize:function(){A.verbose("Initializing dimmer",q),A.create.id(),A.create.dimmer(),A.refreshModals(),A.verbose("Attaching close events",E),A.bind.events(),A.observeChanges(),A.instantiate()},instantiate:function(){A.verbose("Storing instance of modal"),N=A,z.data(x,N)},create:{dimmer:function(){var i={debug:C.debug,dimmerName:"modals",duration:{show:C.duration,hide:C.duration}},n=e.extend(!0,i,C.dimmerSettings);return e.fn.dimmer===t?void A.error(T.dimmer):(A.debug("Creating dimmer with settings",n),y=q.dimmer(n),C.detachable&&(A.verbose("Modal is detachable, moving content into dimmer"),y.dimmer("add content",z)),void(w=y.dimmer("get dimmer")))},id:function(){S=(Math.random().toString(16)+"000000000").substr(2,8),k="."+S,A.verbose("Creating unique id for element",S)}},destroy:function(){A.verbose("Destroying previous modal"),z.removeData(x).off(O),r.off(k),E.off(O),q.dimmer("destroy")},observeChanges:function(){"MutationObserver"in i&&(M=new MutationObserver(function(){A.debug("DOM tree modified, refreshing"),A.refresh()}),M.observe(j,{childList:!0,subtree:!0}),A.debug("Setting up mutation observer",M))},refresh:function(){A.remove.scrolling(),A.cacheSizes(),A.set.screenHeight(),A.set.type(),A.set.position()},refreshModals:function(){b=z.siblings(D.modal),s=b.add(z)},attachEvents:function(i,n){var t=e(i);n=e.isFunction(A[n])?A[n]:A.toggle,t.length>0?(A.debug("Attaching modal events to element",i,n),t.off(O).on("click"+O,n)):A.error(T.notFound,i)},bind:{events:function(){E.on("click"+O,A.event.close),r.on("resize"+k,A.event.resize)}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{close:function(){A.verbose("Closing element pressed"),e(this).is(D.approve)?C.onApprove.call(j)!==!1?A.hide():A.verbose("Approve callback returned false cancelling hide"):e(this).is(D.deny)?C.onDeny.call(j)!==!1?A.hide():A.verbose("Deny callback returned false cancelling hide"):A.hide()},click:function(i){0===e(i.target).closest(z).length&&(A.debug("Dimmer clicked, hiding all modals"),A.is.active()&&(A.remove.clickaway(),C.allowMultiple?A.hide():A.hideAll()))},debounce:function(e,i){clearTimeout(A.timer),A.timer=setTimeout(e,i)},keyboard:function(e){var i=e.which,n=27;i==n&&(C.closable?(A.debug("Escape key pressed hiding modal"),A.hide()):A.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){y.dimmer("is active")&&v(A.refresh)}},toggle:function(){A.is.active()||A.is.animating()?A.hide():A.show()},show:function(i){i=e.isFunction(i)?i:function(){},A.refreshModals(),A.showModal(i)},hide:function(i){i=e.isFunction(i)?i:function(){},A.refreshModals(),A.hideModal(i)},showModal:function(i){i=e.isFunction(i)?i:function(){},A.is.animating()||!A.is.active()?(A.showDimmer(),A.cacheSizes(),A.set.position(),A.set.screenHeight(),A.set.type(),A.set.clickaway(),!C.allowMultiple&&b.filter("."+F.active).length>0?(A.debug("Other modals visible, queueing show animation"),A.hideOthers(A.showModal)):(C.onShow.call(j),C.transition&&e.fn.transition!==t&&z.transition("is supported")?(A.debug("Showing modal with css animations"),z.transition({debug:C.debug,animation:C.transition+" in",queue:C.queue,duration:C.duration,useFailSafe:!0,onComplete:function(){C.onVisible.apply(j),A.add.keyboardShortcuts(),A.save.focus(),A.set.active(),A.set.autofocus(),i()}})):(A.debug("Showing modal with javascript"),z.fadeIn(C.duration,C.easing,function(){C.onVisible.apply(j),A.add.keyboardShortcuts(),A.save.focus(),A.set.active(),i()})))):A.debug("Modal is already visible")},hideModal:function(i,n){i=e.isFunction(i)?i:function(){},A.debug("Hiding modal"),C.onHide.call(j),(A.is.animating()||A.is.active())&&(C.transition&&e.fn.transition!==t&&z.transition("is supported")?(A.remove.active(),z.transition({debug:C.debug,animation:C.transition+" out",queue:C.queue,duration:C.duration,useFailSafe:!0,onStart:function(){A.othersActive()||n||A.hideDimmer(),A.remove.keyboardShortcuts()},onComplete:function(){C.onHidden.call(j),A.restore.focus(),i()}})):(A.remove.active(),A.othersActive()||A.hideDimmer(),A.remove.keyboardShortcuts(),z.fadeOut(C.duration,C.easing,function(){C.onHidden.call(j),A.restore.focus(),i()})))},showDimmer:function(){y.dimmer("is animating")||!y.dimmer("is active")?(A.debug("Showing dimmer"),y.dimmer("show")):A.debug("Dimmer already visible")},hideDimmer:function(){return y.dimmer("is animating")||y.dimmer("is active")?void y.dimmer("hide",function(){C.transition&&e.fn.transition!==t&&z.transition("is supported")&&(A.remove.clickaway(),A.remove.screenHeight())}):void A.debug("Dimmer is not visible cannot hide")},hideAll:function(i){var n=s.filter(":visible");i=e.isFunction(i)?i:function(){},n.length>0&&(A.debug("Hiding all visible modals"),A.hideDimmer(),n.modal("hide modal",i))},hideOthers:function(i){var n=b.filter(":visible");i=e.isFunction(i)?i:function(){},n.length>0&&(A.debug("Hiding other modals",b),n.modal("hide modal",i,!0))},othersActive:function(){return b.filter("."+F.active).length>0},add:{keyboardShortcuts:function(){A.verbose("Adding keyboard shortcuts"),c.on("keyup"+O,A.event.keyboard)}},save:{focus:function(){p=e(n.activeElement).blur()}},restore:{focus:function(){p&&p.length>0&&p.focus()}},remove:{active:function(){z.removeClass(F.active)},clickaway:function(){C.closable&&w.off("click"+k)},screenHeight:function(){A.cache.height>A.cache.pageHeight&&(A.debug("Removing page height"),l.css("height",""))},keyboardShortcuts:function(){A.verbose("Removing keyboard shortcuts"),c.off("keyup"+O)},scrolling:function(){y.removeClass(F.scrolling),z.removeClass(F.scrolling)}},cacheSizes:function(){var o=z.outerHeight();(A.cache===t||0!==o)&&(A.cache={pageHeight:e(n).outerHeight(),height:o+C.offset,contextHeight:"body"==C.context?e(i).height():y.height()}),A.debug("Caching modal and container sizes",A.cache)},can:{fit:function(){return A.cache.height+2*C.padding<A.cache.contextHeight}},is:{active:function(){return z.hasClass(F.active)},animating:function(){return z.transition("is supported")?z.transition("is animating"):z.is(":visible")},scrolling:function(){return y.hasClass(F.scrolling)},modernBrowser:function(){return!(i.ActiveXObject||"ActiveXObject"in i)}},set:{autofocus:function(){if(C.autofocus){var e=z.find(":input:visible"),i=e.filter("[autofocus]"),n=i.length>0?i:e;n.first().focus()}},clickaway:function(){C.closable&&w.on("click"+k,A.event.click)},screenHeight:function(){A.can.fit()?l.css("height",""):(A.debug("Modal is taller than page content, resizing page height"),l.css("height",A.cache.height+C.padding/2))},active:function(){z.addClass(F.active)},scrolling:function(){y.addClass(F.scrolling),z.addClass(F.scrolling)},type:function(){A.can.fit()?(A.verbose("Modal fits on screen"),A.othersActive||A.remove.scrolling()):(A.verbose("Modal cannot fit on screen setting to scrolling"),A.set.scrolling())},position:function(){A.verbose("Centering modal on page",A.cache),z.css(A.can.fit()?{top:"",marginTop:-(A.cache.height/2)}:{marginTop:"",top:c.scrollTop()})}},setting:function(i,n){if(A.debug("Changing setting",i,n),e.isPlainObject(i))e.extend(!0,C,i);else{if(n===t)return C[i];C[i]=n}},internal:function(i,n){if(e.isPlainObject(i))e.extend(!0,A,i);else{if(n===t)return A[i];A[i]=n}},debug:function(){C.debug&&(C.performance?A.performance.log(arguments):(A.debug=Function.prototype.bind.call(console.info,console,C.name+":"),A.debug.apply(console,arguments)))},verbose:function(){C.verbose&&C.debug&&(C.performance?A.performance.log(arguments):(A.verbose=Function.prototype.bind.call(console.info,console,C.name+":"),A.verbose.apply(console,arguments)))},error:function(){A.error=Function.prototype.bind.call(console.error,console,C.name+":"),A.error.apply(console,arguments)},performance:{log:function(e){var i,n,t;C.performance&&(i=(new Date).getTime(),t=d||i,n=i-t,d=i,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:j,"Execution Time":n})),clearTimeout(A.performance.timer),A.performance.timer=setTimeout(A.performance.display,100)},display:function(){var i=C.name+":",n=0;d=!1,clearTimeout(A.performance.timer),e.each(m,function(e,i){n+=i["Execution Time"]}),i+=" "+n+"ms",u&&(i+=" '"+u+"'"),(console.group!==t||console.table!==t)&&m.length>0&&(console.groupCollapsed(i),console.table?console.table(m):e.each(m,function(e,i){console.log(i.Name+": "+i["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(i,n,o){var s,r,c,l=N;return n=n||h,o=j||o,"string"==typeof i&&l!==t&&(i=i.split(/[\. ]/),s=i.length-1,e.each(i,function(n,o){var a=n!=s?o+i[n+1].charAt(0).toUpperCase()+i[n+1].slice(1):i;if(e.isPlainObject(l[a])&&n!=s)l=l[a];else{if(l[a]!==t)return r=l[a],!1;if(!e.isPlainObject(l[o])||n==s)return l[o]!==t?(r=l[o],!1):!1;l=l[o]}})),e.isFunction(r)?c=r.apply(o,n):r!==t&&(c=r),e.isArray(a)?a.push(c):a!==t?a=[a,c]:c!==t&&(a=c),r}},g?(N===t&&A.initialize(),A.invoke(f)):(N!==t&&N.invoke("destroy"),A.initialize())}),a!==t?a:this},e.fn.modal.settings={name:"Modal",namespace:"modal",debug:!1,verbose:!0,performance:!0,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,dimmerSettings:{closable:!1,useCSS:!0},context:"body",queue:!1,duration:500,easing:"easeOutExpo",offset:0,transition:"scale",padding:50,onShow:function(){},onHide:function(){},onVisible:function(){},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:".close, .actions .button",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",scrolling:"scrolling"}}}(jQuery,window,document);