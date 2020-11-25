//merge
const arr1 = ['a', 'b', 'c']
const arr2 = [4, 5, 6, 7]
const arr3 = [...arr1, ...arr2]
// console.log('arr3: ', arr3)
//--------------------------------------------------------------------

//clone
const arr4 = [1, 2, 3, 4]
const arr5 = [...arr4]
arr5.push(5, 6, 7)
// console.log('arr5: ', arr5)
// console.log('arr4: ', arr4)
//--------------------------------------------------------------------

//string to array
const str = 'Hello world'
const arr6 = [...str]
// console.log('arr6: ', arr6)
//--------------------------------------------------------------------

//Set to array
const arr7 = [...new Set([1, 1, 2, 3, 4, 4, 5, 6])]
// console.log(arr7);
//--------------------------------------------------------------------

function array() {
    // console.log(arguments)
}
array(1, 2, 3, 4, 5, 6)
//--------------------------------------------------------------------

const paragraph = document.querySelectorAll('p')
console.dir(paragraph)
console.log([...paragraph])
//--------------------------------------------------------------------