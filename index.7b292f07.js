var e=document.querySelector("ul"),r=Array.from(e.querySelectorAll("li")),a=new RegExp(/\D/g),n=r.map(function(e){return{element:e,salary:Number(e.dataset.salary.replace(a,""))}}).sort(function(e,r){return r.salary-e.salary});e.innerHTML="",n.forEach(function(r){var a=r.element;return e.appendChild(a)});
//# sourceMappingURL=index.7b292f07.js.map
