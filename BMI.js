
const calculateBtn = document.getElementById("calculateBtn");
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value) / 100; // convert cm to m

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.innerHTML = 'Error: Both weight and height inputs should be numbers';
    }
    else {
        const bmi = weight / (height * height);
        result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    }
});