const rhyme = document.querySelector('h1')
const nursery = rhyme.textContent

// const lists = document.getElementsByTagName('li')
const lists = document.querySelectorAll('ol li')

// length of a string
lists[0].textContent += nursery.length

//touppercase method
lists[1].innerHTML += `<strong>${nursery.toUpperCase()}</strong>`

//touppercase method
lists[2].innerHTML += `<strong>${nursery.toLowerCase()}</strong>`

//first character
lists[3].innerHTML = `First character: ${nursery[0]}`

//last character
lists[4].innerHTML = `Last character: ${nursery[nursery.length - 1]}`

//indexof
lists[5].innerHTML = `The index of the letter "t" is ${nursery.indexOf('t')}`

//indexof
lists[6].innerHTML = `The index of the second letter "t" is ${nursery.indexOf('t',10)}`

//indexof
lists[7].innerHTML = `The index of the letter "z" is ${nursery.indexOf('z')}`

//lastindexof
lists[8].textContent = 'The last index Of letter \'a\' ' + nursery.lastIndexOf('a')

//replace
lists[9].innerText = 'Replace "you" with "we": ' + nursery.replace('you', 'we')

//replaceAll
lists[10].innerText = 'ReplaceAll "o" with "u": ' + nursery.replaceAll('o','u')

const twinkle = nursery.slice(0,nursery.indexOf('e')+1)
lists[11].textContent = twinkle

//repeat
lists[12].textContent = twinkle.repeat(5)

//charAt
lists[13].textContent = 'character at index 20: ' + nursery.charAt(20).toUpperCase()

//startwith
lists[14].textContent = 'startwith "k" ' + nursery.startsWith('k')

//endswith
lists[15].textContent = 'endswith "high" ' + nursery.endsWith('high')

//includes
lists[16].textContent = 'includes "car" ' + nursery.includes('car')

//split
lists[17].textContent = nursery.split(' ')

//concatenate
lists[18].textContent = 'The nursery rhyme start with: ' + nursery.concat('twinkle')