const btun = document.querySelectorAll('button');
const inputBox = document.getElementById('input');

const operators = ['+','-','*','/','.','%','='];

btun.forEach(button => {
    button.addEventListener('click', () => {
        const inputValue = button.textContent;
        
        
        if(inputValue == '='){
            inputBox.value = eval(inputBox.value);
        }
        else if(inputValue == 'AC'){
            inputBox.value = '';
        }
        else if(inputValue == 'C'){
            inputBox.value = inputBox.value.slice(0, -1)
        }
        else{
            checkAndUpdateDisplay(inputValue);
        }
        
    })
})

document.addEventListener('keydown', function(event){
    const key = event.key;
    if ((key >= '0' && key <= '9') || operators.includes(key)) {
        checkAndUpdateDisplay(key);
    }
    else if(key === 'Escape'){
        inputBox.value = '';
    }
    else if(key == 'Backspace'){
        inputBox.value = inputBox.value.slice(0, -1)
    }
    else if(key === 'Enter'){
        inputBox.value = eval(inputBox.value);
    } 
})

function checkAndUpdateDisplay(value) {
    const lastChar = inputBox.value.slice(-1); // Get the last character from the input box

    // Check if last character is an operator and the current value is also an operator
    if (operators.includes(lastChar) && operators.includes(value)) {
        alert("Please enter a number.");
    } 
    else {
        inputBox.value += value; // Otherwise, append the value
    }
}

