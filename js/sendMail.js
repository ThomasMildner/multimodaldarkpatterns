let encMail = 'bXVsdGltb2RhbGRhcmtwYXR0ZXJuc0BnbWFpbC5jb20='
const form  = document.getElementById('submit-paper')
form.setAttribute('href', 'mailto:'.concat(atob(encMail),'?subject=Submission for the Multimodal Dark Patterns Workshop at CUI23'))