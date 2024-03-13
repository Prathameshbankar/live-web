const button =document.querySelectorAll(".buttons")
const body = document.querySelector('body')
const div = document.querySelector('container')


button.forEach(function(button){
    button.addEventListener('click', function(btn){
        if(btn.target.id =="grey"){
            body.style.backgroundColor = btn.target.id
        }
        if(btn.target.id =="yellow"){
            body.style.backgroundColor = btn.target.id
        }
        if(btn.target.id =="black"){
            body.style.backgroundColor = btn.target.id
            button.style.border ='2px solid white';
           
        }
        if(btn.target.id =="grey"){
            body.style.backgroundColor = btn.target.id
        }
        if(btn.target.id =="orange"){
            body.style.backgroundColor = btn.target.id
        }
    })
})