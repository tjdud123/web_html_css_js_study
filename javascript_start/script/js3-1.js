//이미 아이디 비밀번호는 있음
//아이디 비밀번호 확인을 누르면 id, pw에 기입되어야함

let userId = new Array (9)
userId[0] = 'syyoon4'

let userPw = new Array (9)
userPw[0] = '123456789'

/* let userId = ['a', 'b', 'c', 'd']
let userPw = ['1', '2', '3', '4'] */

const btn = document.querySelector('#answer_btn')
const id_pw = document.querySelectorAll('.result')

btn.addEventListener('click', function(){
    id_pw[0].innerHTML = userId[0]
})
btn.addEventListener('click', function(){
    id_pw[1].innerHTML = userPw[0]})


console.log(id_pw[0], id_pw[1])
console.log(btn)

