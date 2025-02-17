// script.js
function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const resultDiv = document.getElementById('result');

    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    if (isNaN(birthdate)) {
      resultDiv.textContent = "Please enter a valid date.";
      return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    resultDiv.textContent = `You are ${age} years old.`;
}

