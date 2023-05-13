const trueButton = document.querySelector('.true-button');
const falseButton = document.querySelector('.false-button');
const mainContainer = document.querySelector('.global-container');
const text = document.querySelector('.logo-inactive');

trueButton.addEventListener('click', () => {
    mainContainer.classList.replace('global-container', 'inactive');
});

falseButton.addEventListener('click', () => {
    mainContainer.classList.replace('global-container', 'inactive');
    text.classList.replace('logo-inactive', 'logo-active')
});