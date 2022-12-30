const generateGreyCode = (n) => {
  let greyTable = ['0', '1']
  for (let i = 2; i < Math.pow(2, n); i *= 2) {
    for (let j = i - 1; j >= 0; j--) {
      greyTable.push(`1${greyTable[j]}`)
      greyTable[j] = `0${greyTable[j]}`
    }
  }
  // for (let i = 1; i <= greyTable.length; i++) {
  //   console.log(`${i} ${greyTable[i-1]}`)
  // }
  return greyTable
}
// generateGreyCode(3)
