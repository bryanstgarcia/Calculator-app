let numberOne = {
    element: document.querySelector('#button__1'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let numberTwo = {
    element: document.querySelector('#button__2'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let numberThree = {
    element: document.querySelector('#button__3'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let numberFour = {
    element: document.querySelector('#button__4'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let numberFive = {
    element: document.querySelector('#button__5'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let numberSix = {
    element: document.querySelector('#button__6'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let numberSeven = {
    element: document.querySelector('#button__7'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let numberEight = {
    element: document.querySelector('#button__8'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let numberNine = {
    element: document.querySelector('#button__9'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let numberCero = {
    element: document.querySelector('#button__0'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }
}
let dot = {
    
    element: document.querySelector('#button__dot'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', addNumberLCD)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', addNumberLCD)
    }

}
let equal = {
    element: document.querySelector('#button__equal'),
    value: function () {
        return this.element.getAttribute('data-value')
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', handleOperation)
    }
}
let sum = {

    element: document.querySelector('#button__sum'),
    value: function () {
        return this.element.innerHTML;
    },
    calc: function (valueOne, valueTwo) {
        return parseFloat(valueOne) + parseFloat(valueTwo);
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', handleOperation)
    }
}
let subtraction = {

    element: document.querySelector('#button__subtraction'),
    value: function () {
        return this.element.innerHTML;
    },
    calc: function (valueOne, valueTwo) {
        return parseFloat(valueOne) - parseFloat(valueTwo);
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', handleOperation)
    }
}
let multiply = {

    element: document.querySelector('#button__multiply'),
    value: function () {
        return this.element.innerHTML;
    },
    calc: function (valueOne, valueTwo) {
        return parseFloat(valueOne) * parseFloat(valueTwo);
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', handleOperation)
    }
}
let divide = {
    element: document.querySelector('#button__divide'),
    value: function () {
        return this.element.innerHTML;
    },
    calc: function (valueOne, valueTwo) {
        return parseFloat(valueOne) / parseFloat(valueTwo);
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleOperation)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', handleOperation)
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
    },
    removeListener: function () {
        return this.element.removeEventListener('click', handleOperation)
    }

}
let clear = {
    element: document.querySelector('#button__c'),
    value: function () {
        return this.element.innerHTML;
    },
    addListener:  function () {
        return this.element.addEventListener('click', handleClear)
    },
    removeListener: function () {
        return this.element.removeEventListener('click', handleClear)
    }

}
let lcd = {
    numbers: document.querySelector('#lcd-numbers'),
    value: [],
    values: [],
    total:[],
    symbol: document.querySelector('#lcd-symbol')
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
        if (lcd.value.join("").includes(".")) return;  // Return if "." exist in lcd.value
        if (lcd.value.length > 0 ) {  // Add "." to lcd
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
    //Add the symbol to lcd
    
    
    if (lcd.symbol.innerHTML != "") {
        //Add actual value to values
        lcd.values.push(lcd.value.join(""));
        let actualSymbol = lcd.symbol.innerHTML;
        //Find actual opertaion 
        let actualOperation = operations.find(operation => operation.value().includes(actualSymbol));
        //Make a calculation
        console.log('Actual calculation values')
        console.log(lcd.values[0])
        console.log(lcd.values[1])
        let calculation = actualOperation.calc(lcd.values[0], lcd.values[1])
        //Clear actual values
        lcd.values = [];
        lcd.value = [];
        
        //Add new calc value
        lcd.values.push(calculation);
        
        console.log('Values before calculation')
        console.log(lcd.values[0])
        console.log(lcd.values[1])
        //Add to lcd
        lcd.numbers.innerText = calculation;
        lcd.symbol.innerText = "";

        lcd.symbol.innerHTML = operationObject.value();
    } else {
        //Add the operation symbol
        lcd.symbol.innerHTML = operationObject.value();

        if (lcd.value == "") {
            return;
        } else {
            //Add number to values 
            lcd.values.push(lcd.value.join(""));
            //Clear lcd.value
            lcd.value = [];
        }
    }

    console.log(lcd.values, lcd.value);
    console.log(typeof lcd.value);
}
    
function handleListeners(type) {
    if (type == 'add'){
        for (let number of numbers) {
        number.addListener()
        }
        for (let operation of operations) {
            operation.addListener()
        }
        dot.addListener();
        clear.addListener()
    } else if (type == 'remove') {
        for (let number of numbers) {
            number.removeListener()
        }
        for (let operation of operations) {
            operation.removeListener()
        }
        dot.removeListener();
        clear.removeListener();
    }
}

//Delete values
function handleClear() {
    lcd.numbers.innerText = '0';
    lcd.value = [];
    lcd.values = [];
    lcd.total = [];
    lcd.symbol.innerText = '';
}
//On-Off
let on = false;
let onOffButton = document.querySelector('#button__on-off')

function onOff() {
    if (on == false) {
        on = true;
        lcd.numbers.innerText = '0'
        handleListeners('add');
    } else {
        on = false;
        handleClear()
        lcd.numbers.innerText = 'OFF'
        handleListeners('remove');
    }
}
window.onload = () => {
    //Purple calc
    if (on == false) {
        lcd.numbers.innerText = 'OFF'
    }
    onOffButton.addEventListener('click', onOff)
    
}