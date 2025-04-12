const Name = document.getElementById('username');
const email = document.getElementById('userEmail');


const userEmail = localStorage.getItem('userEmail');
const username = localStorage.getItem('userName');
email.textContent = userEmail;
Name.textContent = username;
const dateprent = document.getElementById('datepren');
const datesql = localStorage.getItem('datepre');
const buttondate = document.getElementById('buttondate');
const date = new Date();
