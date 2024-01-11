const math = document.getElementsByTagName('li')

let x = 10
let y = 5
let a = 16
let b = 3

let z = x + y
math[0].innerHTML = 'x + y is: ' + z

let c = a / y
math[1].innerHTML = 'a/y is: ' + c

let d = a % y
math[2].innerHTML = 'a % y: ' + d

math[3].innerHTML = 'd to the power of b: ' + d**b

math[4].innerHTML = '8 to the power of 4: ' + math.pow(8,4)

math[5].textContent = 'y - x in absolute: '  + Math.abs(y-x)