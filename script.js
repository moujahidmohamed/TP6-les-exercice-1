
const div = document.createElement('div');
const p = document.createElement('p');
p.textContent = 'Ceci est un paragraphe';
div.appendChild(p);
document.body.appendChild(div);
p.textContent = 'Le texte a été affeche';
console.log('Texte avant clic:', p.textContent);
p.style.backgroundColor = 'lightblue';
p.style.textAlign = 'center';
p.style.padding = '20px';
div.addEventListener('click', function() {
    p.textContent = 'le texte a été modifié';
    
    console.log('Texte après clic:', p.textContent);
});