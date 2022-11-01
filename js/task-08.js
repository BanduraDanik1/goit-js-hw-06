const form = document.querySelector('.login-form');
form.addEventListener('submit', onSearch);

function onSearch(param) {
    param.preventDefault();
    const { email, password } = param.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені');
    }

    const dataInput = {
        email: email.value,
        password: password.value,
    };

    console.log(dataInput);
    console.log(param.currentTarget.elements);

    param.currentTarget.reset();
};

