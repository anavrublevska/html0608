let links = document.querySelectorAll('a');
links[0].textContent = 'Mozilla Developer Network';
links[0].href = 'https://developer.mozilla.org';
links[1].textContent = 'Goolge';
links[1].href = 'https://developer.mozilla.org';
links[2].textContent = 'Mozilla lalala';
links[2].href = 'https://developer.mozilla.org';
// const para = document.createElement('p');
// para.textContent = 'We hope you enjoyed the ride.';
// const section = document.querySelector('section');
// section.appendChild(para);

const section = document.querySelector('section');

for (let i = 0; i < 100; i++) {
    const para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
     para.classList.add('new-para');
    section.appendChild(para);
}

// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach( p => {
//     let text = document.createTextNode(' — the premier source for web development knowledge.');
//     const linkPara = document.querySelector('p');
// linkPara.appendChild(text);    
// })

// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach( p => {
//     const text = document.createTextNode(' — the premier source for web development knowledge.');
//     p.appendChild(text);    
// });


const paragraphs = document.querySelectorAll('p');
const text = document.createTextNode(' — the premier source for web development knowledge.');
paragraphs.forEach( (p, idx) => {
    setTimeout( _ => p.appendChild(text), 1000 * idx);    
});

const dinoImg = document.querySelector('img');
const lastPara = document.querySelector ('p:last-of-type') ;
lastPara.appendChild(dinoImg);

dinoImg.parentNode.removeChild(dinoImg);

section.innerHTML += '<h1>Hello World</h1>';

const button = document.querySelector('button');
button.addEventListener('click', buttonClick);
button.onclick = buttonClick;
function buttonClick() {
    // const firstPara = document.querySelector('p');
    // firstPara.parentNode.removeChild(firstPara);
    $('h1').toggle(500);
}

const firstLink = document.querySelector('a');
firstLink.addEventListener('click', e => {
    e.preventDefault();
    alert('Please stay here');
});