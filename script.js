const inp1 = document.querySelector('#inp1')
const inp2 = document.querySelector('#inp2')
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
  const val1 = inp1.value
  const val2 = inp2.value
  const numbers = val2.split(',').map((el) => parseInt(el))
  console.log(numbers)
  start(val1, numbers)
})
// start('ABCDE', [0, 2, 6])
