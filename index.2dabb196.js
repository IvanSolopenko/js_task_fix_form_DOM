document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.setAttribute("for",e.id);var a=e.name.charAt(0).toUpperCase()+e.name.slice(1);t.textContent=a,t.classList.add("field-label"),e.placeholder=a,e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.2dabb196.js.map
