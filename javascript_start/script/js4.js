const btn = document.querySelector('#order')
const cup = document.querySelector('#number')
const result = document.querySelector('#result')
const reset = document.querySelector('#reset')
const price = 4700
let num = 0
let total = 0
console.log(btn,cup,price,reset,price)

function add(){
    if(num<10){
        num++
        total = price*num
        number.innerHTML = num
        result.innerHTML = total.toLocaleString('ko-kr')}
    else{
        window.alert('최대구매 수량입니다.')
    }
}
btn.addEventListener('click',add)

function cancel(){
    total=0
    num=0
    number.innerHTML = num
    result.innerHTML = total
}
reset.addEventListener('click',cancel)

