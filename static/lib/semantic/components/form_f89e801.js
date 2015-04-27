!function(e,t,n,i){"use strict";e.fn.form=function(t,r){var o,a=e(this),s=e.extend(!0,{},e.fn.form.settings,r),l=e.extend({},e.fn.form.settings.defaults,t),c=s.namespace,u=s.metadata,d=s.selector,f=s.className,p=(s.error,"."+c),v="module-"+c,h=a.selector||"",m=(new Date).getTime(),g=[],b=arguments[0],k="string"==typeof b,y=[].slice.call(arguments,1);return a.each(function(){var t,r=e(this),c=e(this).find(d.field),x=e(this).find(d.group),w=e(this).find(d.message),E=(e(this).find(d.prompt),e(this).find(d.submit)),C=e(this).find(d.clear),S=e(this).find(d.reset),R=[],F=!1,z=this,D=r.data(v);t={initialize:function(){t.verbose("Initializing form validation",r,l,s),t.bindEvents(),t.set.defaults(),t.instantiate()},instantiate:function(){t.verbose("Storing instance of module",t),D=t,r.data(v,t)},destroy:function(){t.verbose("Destroying previous module",D),t.removeEvents(),r.removeData(v)},refresh:function(){t.verbose("Refreshing selector cache"),c=r.find(d.field)},submit:function(){t.verbose("Submitting form",r),r.submit()},attachEvents:function(n,i){i=i||"submit",e(n).on("click",function(e){t[i](),e.preventDefault()})},bindEvents:function(){s.keyboardShortcuts&&c.on("keydown"+p,t.event.field.keydown),r.on("submit"+p,t.validate.form),c.on("blur"+p,t.event.field.blur),t.attachEvents(E,"submit"),t.attachEvents(S,"reset"),t.attachEvents(C,"clear"),c.each(function(){var n=e(this).prop("type"),i=t.get.changeEvent(n);e(this).on(i+p,t.event.field.change)})},clear:function(){c.each(function(){var n=e(this),i=n.parent(),r=n.closest(x),o=r.find(d.prompt),a=n.data(u.defaultValue)||"",s=i.is(d.uiCheckbox),l=i.is(d.uiDropdown),c=r.hasClass(f.error);c&&(t.verbose("Resetting error on field",r),r.removeClass(f.error),o.remove()),l?(t.verbose("Resetting dropdown value",i,a),i.dropdown("clear")):s?i.checkbox("uncheck"):(t.verbose("Resetting field value",n,a),n.val(""))})},reset:function(){c.each(function(){var n=e(this),i=n.parent(),r=n.closest(x),o=r.find(d.prompt),a=n.data(u.defaultValue)||"",s=i.is(d.uiCheckbox),l=i.is(d.uiDropdown),c=r.hasClass(f.error);c&&(t.verbose("Resetting error on field",r),r.removeClass(f.error),o.remove()),l?(t.verbose("Resetting dropdown value",i,a),i.dropdown("restore defaults")):s?(t.verbose("Resetting checkbox value",i,a),i.checkbox(a===!0?"check":"uncheck")):(t.verbose("Resetting field value",n,a),n.val(a))})},removeEvents:function(){r.off(p),c.off(p),E.off(p),c.off(p)},event:{field:{keydown:function(n){var i=e(this),r=n.which,o={enter:13,escape:27};r==o.escape&&(t.verbose("Escape key pressed blurring field"),i.blur()),!n.ctrlKey&&r==o.enter&&i.is(d.input)&&i.not(d.checkbox).length>0&&(E.addClass(f.pressed),F||(i.one("keyup"+p,t.event.field.keyup),t.submit(),t.debug("Enter pressed on input submitting form")),F=!0)},keyup:function(){F=!1,E.removeClass(f.pressed)},blur:function(){var n=e(this),i=n.closest(x);i.hasClass(f.error)?(t.debug("Revalidating field",n,t.get.validation(n)),t.validate.field(t.get.validation(n))):("blur"==s.on||"change"==s.on)&&t.validate.field(t.get.validation(n))},change:function(){var n=e(this),i=n.closest(x);("change"==s.on||i.hasClass(f.error)&&s.revalidate)&&(clearTimeout(t.timer),t.timer=setTimeout(function(){t.debug("Revalidating field",n,t.get.validation(n)),t.validate.field(t.get.validation(n))},s.delay))}}},get:{changeEvent:function(e){return"checkbox"==e||"radio"==e||"hidden"==e?"change":t.get.inputEvent()},inputEvent:function(){return n.createElement("input").oninput!==i?"input":n.createElement("input").onpropertychange!==i?"propertychange":"keyup"},field:function(n){return t.verbose("Finding field with identifier",n),c.filter("#"+n).length>0?c.filter("#"+n):c.filter('[name="'+n+'"]').length>0?c.filter('[name="'+n+'"]'):c.filter('[name="'+n+'[]"]').length>0?c.filter('[name="'+n+'[]"]'):c.filter("[data-"+u.validate+'="'+n+'"]').length>0?c.filter("[data-"+u.validate+'="'+n+'"]'):e("<input/>")},fields:function(n){var i=e();return e.each(n,function(e,n){i=i.add(t.get.field(n))}),i},validation:function(n){var i;return e.each(l,function(e,r){t.get.field(r.identifier).get(0)==n.get(0)&&(i=r)}),i||!1},value:function(e){var n,i=[];return i.push(e),n=t.get.values.call(z,i),n[e]},values:function(n){var i=e.isArray(n)?t.get.fields(n):c,r={};return i.each(function(n,i){var o=e(i),a=(o.prop("type"),o.prop("name")),s=o.val(),l=o.is(d.checkbox),c=o.is(d.radio),u=-1!==a.indexOf("[]"),f=l?o.is(":checked"):!1;if(a)if(u)if(a=a.replace("[]",""),r[a]||(r[a]=[]),l){if(!f)return t.debug("Omitted unchecked checkbox",o),!0;r[a].push(s)}else r[a].push(s);else if(c)f&&(r[a]=s);else if(l){if(!f)return t.debug("Omitted unchecked checkbox",o),!0;r[a]=!0}else r[a]=s}),r}},has:{field:function(e){return t.verbose("Checking for existence of a field with identifier",e),c.filter("#"+e).length>0?!0:c.filter('[name="'+e+'"]').length>0?!0:c.filter("[data-"+u.validate+'="'+e+'"]').length>0?!0:!1}},add:{prompt:function(n,o){var a=t.get.field(n),l=a.closest(x),c=l.children(d.prompt),u=0!==c.length;o="string"==typeof o?[o]:o,t.verbose("Adding field error state",n),l.addClass(f.error),s.inline&&(u||(c=s.templates.prompt(o),c.appendTo(l)),c.html(o[0]),u?t.verbose("Inline errors are disabled, no inline error added",n):s.transition&&e.fn.transition!==i&&r.transition("is supported")?(t.verbose("Displaying error with css transition",s.transition),c.transition(s.transition+" in",s.duration)):(t.verbose("Displaying error with fallback javascript animation"),c.fadeIn(s.duration)))},errors:function(e){t.debug("Adding form error messages",e),w.html(s.templates.error(e))}},remove:{prompt:function(n){var o=t.get.field(n.identifier),a=o.closest(x),l=a.children(d.prompt);a.removeClass(f.error),s.inline&&l.is(":visible")&&(t.verbose("Removing prompt for field",n),s.transition&&e.fn.transition!==i&&r.transition("is supported")?l.transition(s.transition+" out",s.duration,function(){l.remove()}):l.fadeOut(s.duration,function(){l.remove()}))}},set:{success:function(){r.removeClass(f.error).addClass(f.success)},defaults:function(){c.each(function(){var t=e(this),n=t.filter(d.checkbox).length>0,i=n?t.is(":checked"):t.val();t.data(u.defaultValue,i)})},error:function(){r.removeClass(f.success).addClass(f.error)},value:function(e,n){var i={};return i[e]=n,t.set.values.call(z,i)},values:function(n){e.isEmptyObject(n)||(e.each(n,function(n,i){var r,o=t.get.field(n),a=o.parent(),s=e.isArray(i),l=a.is(d.uiCheckbox),c=a.is(d.uiDropdown),u=o.is(d.radio)&&l,f=o.length>0;f&&(s&&l?(t.verbose("Selecting multiple",i,o),a.checkbox("uncheck"),e.each(i,function(e,t){r=o.filter('[value="'+t+'"]'),a=r.parent(),r.length>0&&a.checkbox("check")})):u?(t.verbose("Selecting radio value",i,o),o.filter('[value="'+i+'"]').parent(d.uiCheckbox).checkbox("check")):l?(t.verbose("Setting checkbox value",i,a),a.checkbox(i===!0?"check":"uncheck")):c?(t.verbose("Setting dropdown value",i,a),a.dropdown("set selected",i)):(t.verbose("Setting field value",i,o),o.val(i)))}),t.validate.form())}},validate:{form:function(n){var o=!0;return F?!1:(R=[],e.each(l,function(e,n){t.validate.field(n)||(o=!1)}),o?(t.debug("Form has no validation errors, submitting"),t.set.success(),s.onSuccess.call(z,n)):(t.debug("Form has errors"),t.set.error(),s.inline||t.add.errors(R),r.data("moduleApi")!==i&&n.stopImmediatePropagation(),s.onFailure.call(z,R)))},field:function(n){var r=t.get.field(n.identifier),o=!0,a=[];return r.prop("disabled")?(t.debug("Field is disabled. Skipping",n.identifier),o=!0):n.optional&&""===e.trim(r.val())?(t.debug("Field is optional and empty. Skipping",n.identifier),o=!0):n.rules!==i&&e.each(n.rules,function(e,i){t.has.field(n.identifier)&&!t.validate.rule(n,i)&&(t.debug("Field is invalid",n.identifier,i.type),a.push(i.prompt),o=!1)}),o?(t.remove.prompt(n,a),s.onValid.call(r),!0):(R=R.concat(a),t.add.prompt(n.identifier,a),s.onInvalid.call(r,a),!1)},rule:function(n,r){var o,a,l=t.get.field(n.identifier),c=r.type,u=e.trim(l.val()+""),d=/\[(.*)\]/i,f=d.exec(c),p=!0;return f!==i&&null!==f?(o=""+f[1],a=c.replace(f[0],""),p=s.rules[a].call(z,u,o)):p=s.rules[c].call(l,u),p}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,s,t);else{if(n===i)return s[t];s[t]=n}},internal:function(n,r){if(e.isPlainObject(n))e.extend(!0,t,n);else{if(r===i)return t[n];t[n]=r}},debug:function(){s.debug&&(s.performance?t.performance.log(arguments):(t.debug=Function.prototype.bind.call(console.info,console,s.name+":"),t.debug.apply(console,arguments)))},verbose:function(){s.verbose&&s.debug&&(s.performance?t.performance.log(arguments):(t.verbose=Function.prototype.bind.call(console.info,console,s.name+":"),t.verbose.apply(console,arguments)))},error:function(){t.error=Function.prototype.bind.call(console.error,console,s.name+":"),t.error.apply(console,arguments)},performance:{log:function(e){var n,i,r;s.performance&&(n=(new Date).getTime(),r=m||n,i=n-r,m=n,g.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":i})),clearTimeout(t.performance.timer),t.performance.timer=setTimeout(t.performance.display,100)},display:function(){var n=s.name+":",r=0;m=!1,clearTimeout(t.performance.timer),e.each(g,function(e,t){r+=t["Execution Time"]}),n+=" "+r+"ms",h&&(n+=" '"+h+"'"),a.length>1&&(n+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&g.length>0&&(console.table||e.each(g,function(){}),console.groupEnd()),g=[]}},invoke:function(t,n,r){var a,s,l,c=D;return n=n||y,r=z||r,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,r){var o=n!=a?r+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[o])&&n!=a)c=c[o];else{if(c[o]!==i)return s=c[o],!1;if(!e.isPlainObject(c[r])||n==a)return c[r]!==i?(s=c[r],!1):!1;c=c[r]}})),e.isFunction(s)?l=s.apply(r,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},k?(D===i&&t.initialize(),t.invoke(b)):(D!==i&&D.invoke("destroy"),t.initialize())}),o!==i?o:this},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!0,performance:!0,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:".reset",submit:".submit",uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{method:"The method you called is not defined."},templates:{error:function(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",e(n)},prompt:function(t){return e("<div/>").addClass("ui red pointing prompt label").html(t[0])}},rules:{checked:function(){return e(this).filter(":checked").length>0},contains:function(e,t){return t=t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),-1!==e.search(new RegExp(t,"i"))},containsExactly:function(e,t){return t=t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),-1!==e.search(new RegExp(t))},email:function(e){var t=new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?","i");return t.test(e)},empty:function(e){return!(e===i||""===e)},integer:function(e,t){var n,r,o,a=/^\-?\d+$/;return t===i||""===t||".."===t||(-1==t.indexOf("..")?a.test(t)&&(n=r=t-0):(o=t.split("..",2),a.test(o[0])&&(n=o[0]-0),a.test(o[1])&&(r=o[1]-0))),a.test(e)&&(n===i||e>=n)&&(r===i||r>=e)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,e="string"==typeof e?e.toLowerCase():e,e==t},isExactly:function(e,t){return e==t},length:function(e,t){return e!==i?e.length>=t:!1},match:function(t,n){var r,o=e(this);return o.find("#"+n).length>0?r=o.find("#"+n).val():o.find('[name="'+n+'"]').length>0?r=o.find('[name="'+n+'"]').val():o.find('[data-validate="'+n+'"]').length>0&&(r=o.find('[data-validate="'+n+'"]').val()),r!==i?t.toString()==r.toString():!1},maxLength:function(e,t){return e!==i?e.length<=t:!1},not:function(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t},notExactly:function(e,t){return e!=t},url:function(e){var t=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;return t.test(e)}}}}(jQuery,window,document);