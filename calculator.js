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
        if (number === '.') {
            if (this.curOperand.includes('.'))
                return
            if (this.curOperand === '')
                this.curOperand = 0
        }
        this.curOperand = this.curOperand + number.toString()
    }

    chooseOp(operation) {
        if (this.curOperand === '')
            return
        if (this.prevOperand !== '')
            this.calculate()
        this.operation = operation
        this.prevOperand = this.curOperand
        this.curOperand = ''
    }

    formatNumber(number) {
        const numString = number.toString()
        const real = parseFloat(numString.split('.')[0])
        const decimal = numString.split('.')[1]
        let visorStr
        if (isNaN(real)) {
            visorStr = ''
        }
        else {
            visorStr = real.toLocaleString('en-US', {maximumFractionDigits: 0})
        }
        if (decimal != null){
            return `${visorStr}.${decimal}`
        }
        else {
            return visorStr
        }
    }

    updateVisor() {
        this.curOperandTextElement.innerText = this.formatNumber(this.curOperand)
        if (this.operation != null) {
            this.prevOperandTextElement.innerText =
                `${this.formatNumber(this.prevOperand)} ${this.operation}`
        }
        else {
            this.prevOperandTextElement.innerText = ''
        }
    }

    calculate () {
        let result
        const prev = parseFloat(this.prevOperand)
        const cur = parseFloat(this.curOperand)
        if (isNaN(prev) || isNaN(cur))
            return
        switch (this.operation) {
            case '+':
                result = prev + cur
                break;
            case '-':
                result = prev - cur
                break;
            case '×':
                result = prev * cur
                break;
            case '÷':
                result = prev / cur
                break;
            default:
                return
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