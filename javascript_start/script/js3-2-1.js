const today = {
    weather:'맑음',
    rain:'20%',
    wind:'3.4m/s',
    hummit:'15%',
}

console.log(today)

const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')


console.log(btn, result)

btn[0].addEventListener('click', function(){
    result.innerHTML = today.weather
})
btn[1].addEventListener('click', function(){
    result.innerHTML = today.rain
})
btn[2].addEventListener('click', function(){
    result.innerHTML = today.wind
})
btn[3].addEventListener('click', function(){
    result.innerHTML = today.hummit
})


