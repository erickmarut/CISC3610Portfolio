// Check if values are stored in localStorage
if (localStorage.getItem('number1')) {
    document.getElementById('number1').value = localStorage.getItem('number1');
  }
  if (localStorage.getItem('number2')) {
    document.getElementById('number2').value = localStorage.getItem('number2');
  }
  
  // Check if calculationType is stored in localStorage
  const storedCalculationType = localStorage.getItem('calculationType');
  if (storedCalculationType) {
    document.querySelector(`input[name="calculationType"][value="${storedCalculationType}"]`).checked = true;
  }
  
  function calculatePercentage() {
    // Get input values
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
  
    // Get calculation type
    const calculationType = document.querySelector('input[name="calculationType"]:checked').value;
  
    // Perform calculation
    let result;
    if (calculationType === 'gain') {
      result = ((number2 - number1) / number1) * 100;
    } else {
      result = ((number1 - number2) / number1) * 100;
    }
  
    // Display result
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)}%`;
  
    // Store values in localStorage
    localStorage.setItem('number1', number1);
    localStorage.setItem('number2', number2);
    localStorage.setItem('calculationType', calculationType);
  }
  
  function resetForm() {
    // Clear input values and result
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').innerText = '';
  
    // Clear localStorage
    localStorage.removeItem('number1');
    localStorage.removeItem('number2');
    localStorage.removeItem('calculationType');
  
    // Reset radio button to default
    document.querySelector('input[name="calculationType"][value="gain"]').checked = true;
  }