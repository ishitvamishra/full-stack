const form = document.querySelector('form');
    //taking the value of height here is not  recommended because it will lead to bugs, 
    // as the value will be taken only once when the page is loaded, and if the user changes the value of height, 
    // it will not be updated in the variable height
    // const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e) {
    //default behaviour of form is to refresh the page when submitted, we will prevent that
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`;
    } else if(weight == '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.5){
            results.innerHTML = `Your BMI is ${bmi} and you are underweight`;
        } else if(bmi >= 18.5 && bmi < 25){
            results.innerHTML = `Your BMI is ${bmi} and you are normal weight`;
        } else if(bmi >= 25 && bmi < 30){
            results.innerHTML = `Your BMI is ${bmi} and you are overweight`;
        } else {
            results.innerHTML = `Your BMI is ${bmi} and you are obese`;
        }
    }
});