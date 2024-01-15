let currentInput = ''; 
 
function appendNumber(number) { 
  currentInput += number; 
  updateDisplay(); 
} 
 
function appendOperator(operator) { 
  currentInput += operator; 
  updateDisplay(); 
} 
 
function clearDisplay() { 
  currentInput = ''; 
  updateDisplay(); 
} 
 
function calculateResult() { 
  try { 
    const result = eval(currentInput); 
    currentInput = result.toString(); 
    updateDisplay(); 
  } catch (error) { 
    currentInput = 'Hata'; 
    updateDisplay(); 
  } 
} 
 
function updateDisplay() { 
  document.getElementById('display').value = currentInput; 
}