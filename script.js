const trueButton = document.querySelector('.true-button');
const falseButton = document.querySelector('.false-button');
const mainContainer = document.querySelector('.global-container');
const text = document.querySelector('.logo-inactive');
const trueText = document.querySelector('.text-inactive');

trueButton.addEventListener('click', () => {
    mainContainer.classList.replace('global-container', 'inactive');
    trueText.classList.replace('text-inactive', 'text-active')
});

falseButton.addEventListener('click', () => {
    mainContainer.classList.replace('global-container', 'inactive');
    text.classList.replace('logo-inactive', 'logo-active')
});