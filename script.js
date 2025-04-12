const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const weigth = document.getElementById('weigth');
const submitBtn = document.getElementById('submit');
const log_sign = document.getElementById('log_sign');
const username = document.getElementById('username');
const useremail = document.getElementById('useremail');
const userpren = document.getElementById('userpren');
log_sign.addEventListener('click', () => {
    if (submitBtn.name === 'signup') {
        submitBtn.name = 'login';
        submitBtn.innerHTML = 'Login';
        name.style.display = 'none';
        email.style.display = 'block';
        age.style.display = 'none';
        password.style.display = 'block';
        confirmPassword.style.display = 'none';
        weigth.style.display = 'none';
        log_sign.innerHTML = 'ليس لديك حساب ';
    } else {
        submitBtn.name = 'signup';
        submitBtn.innerHTML = 'Signup';
        name.style.display = 'block';
        email.style.display = 'block';
        age.style.display = 'block';
        password.style.display = 'block';
        confirmPassword.style.display = 'block';
        weigth.style.display = 'block';
        log_sign.innerHTML = 'هل لديك حساب بالفعل';
    }
});
submitBtn.addEventListener('click', () => {
    if (name.value === '') {
        alert('Name is required');
        return;
    }
    if (email.value === '') {
        alert('Email is required');
        return;
    }
    if (age.value === '') {
        alert('Age is required');
        return;
    }
    if (password.value === '') {
        alert('Password is required');
        return;
    }
    if (confirmPassword.value === '') {
        alert('Confirm Password is required');
        return;
    }
    if (weigth.value === '') {
        alert('Weight is required');
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
    }
    if (password.value.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    if (password.value.length > 10) {
        alert('Password must be at most 12 characters long');
        return;
    }
    if (weigth.value < 0) {
        alert('Weight must be a positive number');
        return;
    }
    if (weigth.value > 300) {
        alert('Weight must be less than 300');
        return;
    }
    if (age.value < 0) {
        alert('Age must be a positive number');
        return;
    }
    if (age.value > 50) {
        alert('Age must be less than 120');
        return;
    }
    if (submitBtn.name === 'signup') {

        const data = {
            name: name.value,
            email: email.value,
            age: age.value,
            password: password.value,
            weight: weigth.value,
        };
        fetch('http://localhost/webandApp/API_signup.php', {

            body: JSON.stringify(data),
            method: 'POST',
        }).then(reponse => reponse.json()).then(data => {
            alert(data.message);
        }
        );
    } else if (submitBtn.name === 'login') {
        const data = {
            email: email.value,
            password: password.value,
        };
        fetch('http://localhost/webandApp/API_login.php', {

            body: JSON.stringify(data),
            method: 'POST',
        }).then(reponse => reponse.json()).then(data => {
            if (data.message === "Login successful.")
            {
                useremail.innerHTML = email.value;
                username.innerHTML = data.name;
                userpren.innerHTML = data.date;
            }
            alert(data.message);
        }
        );
    }
});
