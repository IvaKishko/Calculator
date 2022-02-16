// Declaring ADD function
function add(a, b){
    return a + b
}

// Declaring SUBTRACT function
function subtract(a, b){
    return a - b
}

// Declaring MULTIPLY function
function multiply(a, b){
    return a * b
}

// Declaring DIVIDE function
function divide(a, b){
    return a / b
}

// Declaring MODULO function
function modulo(a, b){
    return a % b
}
console.log(divide(4,2))
// Declaring OPERATE function, which takes operator and number
// and calls for relevant function
function operate(a, b, operator){
    if(operator === '+'){
        return add(a, b);
        console.log(add(a, b));
    } else if(operator === '-'){
        return subtract(a, b);
    } else if(operator === 'x'){
        return multiply(a, b);
    } else if(operator === '/'){
        return divide(a, b);
    } else if(operator === '%'){
        return modulo(a, b);
    };
};

//Selecting Screen container which is in HTML file
let screenContainer = document.querySelector(".screen");
// Creating araray of operators
let operatorArray = ['+', '-', 'x', '%', '/', 'x']
// Creating display value for future calculations
let displayValue = '';
let displayValue2 = '';
//Creating list to use for further calculations
let calculatorArray = []
// Declaring variable for buttons and adding DISPLAY function
let getButton = document.querySelectorAll('.button');
getButton.forEach(item => item.addEventListener('click', function(){
    //tests if CLEAR BUTTON has been pressed
    if (`${item.textContent}`=== 'AC'){
        console.log('Clear All');
        displayValue = '';
        screenContainer.innerHTML = '';
        calculatorArray = [];
        displayValue2 = '';
        const audio = document.querySelector('audio');
        const button = document.querySelector('button')
        if(!audio) return;
        audio.currentTime = 0;
        audio.play()
    //tests if DELETE button has been pressed
    } else if(`${item.textContent}`=== 'C'){
        console.log('Delete last')
        displayValue = displayValue.slice(0, -1);
        screenContainer.innerHTML = `${displayValue}`
        const audio = document.querySelector('audio');
        if(!audio) return;
        audio.currentTime = 0;
        audio.play()
    } else if(`${item.textContent}`=== '='){
        let found = operatorArray.find(v => (displayValue.includes(v)));
        calculatorArray = displayValue.split(found)
        console.log(calculatorArray)
        displayValue = operate(parseInt(calculatorArray[0]),parseInt(calculatorArray[1]), found)
        screenContainer.innerHTML = displayValue
        const audio = document.querySelector('audio');
        if(!audio) return;
        audio.currentTime = 0;
        audio.play()
    } 
    else {
            displayValue += `${item.textContent}`
            screenContainer.innerHTML += `${item.textContent}`
            const audio = document.querySelector('audio');
            if(!audio) return;
            audio.currentTime = 0;
            audio.play()
    }

}))




// if (getButton.includes(`${item.textContent}`)){
//         //screen containers vatavsebt displayValueshi da mere
//         //vasuptavebt da rac darcheba vamatebt an vyopt
//         // 2 nabijiani unda iyos mainc chveni kalkulatori
//     }