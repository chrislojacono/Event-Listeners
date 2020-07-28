const sentenceFunctionHello = (str) => {
    return `Hello to you, ${str}`
}

const sentenceFunctionBye = (str) => {
    return `Goodbye my friend, ${str}`
}

const callbackAtcha = (str, cb) => {
    return cb(str)
}

console.log(callbackAtcha("Evan", sentenceFunctionBye))

console.log(callbackAtcha("Devon", sentenceFunctionHello))

const buttonSelector = document.getElementById('main-btn')

console.log(buttonSelector)


const queryButton = document.querySelector('#main-btn')

console.log(queryButton)

queryButton.addEventListener("click", () => {
    console.log('button has been clicked');
})

const clickMe = () => {
    console.log("You clicked me!!!")
}

queryButton.addEventListener("click", clickMe)