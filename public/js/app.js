const form = document.querySelector('form')
const errorText = document.querySelector('.error_msg')
const search = document.querySelector('#search')
const total = document.querySelector('.total')
const message = document.querySelector('.msg')
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    errorText.textContent = 'Processando...'

    if(search.value === ''){
        total.textContent = ''
        message.textContent = ''
        return errorText.textContent = 'Oooops! Não fazer uma pesquisa sem fornecer texto.'
    }

    fetch('http://api.weatherapi.com/v1/current.json?key=2108f3a910474fb89f3191838220203&q='+search.value+'&lang=pt').then((response)=>{
    response.json().then((data)=>{
        errorText.textContent = ''
        if(data.error){
            errorText.textContent = ''
            errorText.textContent = 'Ocorreu um erro.'
        }

        message.textContent = `${data.location.name}/${data.location.region} em ${data.location.country}, ${data.current.condition.text} e ${data.current.humidity}% chance de chuva.`
        errorText.textContent = ''
        total.textContent = `Actualização: ${data.current.last_updated}`
        })
    }).catch((error)=>{
        error.textContent = 'Ocorreu um erro.'
    })
})

