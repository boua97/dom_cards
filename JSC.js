// incha2 l3anassier

let contt = document.createElement('div');
let head =document.createElement('h1');
let img = document.createElement('img');

// idafat lmo7atawa
let contt2 =document.createTextNode('hllo yassine boua ');
head.appendChild(contt2);
img.src= ' img/shap.png';
img.style.width= ' 250px'


//idafat l3anasier
contt.appendChild(head);
contt.appendChild(img)
document.body.appendChild(contt);

console.log(head);
contt.style.background='#666';
contt.style.color ='#fff';
contt.style.padding ='10px';
contt.style.textAlign ='center';