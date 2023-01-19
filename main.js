const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const again = screen2.querySelector('button')
const closedCookie = screen1.querySelector('button')
let cookieMessage = screen2.querySelector('h2')
let randomMessage = Math.round(Math.random() * 10)

closedCookie.addEventListener('click', imgClickHandle)
again.addEventListener('click', buttonClickHandle)

function hideToggle() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function imgClickHandle() {
  if (randomMessage == 0) {
    cookieMessage.innerHTML = 'A vida trará coisas boas se tiver paciência.'
  } else if (randomMessage == 1) {
    cookieMessage.innerHTML =
      'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
  } else if (randomMessage == 2) {
    cookieMessage.innerHTML =
      'Procure acender uma vela em vez de amaldiçoar a escuridão'
  } else if (randomMessage == 3) {
    cookieMessage.innerHTML =
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'
  } else if (randomMessage == 4) {
    cookieMessage.innerHTML = 'Não compense na ira o que lhe falta na razão.'
  } else if (randomMessage == 5) {
    cookieMessage.innerHTML =
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'
  } else if (randomMessage == 6) {
    cookieMessage.innerHTML =
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?'
  } else if (randomMessage == 7) {
    cookieMessage.innerHTML = 'A maior de todas as torres começa no solo.'
  } else if (randomMessage == 8) {
    cookieMessage.innerHTML =
      'Defeitos e virtudes são apenas dois lados da mesma moeda.'
  } else if (randomMessage == 9) {
    cookieMessage.innerHTML = 'Não há que ser forte. Há que ser flexível.'
  } else if (randomMessage == 10) {
    cookieMessage.innerHTML =
      'O amor está sempre mais próximo do que você imagina.'
  }

  hideToggle()
}

function buttonClickHandle() {
  randomMessage = Math.round(Math.random() * 10)
  hideToggle()
}
