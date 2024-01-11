// const title = document.querySelector('h2').textContent = 'DOM Manipulation'

const title = document.querySelector('h2')

title.textContent = 'DOM Manipulation'

const para1 = document.querySelector('p')
const para2 = document.querySelector('p:nth-of-type(2)')
const para3 = document.querySelector('body>:nth-child(5)')
const para4 = document.querySelector('p+p+p+p')
const para5 = document.querySelector('.last')

para1.textContent = 'this is the first paragraph'
para2.textContent = 'this is the second paragraph'
para3.textContent = 'this is the third paragraph'
para4.textContent = 'this is the forth paragraph'
para5.textContent = 'this is the last paragraph'

const lists = document.querySelectorAll('ul li')
lists[5].textContent = 'list 001'
lists[1].textContent = 'list 002'
lists[4].textContent = 'list 003'
lists[3].textContent = 'list 004'
lists[2].textContent = 'list 005'
lists[0].textContent = 'list 006'

const unique = document.getElementById('one')
unique.style.backgroundColor = '#E55'
unique.style.textTransform = 'uppercase'
lists[5].style.borderbottom = '6px dotted blue'
lists[1].style.color = '#0f0'

const para = document.querySelectorAll('p')
para[0].style.fontSize = '3rem'
para[4].style.background = 'linear-gradient(red, blue)'

const header = document.querySelector('h1')
header.style.textAlign = 'center'

const classone = document.getElementsByClassName('one')
classone[0].textContent = 'this is a class paragraph'

const declaration = document.getElementsByTagName('div')
declaration[0].style.color = 'red'

const par = document.querySelector('#par')
par.innerHTML = `I am a <br> <strong>frontend</strong> developer. He said <q>I am coming</q>`
