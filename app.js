let equal = {
    element: document.querySelector('#button__equal'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let dot = {
    element: document.querySelector('#button__dot'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}

let numberOne = {
    element: document.querySelector('#button__1'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let numberTwo = {
    element: document.querySelector('#button__2'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let numberThree = {
    element: document.querySelector('#button__3'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let numberFour = {
    element: document.querySelector('#button__4'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let numberFive = {
    element: document.querySelector('#button__5'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let numberSix = {
    element: document.querySelector('#button__6'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let numberSeven = {
    element: document.querySelector('#button__7'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let numberEight = {
    element: document.querySelector('#button__8'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let numberNine = {
    element: document.querySelector('#button__9'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}
let numberCero = {
    element: document.querySelector('#button__0'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addLCD)
    }
}

let lcdTotal = []
let lcdValues = []
let lcd = document.querySelector('#lcd');
let lcdValue = []
let numbers = [numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberCero]

function handleLCD(event) {
    return;
}

function addLCD(event) {
    let numberValue;
    if (event.target.id.includes("button")) {
        boxValue = numbers.find((number) => event.target.id.includes(number.value()))
        numberValue = boxValue.value();
    } else if (event.target.id.includes('n')) {
        numberValue = event.target.innerHTML; 
    }

    lcdValue.push(numberValue)
    lcd.innerText = lcdValue.join("");
}
function operation(valueOne, valueTwo, operationSymbol) {
    //Takes two values and apply the operationSymbol to make an operation and return the result.
     return;
}
function sum(values) {
    //Sum two values added into lcdValues
    return;
}
function subtraction (values) {
    // Substrac two values added into lcdValues
    return;
}

function division (values) {
    //Divide two values added into lcdValues 
    return;
}
function multiply(values) {
    //multiply two values added into lcdValues
    return;
}

function addListeners() {
    for (let number of numbers) {
        number.addListener()
    }
    equal.addListener();
    dot.addListener();
}


window.onload = () => {
    //Purple calc
    addListeners();
    
}