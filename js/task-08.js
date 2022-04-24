const form = document.querySelector('.login-form');

function login(event) {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    if (email === "" || password === "") {
        return alert('Warning! Fill all fields!');
    }
    const formData = {email, password};
    console.log(formData);
    event.currentTarget.reset();
}

form.addEventListener('submit', login);
