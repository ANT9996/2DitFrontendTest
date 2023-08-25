
$(function () {
    $("#tel").mask("+7 (999) 999-99-99")
})

const seviceID = 'service_vvopxy9';
const templateID = 'template_fd9yh8p';
const publicKey = 'user_UD2cRh45GVcy1v7EZeuWH'

let submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', () => {
    submitButton.disabled = true
    let name = document.getElementById('name').value
    let tel = document.getElementById('tel').value
    let email = document.getElementById('email').value
    emailjs.send(seviceID, templateID, {name, tel, email}, publicKey)
        .then(() => {
            alert('Спасибо за заявку!')
            document.getElementById('name').value = ''
            document.getElementById('tel').value = ''
            document.getElementById('email').value = ''
            submitButton.disabled = false
        });
})