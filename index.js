// const firstVar = 1
// console.log(firstVar)

const array = [1,2,3,4,5,6,7,8,9,0]
// console.log(array)

// console.log(array[5])
const obj = {
  array: []
}
console.log(obj)

function shtani (korman1, korman2) {
  console.log(korman1)
  console.log(korman2)
}

// shtani('dimon privet', 'lol kek')

array.forEach(function (element) {
  obj.array.push(element * 2)
})



console.log(obj)