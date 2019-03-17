var numbers = [];
var total = 0;
var temp = '';
var decimalPoint = false;

function buttonClicked(val) {
    buttonValue(val);
    display(temp);
}

   
function buttonValue(val) {

    if (val === 'clear') {
        clearAll();
        return;
    }

    if (!isNaN(val) || val === '.') {
        if (val === '.'  && decimalPoint === true) {
            return;
        } else if (val === '.' && decimalPoint === false) {
            decimalPoint = true;
        }
        temp = temp + val;
    } else if (val === '=') {
        numbers.push(parseFloat(temp));
        calculate();
        decimalPoint = false;
    }
    else{
        numbers.push(parseFloat(temp));
        numbers.push(val);
        temp = "";
        decimalPoint = false;
    }
}


function calculate() {
    var answer = eval(numbers.join(' '));
    total = parseFloat(answer);
    numbers = [];
    temp = "";
    display(total);
}

function display(value) {
    var displayText = value;
    if (displayText === '') {
        displayText === '0';
    } else {
     document.querySelector('.output').textContent = displayText;
    }
}

function clearAll() { 
    temp = '';
    total = 0;
    numbers = [];
    decimalPoint = false;
    display('0');
}
