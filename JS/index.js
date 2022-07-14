const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.add-time')
const buttonTakeTime = document.querySelector('.take-time')
const buttonCard = document.querySelector('.card')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonDark = document.querySelector('.dark')
const buttonLigth = document.querySelector('.ligth')
const body = document.querySelector('body')

const soundFlorest = new Audio('./assets/sounds/Floresta.wav')
const soundRain = new Audio('./assets/sounds/Chuva.wav')
const soundCoffe = new Audio('./assets/sounds/Cafeteria.wav')
const soundFireplace = new Audio('./assets/sounds/Lareira.wav')
const soundButtonPress = new Audio('./assets/sounds/button-press.wav')
const soundAlarm = new Audio('./assets/sounds/alarm.mp3')

const cardFlorest = document.querySelector('.card-1')
const cardRain = document.querySelector('.card-2')
const cardCoffe = document.querySelector('.card-3')
const cardFireplace = document.querySelector('.card-4')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function soundDefault() {
  soundFlorest.pause()
  soundRain.play()
  soundCoffe.pause()
  soundFireplace.pause()
  cardFlorest.classList.remove('active')
  cardRain.classList.add('active')
  cardFireplace.classList.remove('active')
  cardCoffe.classList.remove('active')
  soundRain.loop = true
}

function resetSound() {
  soundFlorest.pause()
  soundRain.pause()
  soundCoffe.pause()
  soundFireplace.pause()
}

function resetTimer() {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(0).padStart(2, '0')
  clearTimeout(timerTimeOut)
}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = '00'

    if (minutes <= 0) {
      resetTimer()
      soundAlarm.play()
      resetSound()
      return
    }

    if (seconds <= 0) {
      seconds = 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    countDown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  countDown()
  soundDefault()
  soundButtonPress.play()
})

buttonStop.addEventListener('click', function () {
  resetTimer()
  resetSound()
  soundButtonPress.play()
})

buttonAddTime.addEventListener('click', function () {
  soundButtonPress.play()
  minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
  if (minutes >= 90) {
    resetTimer()
  }
})

buttonTakeTime.addEventListener('click', function () {
  soundButtonPress.play()
  minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
  if (minutes <= 0) {
    resetTimer()
  }
})

cardFlorest.addEventListener('click', function () {
  cardFlorest.classList.add('active')
  cardRain.classList.remove('active')
  cardFireplace.classList.remove('active')
  cardCoffe.classList.remove('active')
  soundFlorest.play()
  soundRain.pause()
  soundCoffe.pause()
  soundFireplace.pause()
  soundFlorest.loop = true
})

cardRain.addEventListener('click', function () {
  cardFlorest.classList.remove('active')
  cardRain.classList.add('active')
  cardFireplace.classList.remove('active')
  cardCoffe.classList.remove('active')
  soundDefault()
})

cardCoffe.addEventListener('click', function () {
  cardFlorest.classList.remove('active')
  cardRain.classList.remove('active')
  cardFireplace.classList.remove('active')
  cardCoffe.classList.add('active')
  soundFlorest.pause()
  soundRain.pause()
  soundCoffe.play()
  soundFireplace.pause()
  soundCoffe.loop = true
})

cardFireplace.addEventListener('click', function () {
  cardFlorest.classList.remove('active')
  cardRain.classList.remove('active')
  cardFireplace.classList.add('active')
  cardCoffe.classList.remove('active')
  soundFlorest.pause()
  soundRain.pause()
  soundCoffe.pause()
  soundFireplace.play()
  soundFireplace.loop = true
})

buttonDark.addEventListener('click', function () {
  buttonLigth.classList.remove('hide')
  buttonDark.classList.add('hide')
  body.classList.add('page-dark')
})

buttonLigth.addEventListener('click', function () {
  buttonLigth.classList.add('hide')
  buttonDark.classList.remove('hide')
  body.classList.remove('page-dark')
})

const volumeFlorest = document.querySelector('#volFlorest')
const volumeRain = document.querySelector('#volRain')
const volumeCoffe = document.querySelector('#volCoffe')
const volumeFirePlace = document.querySelector('#volFirePlace')

volumeFlorest.addEventListener('input', function () {
  soundFlorest.volume = volumeFlorest.value
})

volumeRain.addEventListener('input', function () {
  soundRain.volume = volumeRain.value
})

volumeCoffe.addEventListener('input', function () {
  soundCoffe.volume = volumeCoffe.value
})

volumeFirePlace.addEventListener('input', function () {
  soundFireplace.volume = volumeFirePlace.value
})
