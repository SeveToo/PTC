const tab1 = document.querySelector('.tab1')
// const tab2 = document.querySelector('.tab2')

// let numberOfLetters = 3
// let numberOfRows = Math.pow(2, numberOfLetters)
// let numbers = [3, 2, 1]

// // wypisz kolejne wiersze kodu Gray'a
// console.log('   ABC Y')
// for (let i = 0; i < numberOfRows; i++) {
//   let num = numbers.find((el) => el == i) ? 1 : 0
//   console.log(`${i}. ${i.toString(2).padStart(numberOfLetters, '0')} ${num}`)
// }

const generateBasicTable = (Letters, numbers) => {
  let numberOfLetters = Letters.length
  let content = '<table>'
  let numberOfRows = Math.pow(2, numberOfLetters)

  content += `<th> Lp.</th>`
  for (let i = 0; i < numberOfLetters; i++) {
    content += `<th> ${Letters[i]}</th>`
  }

  content += `<th>Y</th>`
  for (let i = 0; i < numberOfRows; i++) {
    let number = numbers.find((el) => el == i) + 1 ? 1 : 0
    // console.log(numbers.find((el) => el == i))
    // console.log(numbers.find((el) => el == i))

    content += `<tr class="${number ? 'one' : 'zero'}">`
    content += `<td> ${i} </td>`
    for (let j = 0; j < numberOfLetters; j++) {
      content += `<td> ${i.toString(2).padStart(numberOfLetters, '0')[j]}</td>`
    }
    content += `<td>${number}</td>`
    content += '</tr>'
  }
  content += '</table>'
  tab1.innerHTML = content
}
