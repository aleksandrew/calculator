var entry=function(e){function t(t){for(var n,r,o=t[0],u=t[1],c=t[2],s=0,f=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&f.push(l[r][0]),l[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(d&&d(t);f.length;)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==l[u]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},l={1:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://zanusilker.github.io/gulpimize/build/js/";var o=window.webpackJsonp_name_=window.webpackJsonp_name_||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=u;return i.push([2,0]),a()}([,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=function(e,t,a,n,l){historyField.insertAdjacentHTML("afterbegin",'<p id="'.concat(e,'" class="history"> \n\t\t\t<span class="operation btn--hover">\n\t\t\t\t<span class="first-argument">').concat(t,'</span> \n\t\t\t\t<spas class="arithmetic-symbol">').concat(a,'</spas>\n\t\t\t\t<span class="last-argument">').concat(n,'</span>\n\t\t\t</span>\n\t\t\t<span>=</span>\n\t\t\t<span class="result btn--hover">').concat(l,"</span>\n\t\t</p>"))},r=function(e,t,a){var n=e.toString().includes(".")?e.toString().split(".").pop().length:0,l=t.toString().includes(".")?t.toString().split(".").pop().length:0,i=a.toString().split(""),r=a.toString().split("").indexOf(".");return n>5&&(n=5),l>5&&(l=5),n>=l?i.splice(r+1+n):i.splice(r+1+l),i.join("")},o=function(e,t,a){var n;switch(a){case"+":return n=+e+ +t,-1===field.value.indexOf(".")&&-1===field.value.indexOf("π")&&-1===field.value.indexOf("e")||(n=r(e,t,n)),n;case"-":return n=+e-+t,-1===field.value.indexOf(".")&&-1===field.value.indexOf("π")&&-1===field.value.indexOf("e")||(n=r(e,t,n)),n;case"*":return n=+e*+t,-1===field.value.indexOf(".")&&-1===field.value.indexOf("π")&&-1===field.value.indexOf("e")||(n=r(e,t,n)),n;case"/":return n=+e/+t,-1===field.value.indexOf(".")&&-1===field.value.indexOf("π")&&-1===field.value.indexOf("e")||(n=r(e,t,n)),n;case"^":return n=Math.pow(+e,+t),-1===field.value.indexOf(".")&&-1===field.value.indexOf("π")&&-1===field.value.indexOf("e")||(n=r(e,t,n)),n;case"√":return n=Math.pow(+t,1/+e),-1===field.value.indexOf(".")&&-1===field.value.indexOf("π")&&-1===field.value.indexOf("e")||(n=r(e,t,n)),n}},u=document.querySelector("#historyField"),c=function(){for(var e=[],t=0;t<u.children.length;t++){var a={id:u.children[t].id,firstArgument:u.children[t].querySelector(".first-argument").textContent,arithmeticSymbol:u.children[t].querySelector(".arithmetic-symbol").textContent,lastArgument:u.children[t].querySelector(".last-argument").textContent,result:u.children[t].querySelector(".result").textContent};e.push(a)}localStorage.clear(),localStorage.setItem("data",JSON.stringify({data:e}))},d=document.querySelector("#field"),s=document.querySelector("#historyField"),f=document.querySelector("#clearBtn"),v="",p="",h="",m=!1,g=!1,y=!1,b=!1,x=!1,S=function(e){if(void 0!==e)switch(e){case"+":m&&""!==p&&(h=o(v,p,m),d.value=h,i(r,v,m,p,h),c(),v="",p="",m="",g=!0,b=!1,y=!1,x=!1),m||(g?(v=h,p="",g=!1,m="+",d.value+=" + "):(m="+",d.value+=" + "));break;case"-":m&&""!==p&&(h=o(v,p,m),d.value=h,i(r,v,m,p,h),c(),v="",p="",m="",g=!0,b=!1,y=!1,x=!1),""!==v||g||(v+="-",d.value+="-"),""===p&&m&&(p+="-",d.value+="-"),m||(g?(v=h,p="",g=!1,m="-",d.value+=" - "):"-"!==d.value&&(m="-",d.value+=" - "));break;case"*":m&&""!==p&&(h=o(v,p,m),d.value=h,i(r,v,m,p,h),c(),v="",p="",m="",g=!0,b=!1,y=!1,x=!1),m||(g?(v=h,p="",g=!1,m="*",d.value+=" * "):(m="*",d.value+=" * "));break;case"/":m&&""!==p&&(h=o(v,p,m),d.value=h,i(r,v,m,p,h),c(),v="",p="",m="",g=!0,b=!1,y=!1,x=!1),m||(g?(v=h,p="",g=!1,m="/",d.value+=" / "):(m="/",d.value+=" / "));break;case"^":m||(g?(v=h,p="",g=!1,m="^",d.value+=" ^ "):(m="^",d.value+=" ^ "));break;case"√":m||(""!==v||g?""!==v?(m="√",d.value+=" √ "):g&&(v="2",m="√",d.value="√ ",g=!1):(v="2",m="√",d.value+="√ "));break;case".":g&&(v=h+".",p="",d.value+=".",g=!1),-1!==d.value.indexOf(m)&&m?-1===p.indexOf(".")&&(""===p?p=".":p+=".",d.value+="."):-1===v.indexOf(".")&&(""===v?v=".":v+=".",d.value+=".");break;case"C":d.value="",v="",p="",h="",m=!1,g=!1,b=!1,y=!1,x=!1;break;case"π":g&&(d.value=e,v=Math.PI,p="",y=!0,m=!1,g=!1,b=!1,x=!1),g||y||(-1!==d.value.indexOf(m)&&m?""===p&&(p=Math.PI,d.value+=e,y=!0):""===v&&(v=Math.PI,d.value+=e,y=!0));break;case"e":g&&(d.value=e,v=Math.E,p="",b=!0,m=!1,g=!1,y=!1,x=!1),g||b||(-1!==d.value.indexOf(m)&&m?""===p&&(p=Math.E,d.value+=e,b=!0):""===v&&(v=Math.E,d.value+=e,b=!0));break;case"%":g||x||(-1!==d.value.indexOf(m)&&m?""!==p&&(p=+p/100,d.value+=e,x=!0):""!==v&&(v=+v/100,d.value+=e,x=!0));break;case"DEL":var t=d.value.split("");if(t.includes(m,-2))if("√"===m&&"2"===v)v="",d.value="",m=!1;else{t.splice(-3);m=!1,d.value=t.join("")}else if(t.includes("%",-1))if(m){t.pop();p=100*+p,d.value=t.join(""),x=!1}else{t.pop();v=100*+v,d.value=t.join(""),x=!1}else if(""===p)if(v===Math.PI||v===Math.E)v="",d.value="",b=!1,y=!1;else{var a=v.split("");t.pop(),a.pop();d.value=t.join(""),v=a.join("")}else if(p===Math.PI||p===Math.E){var n=(p="").split("");t.pop();d.value=t.join(""),p=n.join(""),b=!1,y=!1}else{var l=p.split("");t.pop(),l.pop();d.value=t.join(""),p=l.join("")}break;case"=":var r=parseInt(1e4*Math.random());(""!==v&&""!==p||v===Math.PI||v===Math.E)&&(x&&""===p?(h=v,d.value=h,i(r,v,m,p,h),c(),v="",p="",m="",g=!0,b=!1,y=!1,x=!1):y&&""===p?(h=v,d.value=decimalPlace(v,p,h),h=d.value,i(r,v,m="",p="",h),c(),v="",g=!0,b=!1,y=!1,x=!1):b&&""===p?(h=v,d.value=decimalPlace(v,p,h),h=d.value,i(r,v,m="",p="",h),c(),v="",g=!0,b=!1,y=!1,x=!1):(h=o(v,p,m),d.value=h,i(r,v,m,p,h),c(),v="",p="",m="",g=!0,b=!1,y=!1,x=!1)),s.children.length>0&&f.setAttribute("style","display: flex; font-size: 1.1rem;\twidth: 50px;");break;default:g&&(d.value="",v="",p="",m=!1,g=!1,b=!1,y=!1,x=!1),m||v!==Math.PI||""!==p||(m="*",d.value+=" * "),m||v!==Math.E||""!==p||(m="*",d.value+=" * "),m||x?v===Math.PI||v===Math.E?(""===p?p=e:p+=e,d.value+=e):(m||!x&&p!==Math.PI&&p!==Math.E)&&(""===p?p=e:p+=e,d.value+=e):(""===v?v=e:v+=e,d.value+=e)}},O=function(e){var t=e.target.textContent;S(t)},M=function(e){var t;e.preventDefault(),"Numpad0"===e.code||"Digit0"===e.code?t="0":"Numpad1"===e.code||"Digit1"===e.code?t="1":"Numpad2"===e.code||"Digit2"===e.code?t="2":"Numpad3"===e.code||"Digit3"===e.code?t="3":"Numpad4"===e.code||"Digit4"===e.code?t="4":"Numpad5"===e.code||"Digit5"===e.code?t=e.key:"Numpad6"===e.code||"Digit6"===e.code?t=e.key:"Numpad7"===e.code||"Digit7"===e.code?t="7":"Numpad8"===e.code||"Digit8"===e.code?t="8":"Numpad9"===e.code||"Digit9"===e.code?t="9":"Backspace"===e.code?t="DEL":"Enter"===e.code||"NumpadEnter"===e.code?t="=":"NumpadAdd"===e.code||"Equal"===e.code&&"ShiftLeft"===e.code?t="+":"NumpadSubtract"===e.code||"Minus"===e.code?t="-":"NumpadDivide"===e.code||"Slash"===e.code?t="/":"NumpadMultiply"===e.code||"Digit8"===e.code&&"ShiftLeft"===e.code?t="*":"Digit6"===e.code&&"ShiftLeft"===e.code?t="^":"KeyP"===e.code?t="π":"Digit5"===e.code&&"ShiftLeft"===e.code?t="%":"NumpadDecimal"===e.code||"Period"===e.code||"Comma"===e.code?t=".":"KeyE"===e.code?t="e":"KeyR"===e.code?t="√":"Delete"===e.code&&(t="C"),S(t)},k="",E="",j=!1,P=function(e){var t=e.target;(t.classList.contains("operation")||t.parentElement.classList.contains("operation"))&&(t.parentElement.classList.contains("operation")&&(t=t.parentElement),k=t.querySelector(".first-argument").textContent,j=t.querySelector(".arithmetic-symbol").textContent,E=t.querySelector(".last-argument").textContent,field.value="".concat(k," ").concat(j," ").concat(E)),t.classList.contains("result")&&(k=t.textContent,field.value="".concat(k))},D=function(){var e=historyField.children,t=e.length;clearBtn.removeAttribute("style"),localStorage.clear();for(var a=0;a<t;a++)historyField.removeChild(e[0])};t.default=l()(function(){var e=document.querySelector(".calculator__controller"),t=document.querySelector("#historyField"),a=document.querySelector("#clearBtn");void 0!==localStorage.data&&function(){for(var e=JSON.parse(localStorage.getItem("data")),t=e.data.length-1;0<=t;t--){var a=e.data[t].id,n=e.data[t].firstArgument,l=e.data[t].arithmeticSymbol,r=e.data[t].lastArgument,o=e.data[t].result;i(a,n,l,r,o)}}(),t.children.length>0&&a.setAttribute("style","display: flex; font-size: 1.1rem;\twidth: 50px;"),e.addEventListener("click",O),window.addEventListener("keydown",M),t.addEventListener("click",P),a.addEventListener("click",D)})},function(e,t,a){e.exports=a(1)}]);