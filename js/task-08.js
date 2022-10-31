const form = document.querySelector('.login-form');

form.addEventListener('submit', onSearch);

function onSearch(param) {
    param.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені');
    }
    const dataInput = {
        email: email.value,
        password: password.value,
    };
    console.log(dataInput);
    param.currentTarget.reset();
}

