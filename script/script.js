let login = document.getElementById('login');
let signin = document.getElementById('signin');
let home = document.getElementById('home');

home.addEventListener('click', function() {
    window.location.href = "/index";
})

login.addEventListener('click', function() {
    window.location.href = "/login";
})

signin.addEventListener('click', function() {
    window.location.href = "/signin";
})