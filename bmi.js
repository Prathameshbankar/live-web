const form =document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height =parseInt(document.querySelector("#height").value)
    const weight =parseInt(document.querySelector("#weight").value)
    const result = document.querySelector('#results')

    if(height < 0 || isNaN(height) || height === ""){
        result.innerHTML = "enter the valid height";
    }
    else if(weight < 0 || isNaN(weight) || weight === ""){
        result.innerHTML = "enter the valid weight";
    }

    else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       if(bmi < 18.5){
        result.innerHTML = `<span>${bmi} underweight</span>`;
       }
       else if(bmi > 18 && bmi < 25){
        result.innerHTML = `<span>${bmi} healthy</span>`;

       }

       else{
        result.innerHTML = `<span>${bmi} overweight</span>`;
       }
       
    }
    

})

const clock = document.getElementById('clocks')

setInterval(function(){
    let date = new Date();
   console.log(clock.innerHTML = date.toLocaleTimeString());
},1000);