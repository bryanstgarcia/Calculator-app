let numberOne = {
    element: document.querySelector('#button__1'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let numberTwo = {
    element: document.querySelector('#button__2'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let numberThree = {
    element: document.querySelector('#button__3'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let numberFour = {
    element: document.querySelector('#button__4'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let numberFive = {
    element: document.querySelector('#button__5'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let numberSix = {
    element: document.querySelector('#button__6'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let numberSeven = {
    element: document.querySelector('#button__7'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let numberEight = {
    element: document.querySelector('#button__8'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let numberNine = {
    element: document.querySelector('#button__9'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let numberCero = {
    element: document.querySelector('#button__0'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let dot = {
    
    element: document.querySelector('#button__dot'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    }
}
let equal = {

    element: document.querySelector('#button__equal'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    }
}
let sum = {

    element: document.querySelector('#button__sum'),
    value: function () {
        return this.element.innerHTML;
    },
    calc: function (valueOne, valueTwo) {
        return parseInt(valueOne) + parseInt(valueTwo);
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    }
}
let subtraction = {

    element: document.querySelector('#button__subtraction'),
    value: function () {
        return this.element.innerHTML;
    },
    calc: function (valueOne, valueTwo) {
        return parseInt(valueOne) - parseInt(valueTwo);
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    }
}
let multiply = {

    element: document.querySelector('#button__multiply'),
    value: function () {
        return this.element.innerHTML;
    },
    calc: function (valueOne, valueTwo) {
        return parseInt(valueOne) * parseInt(valueTwo);
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    }
}
let divide = {
    element: document.querySelector('#button__divide'),
    value: function () {
        return this.element.innerHTML;
    },
    calc: function (valueOne, valueTwo) {
        return parseInt(valueOne) / parseInt(valueTwo);
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    }
}
let exponential = {
    element: document.querySelector('#button__exponent'),
    value: function () {
        return this.element.innerHTML;
    },
    calc: function (valueOne, valueTwo) {
        return Math.pow(valueOne, valueTwo);
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    }

}
let lcd = {
    numbers: document.querySelector('#lcd-numbers'),
    value: [],
    values: [],
    total:[],
    symbol: document.querySelector('#lcd-symbol'),
}
//let lcdNumbers = document.querySelector('#lcd-numbers');
//let lcdSymbol = document.querySelector('#lcd-symbol')
//let lcdTotal = []
//let lcdValues = []
//let lcdValue = []
let numbers = [numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberCero]
let operations = [sum, subtraction, multiply, divide, exponential, equal]

function handleLCD(event) {
    return;
}

function addNumberLCD(event) {
    //Add a number to the lcd
    let numberValue;
    if (event.target.id === "button__dot" || event.target.id === "dot") {
        if (lcd.value.join("").includes(".")) return;
        if (lcd.value.length > 0 ) {
            numberValue = "."
        } else {
            numberValue = "0."
        }          
    } else if (event.target.id.includes("button")) {
        let valueToAdd = numbers.find((number) => event.target.id.includes(number.value()))
        numberValue = valueToAdd.value();
    } else if (event.target.id.includes('n')) {
        numberValue = event.target.innerHTML; 
    }

    lcd.value.push(numberValue)
    lcd.numbers.innerText = lcd.value.join("");
}
function handleOperation(event) {
    const symbol = document.querySelector(`#${event.target.id}`);
    const symbolObject = symbol.getAttribute('data-value')
    let operationObject = operations.find(operation => operation.value().includes(symbolObject))
    
    lcd.symbol.innerHTML = operationObject.value()
    if (lcd.symbol !== "") {

    }
    if (lcd.value == "") {
        return;
    } else {
        //Add to number to values 
        lcd.values.push(lcd.value.join(""))
        //Clear lcd.value
        lcd.value = []
    }

    console.log(lcd.values, lcd.value)
    console.log(typeof lcd.value)
}
    
function addListeners() {
    for (let number of numbers) {
        number.addListener()
    }
    for (let operation of operations) {
        operation.addListener()
    }
    dot.addListener();
}


window.onload = () => {
    //Purple calc
    addListeners();
    
}