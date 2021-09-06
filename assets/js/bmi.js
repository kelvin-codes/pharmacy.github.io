const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const yourBMI = document.querySelector("#yourBMI");

calculate.addEventListener("click", ()=>{
    //BMI = Body Mass Index
    //m = Mass means Weight (kg)
    //h = Height (cm)
    //Formula = B = m/h2

    if(height.value != "" && weight.value != ""){
        let bmiValue = weight.value / (height.value * height.value) * 10000;
        yourBMI.innerHTML = `Your BMI is : <span>${bmiValue.toFixed(2)}</span>`
    }
    else {
        yourBMI.innerHTML = `Please Enter Correct Value`;
    }
});