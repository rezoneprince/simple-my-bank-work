
document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailType = emailField.value;
    console.log(emailType);

    emailField.value = '';

    const passWordFild = document.getElementById('password-field');
    const passType = passWordFild.value;
    console.log(passType);

    passWordFild.value = '';

    if (emailType === 'mybank@gmail.com' && passType === '12345') {
        window.location.href = 'index.html';
    } else {
        alert('your password is wrong')
    }
});

