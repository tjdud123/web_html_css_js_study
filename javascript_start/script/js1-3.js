let chul = 10000
let chips = 2000
let ice = 1000
let total = chul-chips-ice
let total_replace = total.toLocaleString('ko-kr')

const answer_btn = document.querySelector('#answer_btn')
const result = document.querySelector('#result')

answer_btn.value=`${total_replace}원입니다.`

answer_btn.addEventListener = ('click',function(){
        console.log(this)
    }
)


console.log(answer_btn, result,)
console.log(answer_btn.value)
console.log(total_replace)