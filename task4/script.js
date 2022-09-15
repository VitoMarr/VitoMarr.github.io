const linkText1 = document.querySelector('#linkText');

linkText1.addEventListener('click', function() {
const text = prompt('Набери текст')
linkText1.textContent = text;
event.preventDefault();
})