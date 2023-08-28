


// 4 задание ----------------------------------------------
$(function () {
    $("#tel").mask("+7 (999) 999-99-99")
})

const seviceID = 'service_vvopxy9';
const templateID = 'template_fd9yh8p';
const publicKey = 'user_UD2cRh45GVcy1v7EZeuWH'

let name = document.getElementById('name')
let tel = document.getElementById('tel')
let email = document.getElementById('email')

let submitButton = document.getElementById('submitButton')
let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    submitButton.disabled = true
    emailjs
        .send(
            seviceID,
            templateID,
            {
                name:name.value,
                tel: tel.value,
                email: email.value
            },
            publicKey
        )
        .then(() => {
            name.value = ''
            tel.value = ''
            email.value = ''
            submitButton.disabled = false
            alert('Спасибо за заявку!')
        })
        .catch( e => {
            console.log(e)
            alert("Что-то пошло не так...")
        })



    submitButton.disabled = false
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

for (let i=0; i<thirdQuestItems.length; i++) {
    thirdQuestItems[i].querySelector('.itemNumber').innerHTML = '.0'+(i+1)
    if (i % 2 !== 0) {
        thirdQuestItems[i].classList.add('alternativeView')
    }
}