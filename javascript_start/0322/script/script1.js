const container = document.getElementById('container')
const item = document.getElementsByClassName('item')
console.log(container, item)
console.log(item[1].length)
console.log(typeof item[1])
console.log(typeof item[1].innerHTML)
console.log(item[1].innerHTML.length)
//객체.속성.속성..... 0
//객체.매서드().매서드() x
//객체.속성.속성.속성. 매서드()
//원시데이터(숫자) =  '1' vs 1 = x
/* let a = 10
let b ='20'
console.log(a+b) //숫자 + 문자는 = 문자d
console.log(a+c) //숫자 + 숫자 = 숫자 */
//--------------------------------
let num = window.prompt('좋아하는 숫자를 입력하세요.')//데이터 저장변수
let total = Number(num)//데이터변환변수
console.log(num,total)
console.log(typeof total)
//console.log(typeof num, typeof total)

//parseInt(val); //123 (정수)4444
//parseFloat(val); //123.456 (실수)
//Number(val); //123.456 (다)
