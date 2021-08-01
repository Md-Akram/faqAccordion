// const queOne = document.querySelector('#que-1')

// const ansOne = document.querySelector('#ans-1')
// console.log(ansOne.classList)

// queOne.addEventListener('click', () => {
//   queOne.childNodes[3].classList.toggle('rotate')

//   ansOne.classList.toggle('show')
//   console.log(queOne.childNodes[3].classList.value)
// })
const questions = document.getElementsByClassName('question')
const answers = document.getElementsByClassName('answer')

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', () => {
    questions[i].childNodes[3].classList.toggle('rotate')
    answers[i].classList.toggle('show')
    console.log(questions)
    console.log(answers)
  })
}
