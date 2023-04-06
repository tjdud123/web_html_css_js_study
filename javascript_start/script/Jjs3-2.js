let day = new Array(6)
day[0] = '월 '
day[1] = '화 '
day[2] = '수 '
day[3] = '목 '
day[4] = '금 '
day[5] = '토 '
day[6] = '일 '

let weather = new Array(4)
weather[0] = '맑음' 
weather[1] = '비' 
weather[2] = '흐림' 
weather[3] = '눈' 


const result = document.querySelectorAll('.result')
const btn = document.querySelector('#answer_btn')

btn.addEventListener('click', function(){
    result[0].innerHTML = `${day[0]}요일 : ${weather[0]}`
    result[1].innerHTML = day[1]+weather[0]
    result[2].innerHTML = day[2]+weather[1]
    result[3].innerHTML = day[3]+weather[1]
    result[4].innerHTML = day[4]+weather[0]
    result[5].innerHTML = day[5]+weather[2]
    result[6].innerHTML = day[6]+weather[3]
})

