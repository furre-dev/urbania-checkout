const privatPerson = document.querySelector('#user_type_1')
const foretagsKund = document.querySelector('#user_type_2')

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
    console.log('ebem')
  } else {
    console.log('ebem2')
  }
}
