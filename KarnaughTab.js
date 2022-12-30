const karnaughTab = document.querySelector('.tab2')

const getTitleRowAndColumn = (row, column, text) => {
  const rowTitle = text.substr(0, row)
  const colTitle = text.substr(row, column)
  return { colTitle, rowTitle }
}

const getWidthAndHeight = (tabLength) => {
  const width = Math.floor(tabLength / 2)
  const height = Math.ceil(tabLength / 2)
  return { width, height }
}

const addTitlesToTab = (title) =>
  `<th> ${title.rowTitle} / ${title.colTitle} </th>`

const generateTable = (width, height, numbers, tabLength, input) => {
  let numbersInBinary = numbers

  numbersInBinary = numbersInBinary.map((el) =>
    el.toString(2).padStart(tabLength, '0'),
  )
  // console.log(numbersInBinary)
  // console.log(numbersInBinary[0])
  // console.log(Math.pow(2, height), Math.pow(2, width))
  let contentOF = '<table class="tab1">'
  for (let i = 0; i < Math.pow(2, height) + 1; i++) {
    contentOF += '<tr>'
    let firstPartOfBinary = generateGreyCode(height)[i - 1]
    if (i !== 0) {
      contentOF += `<td> ${firstPartOfBinary} </td>`
    }

    for (let j = 0; j < Math.pow(2, width); j++) {
      if (i == 0 && j == 0) {
        contentOF += addTitlesToTab(getTitleRowAndColumn(height, width, input))
      }
      let lastPartOfBinary = generateGreyCode(width)[j]
      let binary = firstPartOfBinary + lastPartOfBinary
      if (i == 0) contentOF += `<td> ${lastPartOfBinary} </td>`
      else {
        if (numbersInBinary.includes(binary))
          // contentOF += `<td class="one"> ${binary} </td>`
          contentOF += `<td class="one"> ${1} </td>`
        
        else contentOF += `<td>${0} </td>`
        //contentOF += `<td>${binary} </td>`
      }
      // console.log(binary)
    }
    contentOF += '</tr>'
  }
  contentOF += '</table>'
  karnaughTab.innerHTML = contentOF
}

const start = (input, tab) => {
  let tabLength = input.length
  let width = getWidthAndHeight(tabLength).width
  let height = getWidthAndHeight(tabLength).height
  generateTable(width, height, tab, tabLength, input)
  generateBasicTable(input, tab)
}

// start('ABC', [0, 2, 6])
