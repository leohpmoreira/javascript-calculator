class Calculator {
    constructor(curOperandTextElement, prevOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement
        this.curOperandTextElement = curOperandTextElement
        this.c()
    }

    ce() {
        this.curOperand = this.curOperand.toString().slice(0,-1)
    }

    c() {
        this.curOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    appendNum(number) {
        this.curOperand = this.curOperand + number.toString()
    }

    chooseOp(operation) {
        this.operation = operation
    }

    updateVisor() {
        this.curOperandTextElement.innerText = this.curOperand
        this.prevOperandTextElement.innerText = this.prevOperand
    }

    calculate () {
        let result
        const prev = parseFloat(this.prevOperand)
        const cur = parseFloat(this.curOperand)
        switch (this.operation) {
            case '+':
                result = prev + cur
                break;
            case '-':
                result = prev + cur
                break;
            case '×':
                result = prev * cur
                break;
            case '÷':
                result = prev / cur
                break;
        }
        this.operation = undefined
        this.curOperand = result
        this.prevOperand = ''
    }
}

const numButtons = document.querySelectorAll('[data-num]')
const opButtons = document.querySelectorAll('[data-op]')
const eqButton = document.querySelector('[data-eq]')
const ceButton = document.querySelector('[data-ce]')
const cButton = document.querySelector('[data-c]')
const curOperandTextElement = document.querySelector('[data-cur]')
const prevOperandTextElement = document.querySelector('[data-prev]')

const calculator = new Calculator(curOperandTextElement, prevOperandTextElement)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateVisor()
    })
})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOp(button.innerText)
        calculator.updateVisor()
    })
})

eqButton.addEventListener('click', () => {
    calculator.calculate()
    calculator.updateVisor()
})

cButton.addEventListener('click', () => {
    calculator.c()
    calculator.updateVisor()
})

ceButton.addEventListener('click', () => {
    calculator.ce()
    calculator.updateVisor()
})