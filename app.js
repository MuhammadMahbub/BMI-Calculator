 
// defien selector
const weightInput = document.querySelector("#weightInput");
const heightInput = document.querySelector("#heightInput");
const calculateBtn = document.querySelector("#calculateBtn");
const weight_error_message = document.querySelector("#weight_error_message");
const height_error_message = document.querySelector("#height_error_message");
const result = document.querySelector("#result");






 

calculateBtn.addEventListener('click', function(e) {
     e.preventDefault();
 

     // get input value
     let weight = parseInt(weightInput.value);
     let height = parseInt(heightInput.value);

     let bmi = (weight / ((height * height) / 10000)).toFixed(2)

     console.log(isNaN(weightInput.value))

     // weight validation
     if(weightInput.value === "" || isNaN(weightInput.value) ){
          weight_error_message.innerHTML = "Please enter valid weight";
     }
     else {
          weight_error_message.innerHTML = "";
     }

     // height validation
     if(heightInput.value === "" || isNaN(heightInput.value)) {
          height_error_message.innerHTML = "Please enter valid height";
     }
     else {
          height_error_message.innerHTML = ""
     }

     // BMI RESULT

     if(bmi < 18.6) {
          result.innerHTML = 'Under Weight : ' + bmi;
     }
     else if(bmi >= 18.6 && bmi < 24.9) {
          result.innerHTML = 'Normal : ' + bmi;
     }
     else {
          result.innerHTML = 'Over Weight : ' + bmi;
     }
 
     

})
 
 
 