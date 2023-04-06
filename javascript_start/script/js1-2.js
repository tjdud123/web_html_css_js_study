let pocket = 1000000000
let street = 1000000000
let total = pocket+street
//객체, 매서드()
//객체. toLocalString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')
const answer_btn = document.querySelector('#answer_btn')
const result = document.querySelector('#result')



answer_btn.value = `${total_replace}원입니다.`
answer_btn.addEventListener('click',function(){
    console.log(this)
})


console.log(answer_btn)
console.log(result)
console.log(total_replace)