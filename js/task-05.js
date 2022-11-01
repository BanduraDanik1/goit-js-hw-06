
const inputEl =  document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onSearchInput);

function onSearchInput (element) {
    outputEl.textContent = element.currentTarget.value;
    if (!element.currentTarget.value) {
        outputEl.textContent = 'Anonymous';
    }
}