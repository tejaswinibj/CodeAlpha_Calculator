const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let input = "";

// Button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('clear')) {
      input = "";
      display.value = "";
    } 
    else if (button.classList.contains('delete')) {
      input = input.slice(0, -1);
      display.value = input;
    } 
    else if (button.classList.contains('equal')) {
      calculate();
    } 
    else {
      input += convertSymbol(value);
      display.value = input;
    }
  });
});

// Convert × and ÷ symbols to JS operators
function convertSymbol(value) {
  if (value === '×') return '*';
  if (value === '÷') return '/';
  if (value === '−') return '-';
  return value;
}

// Perform calculation
function calculate() {
  try {
    const result = eval(input);
    display.value = result;
    input = result.toString();
  } catch {
    display.value = "Error";
    input = "";
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    input += e.key;
    display.value = input;
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    input = input.slice(0, -1);
    display.value = input;
  } else if (e.key.toLowerCase() === 'c') {
    input = "";
    display.value = "";
  }
});
