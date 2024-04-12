const privatPerson = document.querySelector('#user_type_1')
const foretagsKund = document.querySelector('#user_type_2')

const foretagForm = document.querySelector('#betalning-foretag')
const privatForm = document.querySelector('#betalning-privat')

privatPerson.addEventListener('click', () => {
  clickFunction('privatperson')
  privatPerson.classList.add('selected-button')
  foretagsKund.classList.remove('selected-button')
})

foretagsKund.addEventListener('click', () => {
  clickFunction('företag')
  foretagsKund.classList.add('selected-button')
  privatPerson.classList.remove('selected-button')
})

function clickFunction (kundTyp) {
  if (kundTyp === 'företag') {
    foretagForm.style.display = 'block'
    privatForm.style.display = 'none'
    return
  }
  if (kundTyp === 'privatperson') {
    privatForm.style.display = 'block'
    foretagForm.style.display = 'none'
    return
  }
}
