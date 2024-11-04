let arepas = document.getElementById("arepas"); 
let elementStyle = window.getComputedStyle(arepas);
let elementWidth = elementStyle.getPropertyValue('color');
console.log(elementWidth);

