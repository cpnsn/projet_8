const btn = document.getElementById('myButton');

btn.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    document.body.appendChild(paragraph)
})