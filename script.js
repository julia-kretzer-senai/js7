let user = document.querySelector('#user');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#password-confirm');
let userLogin = document.querySelector('#user-login');
let passwordLogin = document.querySelector('#password-login');
let btnSign = document.querySelector('#sign-btn')

btnSign?.addEventListener('click', () => {
    if (password.value != passwordConfirm.value) {
        alert('A confirmação de senha está diferente da senha');
    } else if (password.value == passwordConfirm.value) {
        window.open('login.html', '_self');
        localStorage.setItem('user', user);
        localStorage.setItem('password', password);
    }
})



