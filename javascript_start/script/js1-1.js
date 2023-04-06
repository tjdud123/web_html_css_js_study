//answer btn
const answer_btn = document.querySelector('#answer_btn')
//answer input
const answer_input = document.querySelector('#result')
//day 1
let day1= 10
//day 2
let day2 = 5
//day 3
let day3 = 8
//total
let total = day1+day2+day3

console.log(answer_btn)
console.log(answer_input)
console.log(total)

answer_input.value = `${total}장` // 템플릿 문자열

/* //요소.addEventListener(이벤트종류, 함수실행 및 호출);
answer_btn.addEventListener('click',function(){
    //이벤트 조건 만족시 실행 결과
    console.log('.')
})
answer_btn.addEventListener('click',function(){
    //이벤트 조건 만족시 실행 결과
    console.log(this)
}) */

answer_input.value = `정답은 ${total} 입니다. `
answer_btn.addEventListener('click',function(){
    console.log(this)
})