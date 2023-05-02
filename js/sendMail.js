let encMail = 'Y29udGFjdEB0aG9tYXNtaWxkbmVyLm1l'
const form  = document.getElementById('submit-paper')
form.setAttribute('href', 'mailto:'.concat(atob(encMail)))