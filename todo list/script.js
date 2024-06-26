const input = document.getElementById('inputbox')

const list = document.getElementById('list')

function addme(){
    if(input.value === ''){
        alert("write some thing")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value
        list.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "&#x2715"
        li.appendChild(span)

        document.querySelector('#list').addEventListener('click', function(e){
            if(e.target.tagName =='SPAN'){
                let removeit = e.target.parentNode;
                removeit.remove()
            }
            
        })


    }
}