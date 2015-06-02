// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 4
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var P=this,sa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ta=function(a,b){var d=Array.prototype.slice.call(arguments,1);return function(){var b=d.slice();b.push.apply(b,arguments);return a.apply(this,b)}},ua=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var va=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,wa=function(a){if(null==a)return String(a);var b=va.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},xa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ha=function(a){if(!a||"object"!=wa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!xa(a,"constructor")&&!xa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var d in a);return void 0===
d||xa(a,d)},ya=function(a,b){var d=b||("array"==wa(a)?[]:{}),c;for(c in a)if(xa(a,c)){var e=a[c];"array"==wa(e)?("array"!=wa(d[c])&&(d[c]=[]),d[c]=ya(e,d[c])):ha(e)?(ha(d[c])||(d[c]={}),d[c]=ya(e,d[c])):d[c]=e}return d};var za=Math.random(),Ba=null,Ca=null,Da={};var Ea=function(){},K=function(a){return"function"==typeof a},Q=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Fa=function(a){return"number"==wa(a)&&!isNaN(a)},Ga=function(a,b){if(Array.prototype.indexOf){var d=a.indexOf(b);return"number"==typeof d?d:-1}for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},Ha=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},M=function(a){return Math.round(Number(a))||0},ja=function(a){return"false"==String(a).toLowerCase()?!1:
!!a},Ia=function(a){var b=[];if(Q(a))for(var d=0;d<a.length;d++)b.push(String(a[d]));return b},J=function(){return new Date},Ja=function(a,b){if(!Fa(a)||!Fa(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},Ka=function(){this.prefix="gtm.";this.values={}};Ka.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ka.prototype.get=function(a){return this.values[this.prefix+a]};Ka.prototype.contains=function(a){return void 0!==this.get(a)};
var La=function(a,b,d){try{return a["3"](a,b||Ea,d||Ea)}catch(c){}return!1},Ma=function(a,b){function d(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var c=Ha(b).split("&"),e=0;e<c.length;e++)if(c[e]){var f=c[e].indexOf("=");0>f?d(c[e],"1"):d(c[e].substring(0,f),c[e].substring(f+1))}},Na=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},Oa=function(a){for(var b=0;b<a.length;b++)a[b]()},fa=J().getTime(),ia=function(a,b,d){return a&&a.hasOwnProperty(b)?a[b]:d},Pa=function(a,
b,d){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=d},Qa=function(a){return null!==a&&void 0!==a&&void 0!==a.length},ga=function(a,b,d){if(!(b&&d&&Qa(a)&&Q(a)&&0!=a.length))return null;for(var c={},e=0;e<a.length;e++)a[e]&&a[e].hasOwnProperty(b)&&a[e].hasOwnProperty(d)&&(c[a[e][b]]=a[e][d]);return c},Ra=function(a,b){0==b?a.Ia=!0:a.complete=!0;var d=a.f;a.v&&(a.v.ea[d]=b);Da[d]&&(Da[d].state=b)};var u=window,O=document,Ta=navigator,I=function(a,b,d){var c=u[a];if(a&&/^[a-zA-Z_]\w*$/g.test(a)){var e="var "+a+";";if(P.execScript)P.execScript(e,"JavaScript");else if(P.eval)if(null==ua&&(P.eval("var _et_ = 1;"),"undefined"!=typeof P._et_?(delete P._et_,ua=!0):ua=!1),ua)P.eval(e);else{var f=P.document,g=f.createElement("SCRIPT");g.type="text/javascript";g.defer=!1;g.appendChild(f.createTextNode(e));f.body.appendChild(g);f.body.removeChild(g)}else throw Error("goog.globalEval not available");}u[a]=
void 0===c||d?b:c;return u[a]},N=function(a,b,d,c){return(c||"http:"!=u.location.protocol?a:b)+d},Ua=function(a){var b=O.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},ka=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},A=function(a,b,d){var c=O.createElement("script");c.type="text/javascript";c.async=!0;c.src=a;ka(c,b);d&&(c.onerror=d);Ua(c)},ba=function(a,b){var d=O.createElement("iframe");
d.height="0";d.width="0";d.style.display="none";d.style.visibility="hidden";Ua(d);ka(d,b);void 0!==a&&(d.src=a);return d},n=function(a,b,d){var c=new Image(1,1);c.onload=function(){c.onload=null;b&&b()};c.onerror=function(){c.onerror=null;d&&d()};c.src=a},R=function(a,b,d,c){a.addEventListener?a.addEventListener(b,d,!!c):a.attachEvent&&a.attachEvent("on"+b,d)},q=function(a){u.setTimeout(a,0)},ma=!1,oa=[],Va=function(a){if(!ma){var b=O.createEventObject,d="complete"==O.readyState,c="interactive"==
O.readyState;if(!a||"readystatechange"!=a.type||d||!b&&c){ma=!0;for(var e=0;e<oa.length;e++)oa[e]()}}},Wa=0,Xa=function(){if(!ma&&140>Wa){Wa++;try{O.documentElement.doScroll("left"),Va()}catch(a){u.setTimeout(Xa,50)}}},Za=function(a){var b=O.getElementById(a);if(b&&Ya(b,"id")!=a)for(var d=1;d<document.all[a].length;d++)if(Ya(document.all[a][d],"id")==a)return document.all[a][d];return b},Ya=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},$a=function(a){return a.target||
a.srcElement||{}},ra=function(a){var b=O.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},ab=function(a,b){for(var d={},c=0;c<b.length;c++)d[b[c]]=!0;for(var e=a,c=0;e&&!d[String(e.tagName).toLowerCase()]&&100>c;c++)e=e.parentElement;e&&!d[String(e.tagName).toLowerCase()]&&(e=null);return e},bb=!1,cb=[],gb=function(){if(!bb){bb=!0;for(var a=0;a<cb.length;a++)cb[a]()}},jb=function(a){a=a||u;var b=a.location.href,
d=b.indexOf("#");return 0>d?"":b.substring(d+1)},pa=function(a){window.console&&window.console.log&&window.console.log(a)};var kb=function(a,b,d,c,e){var f,g=(a.protocol.replace(":","")||u.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||u.location.hostname).split(":")[0].toLowerCase();if(d){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:u.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ga(c||[],l[l.length-
1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var m=f.split("&"),k=0;k<m.length;k++){var p=m[k].split("=");if(decodeURIComponent(p[0]).replace("+"," ")==e){f=decodeURIComponent(p.slice(1).join("=")).replace("+"," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},lb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},ca=function(a){var b=O.createElement("a");a&&
(b.href=a);return b};var da=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var d=kb(ca(a),"host");if(!d)return!1;for(var c=0;b&&c<b.length;c++){var e=b[c]&&b[c].toLowerCase();if(e){var f=d.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&d.indexOf(e,f)==f)return!0}}return!1};var ea=function(a,b){b&&void 0===u[a]&&(u[a]=b);return u[a]};var mb=new Ka,nb={},pb={set:function(a,b){ya(ob(a,b),nb)},get:function(a){return D(a,2)},reset:function(){mb=new Ka;nb={}}},D=function(a,b){if(2==b){for(var d=nb,c=a.split("."),e=0;e<c.length;e++){if(void 0===d[c[e]])return;d=d[c[e]]}return d}return mb.get(a)},ob=function(a,b){for(var d={},c=d,e=a.split("."),f=0;f<e.length-1;f++)c=c[e[f]]={};c[e[e.length-1]]=b;return d};var qb=new RegExp(/^(.*\.)?(google|youtube|blogger)(\.com?)?(\.[a-z]{2})?\.?$/),rb={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sb={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},tb=function(a,b){for(var d=[],c=0;c<a.length;c++)d.push(a[c]),d.push.apply(d,b[a[c]]||[]);return d},ub=function(){var a=D("gtm.whitelist");
var b=a&&tb(Ia(a),rb),d=D("gtm.blacklist")||D("tagTypeBlacklist")||[];qb.test(u.location&&u.location.hostname)&&(d=Ia(d),d.push("customScripts"));var c=d&&tb(Ia(d),sb),e={};return function(f){var g=f&&f["3"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)a:{if(0>Ga(b,g.a))if(g.b&&0<g.b.length)for(var l=0;l<g.b.length;l++){if(0>Ga(b,g.b[l])){h=
!1;break a}}else{h=!1;break a}h=!0}var m=!1;if(d){var k;if(!(k=0<=Ga(c,g.a)))a:{for(var p=g.b||[],r=new Ka,t=0;t<c.length;t++)r.set(c[t],!0);for(t=0;t<p.length;t++)if(r.get(p[t])){k=!0;break a}k=!1}m=k}return e[g.a]=!h||m}};var wb=function(a){var b=O;return vb?b.querySelectorAll(a):null},xb;a:{var yb=/MSIE +([\d\.]+)/.exec(Ta.userAgent);if(yb&&yb[1]){var zb=O.documentMode;zb||(zb="CSS1Compat"==O.compatMode?parseInt(yb[1],10):5);if(!zb||8>=zb){xb=!1;break a}}xb=!!O.querySelectorAll}var vb=xb;var _et=function(a){var b=D("gtm.element"),d;if(b){var c=b.innerText||b.textContent||"";c&&" "!=c&&(c=c.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));c&&(c=c.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));d=c}else d="";var e=d;return e?e:a[""]};_et.a="et";_et.b=["google"];var _eu=function(a){var b=String(D("gtm.elementUrl")||a[""]||""),d=ca(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Ca};_e.a="e";_e.b=["google"];var _v=function(a){var b=D(a["7"].replace(/\\\./g,"."),a[""]);return void 0!==b?b:a[""]};_v.a="v";_v.b=["google"];var _f=function(a){var b=String(D("gtm.referrer")||O.referrer);if(!b)return b;var d=ca(b);return b};_f.a="f";_f.b=["google"];var aa=function(a){var b=u.location,d=b.hash?b.href.replace(b.hash,""):b.href,c;if(c=a[""]?a[""]:D("gtm.url"))d=String(c),b=ca(d);var e,f,g;
a["2"]&&(d=kb(b,a["2"],e,f,g));return d},_u=aa;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a["0"])==String(a["1"])};_eq.a="eq";_eq.b=["google"];var _re=function(a){return(new RegExp(a["1"],a[""]?"i":void 0)).test(a["0"])};_re.a="re";_re.b=["google"];var Hb=Math.random(),Lb="1.000000">Hb;var Rb=Ea;var Sb=Ea,Tb=[],Ub=!1,Vb=function(a){return u["dataLayer"].push(a)},Wb=function(a){var b=!1;return function(){!b&&K(a)&&q(a);b=!0}},cc=function(){for(var a=!1;!Ub&&0<Tb.length;){Ub=!0;var b=Tb.shift();if(K(b))try{b.call(pb)}catch(d){}else if(Q(b))a:{var c=b;if("string"==wa(c[0])){for(var e=c[0].split("."),f=e.pop(),g=c.slice(1),h=nb,l=0;l<e.length;l++){if(void 0===h[e[l]])break a;h=h[e[l]]}try{h[f].apply(h,g)}catch(m){}}}else{var k=b,p=void 0;for(p in k)if(k.hasOwnProperty(p)){var r=p,t=k[p];
mb.set(r,t);ya(ob(r,t),nb)}var B=!1,v=k.event;if(v){Ca=v;var z=Wb(k.eventCallback),E=k.eventTimeout;E&&u.setTimeout(z,Number(E));B=Sb(v,z,k.eventReporter)}Ba||(Ba=k["gtm.start"])&&Rb();Ca=null;a=B||a}var L=b,V=nb;bc();Ub=!1}return!a};var dc,ec=/(Firefox\D28\D)/g.test(Ta.userAgent),fc={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},gc={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},mc=function(a,b){return function(d){d=d||u.event;var c=$a(d),e=!1;if(3!==d.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(c=ab(c,["a","area"]),e=!c||!c.href||hc(c.href)||2===d.which||null==d.which&&4==d.button||d.ctrlKey||d.shiftKey||d.altKey||!0===d.metaKey);var f="FORM_SUBMIT"==a?gc:fc;if(d.defaultPrevented||!1===d.returnValue||d.ia&&d.ia()){if(c){var g={simulateDefault:!1},
h=ic(f,["wnc","nwnc"]);h&&jc(a,c,g,f.wt,h)}}else{if(c){var g={},l=!0,m=ic(f,["wnc","nwnc","nwc","wc"]);(l=jc(a,c,g,f.wt,m))||(kc(g.eventReport,f)?b=!0:e=!0);e=e||l||"LINK_CLICK"==a&&ec;g.simulateDefault=!l&&b&&!e;g.simulateDefault&&(e=lc(c,g)||e,!e&&d.preventDefault&&d.preventDefault());d.returnValue=l||!b||e;return d.returnValue}return!0}}}},jc=function(a,b,d,c,e){var f=c||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||Ya(b,"id")||"","gtm.elementTarget":b.formTarget||
b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=nc(b,d);g.eventReporter=function(a){d.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=oc(b);g.eventTimeout=f;g.eventCallback=pc(b,d);g.eventReporter=function(a){d.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||
"";break;default:return!0}return Vb(g)},oc=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},qc=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},lc=function(a,b){var d=!1,c=/(iPad|iPhone|iPod)/g.test(Ta.userAgent),e=qc(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=u.frames&&u.frames[f]||u[f];break;case "_blank":c?(b.simulateDefault=
!1,d=!0):(b.targetWindowName="gtm_autoEvent_"+J().getTime(),b.targetWindow=u.open("",b.targetWindowName));break;default:c&&!u.frames[e]?(b.simulateDefault=!1,d=!0):(u.frames[e]||(b.targetWindowName=e),b.targetWindow=u.frames[e]||u.open("",e))}return d},nc=function(a,b,d){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(d=d||J().getTime(),500>J().getTime()-d&&u.setTimeout(nc(a,b,d),25)))}},pc=function(a,b,d){return function(){if(b.simulateDefault)if(b.targetWindow){var c;
b.targetWindowName&&(c=a.target,a.target=b.targetWindowName);O.gtmSubmitFormNow=!0;rc(a).call(a);b.targetWindowName&&(a.target=c)}else d=d||J().getTime(),500>J().getTime()-d&&u.setTimeout(pc(a,b,d),25)}},ic=function(a,b){for(var d=[],c=0;c<b.length;c++){var e=a[b[c]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&d.push(f)}return d.join(",")},sc=function(a,b,d,c,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>c)&&(a.wt=c);a[b?d?"wc":"wnc":d?"nwc":"nwnc"][f]=!0},kc=function(a,b){if(b.wnc["0"]||
b.wc["0"])return!0;for(var d=0;d<tc.length;d++)if(a.passingRules[d]){var c=tc[d],e=uc[d],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=c[1],h=0;h<g.length;h++)if(a.resolvedTags[g[h]])return!0}return!1},vc=function(a,b,d,c,e){var f,g,h=!1;switch(a){case "CLICK":if(O.gtmHasClickListenerTag)return;O.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=$a(a);b&&jc("CLICK",b,{},c)};h=!0;break;case "LINK_CLICK":b&&!dc&&(dc=lb(O.location));sc(fc,b||!1,d||!1,c,e);if(O.gtmHasLinkClickListenerTag)return;
O.gtmHasLinkClickListenerTag=!0;f="click";g=mc(a,b||!1);break;case "FORM_SUBMIT":sc(gc,b||!1,d||!1,c,e);if(O.gtmHasFormSubmitListenerTag)return;O.gtmHasFormSubmitListenerTag=!0;f="submit";g=mc(a,b||!1);break;default:return}R(O,f,g,h)},hc=function(a){if(!dc)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var d=ca(a);return dc==lb(d)},rc=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
O.gtmFormElementSubmitter||(O.gtmFormElementSubmitter=O.createElement("form"));return O.gtmFormElementSubmitter.submit.call?O.gtmFormElementSubmitter.submit:a.submit};var Ab=new String("undefined"),Dc=function(a){this.resolve=function(b){for(var d=[],c=0;c<a.length;c++)d.push(a[c]===Ab?b:a[c]);return d.join("")}};Dc.prototype.toString=function(){return this.resolve("undefined")};Dc.prototype.valueOf=Dc.prototype.toString;var Jc={},Kc=function(a,b){var d=fa++;Jc[d]=[a,b];return d},Oc=function(a){var b=a?0:1;return function(a){var c=Jc[a];if(c&&K(c[b]))c[b]();Jc[a]=void 0}};var Pc=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Qc=function(a,b){return a<b?-1:a>b?1:0};var Rc=function(a){var b=arguments.length;if(1==b&&"array"==sa(arguments[0]))return Rc.apply(null,arguments[0]);for(var d={},c=0;c<b;c++)d[arguments[c]]=!0;return d};Rc("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var S;a:{var Sc=P.navigator;if(Sc){var Tc=Sc.userAgent;if(Tc){S=Tc;break a}}S=""};var Uc=function(){return-1!=S.indexOf("Edge")};var Vc=-1!=S.indexOf("Opera")||-1!=S.indexOf("OPR"),T=-1!=S.indexOf("Edge")||-1!=S.indexOf("Trident")||-1!=S.indexOf("MSIE"),Wc=-1!=S.indexOf("Gecko")&&!(-1!=S.toLowerCase().indexOf("webkit")&&!Uc())&&!(-1!=S.indexOf("Trident")||-1!=S.indexOf("MSIE"))&&!Uc(),Xc=-1!=S.toLowerCase().indexOf("webkit")&&!Uc(),Yc=function(){var a=S;if(Wc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(T&&Uc())return/Edge\/([\d\.]+)/.exec(a);if(T)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Xc)return/WebKit\/(\S+)/.exec(a)},
Zc=function(){var a=P.document;return a?a.documentMode:void 0},$c=function(){if(Vc&&P.opera){var a=P.opera.version;return"function"==sa(a)?a():a}var b="",d=Yc();d&&(b=d?d[1]:"");if(T&&!Uc()){var c=Zc();if(c>parseFloat(b))return String(c)}return b}(),ad={},bd=function(a){var b;if(!(b=ad[a])){for(var d=0,c=Pc(String($c)).split("."),e=Pc(String(a)).split("."),f=Math.max(c.length,e.length),g=0;0==d&&g<f;g++){var h=c[g]||"",l=e[g]||"",m=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var p=
m.exec(h)||["","",""],r=k.exec(l)||["","",""];if(0==p[0].length&&0==r[0].length)break;d=Qc(0==p[1].length?0:parseInt(p[1],10),0==r[1].length?0:parseInt(r[1],10))||Qc(0==p[2].length,0==r[2].length)||Qc(p[2],r[2])}while(0==d)}b=ad[a]=0<=d}return b},cd=P.document,dd=Zc(),ed=!cd||!T||!dd&&Uc()?void 0:dd||("CSS1Compat"==cd.compatMode?parseInt($c,10):5);var fd;if(!(fd=!Wc&&!T)){var gd;if(gd=T)gd=T&&(Uc()||9<=ed);fd=gd}fd||Wc&&bd("1.9.1");T&&bd("9");var hd=function(a){hd[" "](a);return a};hd[" "]=function(){};var qa=function(a,b){var d="";T&&!id(a)&&(d='<script>document.domain="'+document.domain+'";\x3c/script>'+d);var c="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+d+"</head><body>"+b+"</body></html>";if(jd)a.srcdoc=c;else if(kd){var e=a.contentWindow.document;e.open("text/html","replace");e.write(c);e.close()}else ld(a,c)},jd=Xc&&"srcdoc"in document.createElement("iframe"),kd=Wc||Xc||T&&bd(11),ld=function(a,b){T&&bd(7)&&!bd(10)&&6>md()&&nd(b)&&(b=od(b));var d=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};T&&!id(a)?pd(a,d):d()},md=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},id=function(a){try{var b;var d=a.contentWindow;try{var c;if(c=!!d&&null!=d.location.href)b:{try{hd(d.foo);c=!0;break b}catch(e){}c=!1}b=c}catch(f){b=!1}return b}catch(g){return!1}},qd=0,pd=function(a,b){var d="goog_rendering_callback"+qd++;window[d]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+d+";window.parent."+d+" = null;continuation();})()\x3c/script>'"},nd=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},od=function(a){for(var b=unescape(encodeURIComponent(a)),d=Math.floor(b.length/2),c=[],e=0;e<d;++e)c[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(c[d]=b.charAt(b.length-1));return c.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var sd=function(a,b,d,c){return function(){try{if(0<b.length){var e=b.shift(),f=sd(a,b,d,c);if("SCRIPT"==String(e.nodeName).toUpperCase()&&"text/gtmscript"==e.type){var g=O.createElement("script");g.async=!1;g.type="text/javascript";g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";e.charset&&(g.charset=e.charset);var h=e.getAttribute("data-gtmsrc");h&&(g.src=h,ka(g,f));a.insertBefore(g,null);h||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(var l=[];e.firstChild;)l.push(e.removeChild(e.firstChild));
a.insertBefore(e,null);sd(e,l,f,c)()}else a.insertBefore(e,null),f()}else d()}catch(m){q(c)}}};var ud=function(a,b,d){if(O.body){var c=a["4"];c instanceof Dc&&(c=
c.resolve(Kc(b,d)),b=Ea);if(a[""])try{qa(ba(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+c),q(b)}catch(e){q(d)}else a[""]?td(c,b,d):sd(O.body,ra(c),b,d)()}else u.setTimeout(function(){ud(a,b,d)},200)},_html=ud;_html.a="html";_html.b=["customScripts"];var vd={},xd=function(a,b,d,c,e){if(!vb)return!1;var f=vd[a];f||(f={id:a,F:[],U:0,sa:null,xa:!1},vd[a]=f);var g={id:a+":"+f.F.length,Qa:d,La:c,D:b,ga:0,da:e||null,wa:0,T:!1};f.F.push(g);null===b?(g.T=!0,d(null)):wd(f);return!0},wd=function(a){for(var b=a.U;b<a.F.length;b++){var d=a.F[b],c=b==a.U;if(!d.T&&!yd(c,d))break;d.T&&c&&a.U++}a.F.length>a.U&&(a.sa||(a.sa=u.setTimeout(function(){a.sa=null;wd(a)},80)),ma||a.xa||(a.xa=!0,oa.push(function(){wd(a)})))},yd=function(a,b){var d=[];if(b.D){var c=zd(b.D,
b.id),e=null;b.da&&(e=zd(b.da,b.id+"-t"));for(var f=0;f<c.length;f++){var g=c[f],h;if(null!=e&&(h=e.length>f?e[f]:null,!h&&!ma&&(null===b.da.h||b.wa+d.length<b.da.h)))break;d.push({element:g,pb:h})}}if(!ma&&b.La&&(!a||null==b.D.h||b.D.h!=b.ga+d.length))return!1;for(var l=0;l<d.length;l++){var m=d[l].element,k=d[l].pb;b.ga++;Ad(m,b.id);k&&(b.wa++,Ad(k,b.id+"-t"));b.Qa(m,k)}if(b.D.h&&b.D.h==b.ga||ma)b.T=!0;return!0},Ad=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=
!0},zd=function(a,b){for(var d=wb(a.m)||[],c=[],e=0;e<d.length;e++){var f=d[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){var g;if(g=a.o){var h;a:{for(var l=f;l;){if(l.nextSibling){h=!0;break a}l=l.parentNode}h=!1}g=!h}if(g)break;c.push(f)}}return c};
var Ld=function(a){var b,d="";if(0<=O.cookie.indexOf("comScore"))for(var c=O.cookie.split(";"),e=0;e<c.length;e++){var f=c[e].indexOf("comScore");0<=f&&(d="&"+unescape(c[e].substring(f+8)))}b=d;var g=encodeURIComponent;return N("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+g(a)+"&ns__t="+J().valueOf()+"&ns_c="+(O.characterSet||O.defaultCharset||"")+"&c8="+g(O.title||"")+b+"&c7="+g(O.URL)+"&c9="+g(O.referrer))},Md=function(a){var b=encodeURIComponent;if(2048<a.length){var d=a.substring(0,
2040).lastIndexOf("&");a=a.substring(0,d)+"&ns_cut="+b(a.substring(d+1));a=a.substring(0,2048)}return a},_csm=function(a,b,d){function c(){var c=N("https://sb","http://b",".scorecardresearch.com/c2/"+e(a["5"])+"/cs.js");A(c,b,d)}var e=encodeURIComponent;n(Md(Ld(a["5"])));"complete"===O.readyState?c():R(u,"load",c)};_csm.a="csm";_csm.b=["nonGoogleScripts"];var Nd,Od;
var Yd=function(a){return function(){}},Zd=function(a){return function(){}};var pe=function(a){var b=u||P,d=b.onerror,c=!1;Xc&&!bd("535.3")&&(c=!c);b.onerror=function(b,f,g,h,l){d&&d(b,f,g,h,l);a({message:b,fileName:f,ib:g,Gb:h,error:l});return c}};var Qe=46,Re=[],Se=[],Xb=[],Te=new Ka,Ue=[],X=[],tc=[],uc=[],Ve=function(){this.u=[]};Ve.prototype.set=function(a,b){this.u.push([a,b]);return this};Ve.prototype.resolve=function(a,b){for(var d={},c=0;c<this.u.length;c++){var e=We(this.u[c][0],a,b),f=We(this.u[c][1],a,b);d[e]=f}return d};var Xe=function(a){this.index=a};
Xe.prototype.resolve=function(a,b){var d=Xb[this.index];if(d&&!b(d)){var c=d["6"];if(a){if(a.get(c))return;a.set(c,!0)}d=We(d,a,b);a&&a.set(c,!1);return La(d)}};
var _M=function(a){return new Xe(a)},Ye=function(a){this.resolve=function(b,d){for(var c=[],e=!1,f=0;f<a.length;f++){var g=We(Re[a[f]],b,d);g===Ab&&(e=!0);c.push(g)}return e?new Dc(c):c.join("")}},_T=function(a){return new Ye(arguments)},Ze=function(a){function b(b){for(var c=1;c<a.length;c++)if(a[c]==b)return!0;return!1}this.resolve=
function(d,c){var e=We(a[0],d,c);if(a[0]instanceof Xe&&b(8)&&b(16)){if(e===Ab)return e;var f="gtm"+fa++;Te.set(f,e);return'google_tag_manager["GTM-W9LTJC"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=W[a[g]](e);return e}},_E=function(a,b){return new Ze(arguments)},$e=function(a,b){this.i=a;this.ca=b},_R=function(a,b){return new $e(a,b)},$b=function(a,b){return We(a,new Ka,b)},We=function(a,b,d){var c=a;if(a instanceof Xe||a instanceof Ve||a instanceof Ye||a instanceof Ze)return a.resolve(b,
d);if(!(a instanceof $e))if(Q(a))for(var c=[],e=0;e<a.length;e++)c[e]=We(a[e],b,d);else if(a&&"object"==typeof a){var c={},f;for(f in a)a.hasOwnProperty(f)&&(c[f]=We(a[f],b,d))}return c},af=function(a,b){var d=b[a],c=d;if(d instanceof Xe||d instanceof Ze||d instanceof Ye||d instanceof $e)c=d;else if(Q(d))for(var c=[],e=0;e<d.length;e++)c[e]=af(d[e],b);else if("object"==typeof d){var c=new Ve,f;for(f in d)d.hasOwnProperty(f)&&c.set(b[f],af(d[f],b))}return c},cf=function(a,b){for(var d=b?b.split(","):
[],c=0;c<d.length;c++){var e=d[c]=d[c].split(":");0==a&&(e[1]=Re[e[1]]);if(1==a)for(var f=bf(e[0]),e=d[c]={},g=0;g<f.length;g++){var h=Se[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=bf(e[g]);3==a&&(d[c]=Re[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var l=0;l<e[g].length;l++)e[g][l]=Re[e[g][l]]}else e[g]=[];5==a&&(d[c]=e[0])}return d},bf=function(a){var b=[];if(!a)return b;for(var d=0,c=0;c<a.length&&d<Qe;d+=6,c++){var e=a&&a.charCodeAt(c)||65;if(65!=e){var f=0,f=65<e&&90>=
e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(d);2&f&&b.push(d+1);4&f&&b.push(d+2);8&f&&b.push(d+3);16&f&&b.push(d+4);32&f&&b.push(d+5)}}return b},df=function(a,b,d){a.push.apply(a,cf(b,d))};var ef=function(a){var b=this;this.f=a;this.complete=this.Ia=!1;this.ba=[];this.S=[];this.I=function(){b.complete||Oa(b.ba);Ra(b,1)};this.H=function(){b.complete||Oa(b.S);Ra(b,2)};this.j=Ea},ff=function(a,b){a.ba.push(b)},gf=function(a,b){a.S.push(b)},hf=function(a){this.w=[];this.ra=[];this.Ba={};this.ma=[];this.G=0;this.Ga={};this.Ja={};this.ea={};this.Ca=a};hf.prototype.addListener=function(a){this.ma.push(a)};
var jf=function(a,b,d,c,e,f){if(!d.complete){a.w[b]=d;void 0==c&&(c=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);Q(c)||(c=["or",c]);Q(e)||(e=[e]);Q(f)||(f=[f]);a.Ba[b]=c;a.Ga[b]=0<e.length;a.Ja[b]=0<f.length;a.G++;var g=function(){0<a.G&&a.G--;0<a.G||Oa(a.ma)};ff(d,g);gf(d,g)}},kf=function(a,b,d){a.w[b]&&(ff(a.w[b],function(){d(b,!0)}),gf(a.w[b],function(){d(b,!1)}))},lf=function(a,b){var d=!1;return function(c,e){var f;a:{for(var g=0;g<a.length;g++)if(a[g]instanceof $e&&a[g].i===c||a[g]===c){f=g;break a}f=
-1}d||0>f||("or"==a[0]?e?(d=!0,b()):(a.splice(f,1),1==a.length&&(d=!0)):e?(a.splice(f,1),1==a.length&&(d=!0,b())):d=!0)}},pf=function(a,b){var d=[],c=!1,e=function(b){var f,g,h,k;if(a.Ca.c(X[b])){}else{k=$b(X[b],a.Ca.c);}(h=k)&&(g=mf(h,b,a));if(f=g){var l=nf(b,!0);0<l.length&&e(l[0].i);d.push(f);
var m=nf(b,!1);0<m.length&&e(m[0].i)}else c=!0};e(b);if(!c){for(var f=0;f<d.length;f++){var g=d[f],h=nf(g.f,!0);if(0<h.length){var l=d[f-1],m=of(g);ff(l,m);0==h[0].ca&&gf(l,m)}var k=nf(g.f,!1);0<k.length&&(m=of(d[f+1]),ff(g,m),0==k[0].ca&&gf(g,m))}a.ra.push(d)}},nf=function(a,b){var d=b?"":"",c=X[a],e=void 0===c[d]?[]:c[d];return Q(e)?e:[e]},of=function(a){return function(){a.j()}},rf=function(a){for(var b={},d=0;d<a.length;d++){var c=a[d],e=[],f=function(a){var b=
nf(a,!0);0<b.length&&f(b[0].i);e.push(a);var c=nf(a,!1);0<c.length&&f(c[0].i)};f(c.f);b[c.f]=e}qf(a,b);return b},qf=function(a,b){for(var d=0;d<a.length;d++){var c=a[d].f,e;for(e in b)if(b.hasOwnProperty(e)&&e!=c&&-1<Ga(b[e],c)){delete b[c];break}}};var sf=function(a,b){return function(){a["9"]=b.I;a["10"]=b.H;var d=b.f,c=b.v&&b.v.ea[d],e=Da[d]&&Da[d].state,f=c?void 0!==c:b.Ia,g=Da[d]&&Da[d].firingOption,h=g&&2==g,l=g&&1==g;(f||e&&0!=e)&&(f||h)&&(h||l)?h&&Da[d]&&1==Da[d].state||l&&b.v&&1==b.v.ea[d]?b.I():b.H():(Ra(b,0),La(a,b.I,b.H))}},mf=function(a,b,d){var c=new ef(b);c.v=d;ff(c,Yd(a));gf(c,Zd(a));c.j=sf(a,c);return c};var xf,yf;var bc=function(){};var Lf=function(){var a=[];return function(b,d){if(void 0===a[b]){var c=Ue[b]&&$b(Ue[b],d),e=c;if(c)if(c[""]&&Q(c["1"]))for(var f=c["1"],e=!1,g=0;!e&&g<f.length;g++)c["1"]=f[g],e=La(c);else e=La(c);a[b]=[e,c]}return a[b]}},Mf=function(a,b){for(var d=b[0],c=0;c<d.length;c++)if(!a.C(d[c],a.c)[0])return!1;for(var e=b[2],c=0;c<e.length;c++)if(a.C(e[c],a.c)[0])return!1;return!0},Nf=!1,Sb=function(a,b,d){switch(a){case "gtm.js":if(Nf)return!1;Nf=!0;break;
case "gtm.sync":if(D("gtm.snippet")!=za)return!1}D("tagTypeBlacklist");for(var c={name:a,O:b||Ea,N:bf(),Z:bf(),C:Lf(),c:ub()},e=[],f=0;f<tc.length;f++)if(Mf(c,tc[f])){e[f]=!0;for(var g=c,h=tc[f],l=h[1],m=0;m<l.length;m++)g.N[l[m]]=!0;for(var k=h[3],m=0;m<k.length;m++)g.Z[k[m]]=!0}else e[f]=!1;var p=[];for(var r=0;r<Qe;r++)if(c.N[r]&&!c.Z[r])if(c.c(X[r])){}else{p[r]=$b(X[r],c.c);}c.aa=p;for(var t=new hf(c),B=0;B<Qe;B++)if(c.N[B]&&!c.Z[B]&&!c.c(X[B])){var v=c.aa[B],z=mf(v,B,t);jf(t,B,z,v[""],v[""],v[""]);if(v[""])break}t.addListener(c.O);
for(var E=[],y=0;y<t.w.length;y++){var F=t.w[y];if(F){var w=t.Ba[y],C=t.Ga[y],x=t.Ja[y];if(0!=w.length||C||x){if(0<w.length)for(var G=lf(w,F.j),L=0;L<w.length;L++)w[L]instanceof $e&&w[L].i!=y&&kf(t,w[L].i,G);(C||x)&&pf(t,y)}else E.push(y)}}for(y=0;y<E.length;y++)t.w[E[y]].j();for(y=0;y<t.ra.length;y++){for(var V=t.ra[y],U=V,hb=[],Mb=0;Mb<U.length;Mb++){var Qb=U[Mb],Mc=Qb.f,Nc=Da[Mc],Nb=Nc.firingOption;0!=Nb&&(1==Nb&&void 0!==Qb.v.ea[Mc]||2==Nb&&void 0!==Nc.state)&&hb.push(Qb)}var Ob=rf(hb),ib=void 0;
for(ib in Ob)if(Ob.hasOwnProperty(ib)){for(var Pb=void 0,Lc=void 0,Cb=Ob[ib],Sf=Cb[0],te=Cb[Cb.length-1],ue,na=0;na<U.length;na++){var Ib=U[na];!Pb&&Ib.f==Sf&&0<na&&(Pb=U[na-1]);Ib.f==te&&na<U.length-1&&(Lc=U[na+1]);if(-1<Ga(Cb,Ib.f))if(ue=U.splice(na,1)[0],Ib.f==te)break;else na--}if(ue){var ve=Number(ib),Y=Pb,Ec=Lc;if(Y){var Tf=Y.ba[0],Uf=Y.S[0],we=Y;we.ba=[];we.S=[];ff(Y,Tf);gf(Y,Uf)}if(Y&&Ec){var Fc=of(Ec);ff(Y,Fc);var Gc=nf(Y.f,!1);0<Gc.length&&Gc[0].i!=ve&&0==Gc[0].ca&&gf(Y,Fc);var Hc=nf(Ec.f,
!0);0<Hc.length&&Hc[0].i!=ve&&0==Hc[0].ca&&gf(Y,Fc)}}}0<V.length&&V[0].j()}0<t.G||Oa(t.ma);d&&K(d)&&d({passingRules:e,resolvedTags:c.aa});return 0<c.aa.length};var Of={macro:function(a){if(Te.contains(a))return Te.get(a)}};Of.dataLayer=pb;Of.onHtmlSuccess=Oc(!0);Of.onHtmlFailure=Oc(!1);Of.Ua=function(){var a=u.google_tag_manager;a||(a=u.google_tag_manager={});a["GTM-W9LTJC"]||(a["GTM-W9LTJC"]=Of)};Re.push.apply(Re,function(){for(var a=[_re,_u,'url',_M(0),'.*',_eq,_e,'_event',_M(1),'gtm.js',_csm,'7770950',1,_html,'\n\x3cscript type\x3d\x22text/gtmscript\x22\x3evar _qevents\x3d_qevents||[];(function(){var a\x3ddocument.createElement(\x22script\x22);a.src\x3d(\x22https:\x22\x3d\x3ddocument.location.protocol?\x22https://secure\x22:\x22http://edge\x22)+\x22.quantserve.com/quant.js\x22;a.async\x3d!0;a.type\x3d\x22text/javascript\x22;var b\x3ddocument.getElementsByTagName(\x22script\x22)[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\x22p-f8oruOqDFlMeI\x22});\x3c/script\x3e\n\n\x3cnoscript\x3e\n\x3cdiv style\x3d\x22display:none;\x22\x3e\n\x3cimg src\x3d\x22//pixel.quantserve.com/pixel/p-f8oruOqDFlMeI.gif\x22 border\x3d\x220\x22 height\x3d\x221\x22 width\x3d\x221\x22 alt\x3d\x22Quantcast\x22\x3e\n\x3c/div\x3e\n\x3c/noscript\x3e\n',2,'url path','path',_f,'referrer','url hostname','host',_v,'element classes','gtm.elementClasses','element id','gtm.elementId','event','element','gtm.element',_et,'element text','element target','gtm.elementTarget','history new url fragment','gtm.newUrlFragment','element url','gtm.elementUrl','history new state','gtm.newHistoryState','history old url fragment','gtm.oldUrlFragment','history change source','gtm.historyChangeSource','history old state','gtm.oldHistoryState'],b=[],d=0;d<a.length;d++)b[d]=af(d,a);return b}());df(Se,0,"3:0,3:1,6:2,0:3,1:4,3:5,3:6,6:7,0:8,1:9,3:10,5:11,8:12,3:13,4:14,8:15,6:16,2:17,3:18,6:19,6:20,2:21,3:22,6:23,7:24,6:25,7:26,6:27,6:28,7:29,3:30,6:31,6:32,7:33,6:34,7:35,6:36,7:37,6:38,7:39,6:40,7:41,6:42,7:43,6:44,7:45");df(Xb,1,"G,AD,CAw,AAAD,CAAM,AAAwB,AAAQG,ABAAI,AAAQw,AAAAAD,AAAQAM,AAAQAw,AAAQAAD,AAAQAAM,AAAQAAw,AAAQAAAD,AAAQAAAM");
df(Ue,1,"Z,gM");df(X,1,"AwB,AAO");df(tc,2,"D:D::");df(uc,4,":");for(var Pf=0;Pf<X.length;Pf++){var Qf=X[Pf];Da[Pf]={firingOption:Qf[""]?1:Qf[""]?2:0,state:void 0}}
Of.Ua();(function(a){})("async");
(function(){var a=I("dataLayer",[],!1),b=I("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};oa.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});cb.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var d=a.push;a.push=function(){var b=[].slice.call(arguments,0);d.apply(a,b);for(Tb.push.apply(Tb,b);300<this.length;)this.shift();return cc()};Tb.push.apply(Tb,a.slice(0));q(cc)})();
if("interactive"==O.readyState&&!O.createEventObject||"complete"==O.readyState)Va();else{R(O,"DOMContentLoaded",Va);R(O,"readystatechange",Va);if(O.createEventObject&&O.documentElement.doScroll){var Rf=!0;try{Rf=!u.frameElement}catch(Wf){}Rf&&Xa()}R(u,"load",Va)}"complete"===O.readyState?gb():R(u,"load",gb);
(function(a){})("async");var _vs="res_ts:1402004399983000,srv_cl:94705561,ds:live,cv:4";
})()
