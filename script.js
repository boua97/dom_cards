// incha2 l3anassier

let name =['yassine ','achraf', 'ali','zaki'];
let ages =['25 ANS ','20 ANS', '30 ANS','35 ANS'];
let contt = document.createElement('div');
document.body.appendChild(contt);
contt.style.textAlign ='center';

function element(name, ages ) {
//element 
let card =document.createElement('div');
let title=document.createElement('h2');
let age =document.createElement('p');
let img = document.createElement('img');

//style 
card.style.width ='200px';
card.style.background='#444';
card.style.padding ='10px';
card.style.margin ='2px';
card.style.display ='inline-block';

img.style.width= '100%'

//content 
let head =document.createTextNode(name);
let agecont =document.createTextNode(ages );
img.src= ' img/shap.png';
title.appendChild(head);
age.appendChild(agecont);

card.appendChild(title);
card.appendChild(age);
card.appendChild(img);
contt.appendChild(card);

}
for (let i=0; i<30 ;i++)
{
    element(name[i], ages[i] )
}



// let head =document.createElement('h1');
// let img = document.createElement('img');

// // idafat lmo7atawa
// let contt2 =document.createTextNode('hllo yassine boua ');
// head.appendChild(contt2);
// img.src= ' img/shap.png';
// img.style.width= ' 250px'


// //idafat l3anasier
// contt.appendChild(head);
// contt.appendChild(img)


// console.log(head);
// contt.style.background='#666';
// contt.style.color ='#fff';
// contt.style.padding ='10px';
