const num1Input = document.querySelector('#num1')
const num2Input = document.querySelector('#num2')
const addButton = document.querySelector('#add-button')
const subtractButton = document.querySelector('#subtract-button')
const multiplyButton = document.querySelector('#multiply-button')
const divideButton = document.querySelector('#divide-button')
const clearAllButton = document.querySelector('#clear-all-button')
const displayElement = document.querySelector('#display')



const add = (x,y) => x+y
const subtract = (x,y) => x-y
const multiply = (x,y) => x*y
const divide = (x,y) => y !== 0 ? x/y : Infinity

const calculator = (x, y, callback) => callback(x,y)

const clearDisplay = () => {
    displayElement.innerHTML = '0'
}

addButton.addEventListener('click', function(){
    clearDisplay()
    let input1 = Number(num1Input.value)
    let input2 = Number(num2Input.value)
    displayElement.innerHTML = (calculator(input1,input2,add))
})
subtractButton.addEventListener('click', function(){
    clearDisplay()
    let input1 = Number(num1Input.value)
    let input2 = Number(num2Input.value)
    displayElement.innerHTML = (calculator(input1,input2,subtract))
})
multiplyButton.addEventListener('click', function(){
    clearDisplay()
    let input1 = Number(num1Input.value)
    let input2 = Number(num2Input.value)
    displayElement.innerHTML = (calculator(input1,input2,multiply))
})
divideButton.addEventListener('click', function(){
    clearDisplay()
    let input1 = Number(num1Input.value)
    let input2 = Number(num2Input.value)
    displayElement.innerHTML = (calculator(input1,input2,divide))
})
clearAllButton.addEventListener('click', clearDisplay)