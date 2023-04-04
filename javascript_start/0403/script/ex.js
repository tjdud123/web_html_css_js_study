//---------------------dom 변수
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const result = document.querySelector('#result')
console.log(btn1, btn2, btn3, result)

/* let qa = window.prompt('let과 const의 차이점을 서술하시오.') */
/* yes or no 로 묻고 싶을때 -> 논리데이터*/
let qa = window.confirm('let과 const의 차이점을 서술하시오.')

/*  이벤트 진행 */
//btn1.addEventListener('click', function(){
    /* console.log(this) *//* 현재대상을 출력하라! */
    //result.innerHTML = `let은 값이 변하는 변수<br> const는 값이 변하지 않는 상수.`

btn2.addEventListener('click', function(){
    qa = window.confirm('변수와 배열의 차이점을 서술하시오.')
    result.innerHTML = '변수ㅡㄴ 한가지 값을 배열은 두개 이상의 값을 담을 수 있는 데이터 저장소다.'
})
btn3.addEventListener('click', function(){
    qa = window.confirm('변수와 배열의 차이점을 서술하시오.')
    result.innerHTML = `변수의 값을 1씩 증가하는 증감연산자는 전위, 후위 위치에 따라 값을 대입 후
    증가할지, 증가하고 대입할지가 결정된다. `})