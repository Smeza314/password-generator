document.getElementById('generate').addEventListener('click', () => {
  let hasLength = prompt('Please choose the length of your username')
  let hasNumbers = document.getElementById('numbers').checked
  let hasSymbols = document.getElementById('symbols').checked
  let hasUppercase = document.getElementById('uppercase').checked
  let hasLowercase = document.getElementById('lowercase').checked

  let charSet = ''

  let lowercase = 'abcdefghijklmnopqrstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '0123456789'
  let symbols = '!@#$%^&*'

  let generatedUsername = ''

  if (hasLowercase) {
    charSet += lowercase
  }

  if (hasUppercase) {
    charSet += uppercase
  }

  if (hasNumbers) {
    charSet += numbers
  }

  if (hasSymbols) {
    charSet += symbols
  }

  for (let i = 0; i < hasLength; i++) {
    generatedUsername += charSet[Math.floor(Math.random() * charSet.length)]
  }

  document.getElementById('password').textContent = generatedUsername
})