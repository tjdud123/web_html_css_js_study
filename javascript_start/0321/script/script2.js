//객체지향 프로그래밍 언어 자바스크립트 기본순서
//객체 변수 선언 -> 변수 속성, 메소드 활용 결과 값
//객체 아이디 변수 선언
//*변수생성후에는 콘솔로 올바른 변수인지 반드시 체크한다. 
const title = document.getElementById('title')
console.log(title)
const contents = document.getElementById('contents')
console.log(contents)
const link = document.getElementById ('link')
console.log(link)


//변수 class dom
const first = document.getElementsByClassName('first')[0]
console.log(first)
// []는 복수인 클래스의 번호를 매겨줌 0부터 시작
const last = document.getElementsByClassName('last')[0]
console.log(last)


const fisrt = document.getElementsByClassName('first')[0]
/* const menu = document.getElementsByClassName('menu')
console.log(menu[3]) */
const a = document.getElementsByClassName('a')
console.log(a)
/* const menu = document.getElementsByClassName('menu')[0]
const menu1 = document.getElementsByClassName('menu')[1]
const menu2 = document.getElementsByClassName('menu')[2]
const menu3 = document.getElementsByClassName('menu')[3]
console.log(menu3) */
const menu = document.getElementsByClassName('menu')
console.log(menu[1])
//변수(태그 dom)
const li = document.getElementsByTagName('li')
console.log(li)
const ul = document.getElementsByTagName('ul')
console.log(ul)
console.log(ul[1])