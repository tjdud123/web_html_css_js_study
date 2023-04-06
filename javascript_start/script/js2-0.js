//버튼 클릭 - 인증문자르르 확인하세요 프롬프트 (인증번호 넣기)- 
//결과가 인증문자 확인으로 들어가고 - 인증데이터 타입확인

const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const button = document.querySelector('button')
/* const button = document.querySelector('button') */

button.addEventListener('click',function(){
    let button = window.prompt('인증번호를 확인 하세요.','인증번호')
    result2.value = button
    result1.value = typeof button
    console.log(this)
})

/* button.addEventListener('click',function(){
    let num = window.prompt('인증번호를 확인 하세요.','인증번호')
    result2.value = num
    result1.value = typeof num
    console.log(this)
}) */