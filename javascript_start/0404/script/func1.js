const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order, result)
//japangi()//함수 호출
order.addEventListener('click', japangi)
//함수 기본 문법
//function 함수명() {실행재사용문법}
function japangi() {
    let menu = window.prompt('주문하시겠습니까?')
    result.innerHTML = `주문하신 ${menu} 나왔습니다.`
}

//함수는 작성과 호출이 별개이다. 작성해도 호출 하지 않으면 실행 되지 않는다. 대신 무한정 실행 할 수 있다. 
