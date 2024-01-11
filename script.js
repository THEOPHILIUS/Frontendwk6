let firstName = prompt('what is your first name')

let lastName = 'oyetoro'

const town = 'lagos'

const age = '50'

// let statement = 'my name is ' + firstName + ' and my surname is ' + lastName + ' and i live in ' + town
let statement = `my first name is ${firstName} and my surname is ${lastName} and i live in ${town}. I was born in ${new Date().getFullYear()-age}`

console.log(statement)
