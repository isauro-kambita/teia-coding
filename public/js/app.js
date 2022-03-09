const form = document.querySelector('form')
const errorText = document.querySelector('.error_msg')
const search = document.querySelector('#search')
const total = document.querySelector('.total')
const message = document.querySelector('.msg')
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    errorText.textContent = 'Loading...'
    list.replaceChildren()

    if(search.value === ''){
        total.textContent = ''
        message.textContent = ''
        return errorText.textContent = 'Oooops! You cannot make a request an empty string.'
    }

    fetch('http://localhost:8080/api/v1/'+search.value).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            errorText.textContent = ''
            errorText.textContent = 'An error ocurred.'
        }

        search.value = ''
        var sum = 0.0
        
        for(let i = 0; i < data.length; i++){
            list.innerHTML += '<li id='+data[i].employee.position+'>'+data[i].numPayment+' '+data[i].employee.name+' is '+data[i].employee.position+' and earns $'+data[i].employee.salary+'</li>'
            sum += data[i].employee.salary
        }
        total.textContent = 'The total salary is: $'+sum
        message.textContent = 'Bellow is the list of employees in our database'
        errorText.textContent = ''
        })
    }).catch((error)=>{
        error.textContent = 'An error ocurred.'
    })
})

