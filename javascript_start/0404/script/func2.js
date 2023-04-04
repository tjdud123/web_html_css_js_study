const btn = document.querySelector('.order')
const result = document.querySelector('#result')
let  bank = 10000000000000000
console.log(btn, result)

btn.addEventListener('click', withdraw)

function withdraw(){
    let money = window.prompt('얼마출금하시겠습니까?')
    money = Number(money) //let money_type = money.tolocalestring('ko-kr')
    console.log(typeof money)
    result.innerHTML = `출금 금액은 ${money.toLocaleString('ko-kr')} 원 입니다.`// result. innerhtml = `${money_type}
    let bank_total = bank - money
    result.innerHTML += ` 잔액은 ${bank_total.toLocaleString('ko-kr')}` //복합대입 
}





//withdraw()