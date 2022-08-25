class Calculator {
    constructor(curOperandTextElement, prevOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement;
        this.curOperandTextElement = curOperandTextElement;
    }

    ce() {

    }

    c() {

    }

    appendNum(number) {

    }

    chooseOp() {

    }

    updateVisor() {

    }
}

const opButtons = document.querySelectorAll('[data-op]')
const numButtons = document.querySelectorAll('[data-num]')
const eqButtons = document.querySelectorAll('[data-eq]')
const ceButton = document.querySelectorAll('[data-ce]')
const cButton = document.querySelectorAll('[data-c]')
const curOperandTextElement = document.querySelectorAll('[data-cur]')
const prevOperandTextElement = document.querySelectorAll('[data-prev]')

const calculator = new Calculator(curOperandTextElement, prevOperandTextElement)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateVisor()
    })
})