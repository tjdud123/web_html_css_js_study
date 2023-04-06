/* const btn = document.querySelector('#answer_btn')
const income = document.querySelector('#result1')
const bonuse = document.querySelector('#result2')
const monthly = document.querySelector('#result')

btn.addEventListener('click',function(){
    let.monthly=Number(income)+Number(bonuse)
    console.log(this)
})


console.log(btn)
console.log(income)
console.log(bonuse)
console.log(monthly) */



const money1 = document.querySelector('#result1')
const money2 = document.querySelector('#result2')
const total = document.querySelector('#result')
const answer_btn = document.querySelector('#answer_btn')
console.log(money1, money2, total, answer_btn)


answer_btn.addEventListener('click',function(){
    /* console.log(money1.value, money2.value)//추적값 확인
    console.log(money1.value+money2.value) *///더하기 결과 확인(오류)
    //문자+문자=문자 1+1=11
    console.log(typeof money1.value)
    console.log(typeof Number(money1.value))//number 형변화 메서드 활용
    total.value = Number(money1.value) + Number(money2.value)
    let m1_num = Number(money1.value)
    let m2_num = Number(money2.value)
    //숫자 콤마
    let str_total = m1_num + m2_num
    total.value = str_total.toLocaleString('ko-kr')
    total.value = m1_num + m2_num
})