//1. 아이디 안적고 로그인 입력시 아이디를 입력하세요 나오게

const id = document.querySelector('#user_id')
const pw = document.querySelector('#user_pw')
const result = document.querySelector('#error_result')
const btn = document.querySelector('#login_btn')

console.log(id, pw, result, btn)

btn.addEventListener('click', function(){
    if(id == false){
        result.innerHTML = '아이디를 입력하세요'
    }else{
            result.innerHTML = '아이디를 입력하세요'
    }
})