


// 4 задание ----------------------------------------------
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


// 1 задание --------------------------------------------
let accordions = document.getElementById('accordions')
let accordionsItems = accordions.querySelectorAll('.accordions__item')

for (let i=0; i<=accordionsItems.length-1; i++) {
    accordionsItems[i].id = 'accordionItem_'+i
    let accordionContent = accordionsItems[i].querySelector('.accordions__content')
    accordionContent.id = 'accordionContent_'+i
    accordionsItems[i].addEventListener('click', () => {
            document.getElementById('accordionContent_'+i).classList.toggle('show')
    })
}

// 3 задание -----------------------------------------------

let thirdQuest = document.getElementsByClassName('thirdQuest')[0]
let thirdQuestItems = thirdQuest.querySelectorAll('.thirdQuest__item')
console.log(thirdQuest)

for (let i=0; i<thirdQuestItems.length; i++) {
    thirdQuestItems[i].querySelector('.itemNumber').innerHTML = '.0'+(i+1)
    if (i % 2 !== 0) {
        thirdQuestItems[i].classList.add('alternativeView')
    }
}