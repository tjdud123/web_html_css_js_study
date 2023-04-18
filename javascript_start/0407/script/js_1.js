//--------------2
let b =10
let c = 5
let total = b>c 
switch(total){
    case true:console.log('참'); break;
    case false:console.log('거짓'); break;
    default:console.log('잘못 된 접근입니다. ')
}

//------------------------------------------------3
/* let ddal = 1000
let suh = 5000
let oh = 2000
let fruite = ddal || suh || oh
fruite=window.prompt(`어떤과일을 드시고 싶으세용?`)

switch(fruite){
    case true :console.log(`${fruite}원`); break;
    case false : console.log('판매하지 않는 상품입니다.')
    default:console.log('판매하지 않는 상품입니다.')
}
 */

/* let order = '딸기'
switch(order){
    case '딸기':console.log('딸기는 1000원'); break;
    case '수박':console.log('수박은 1000원'); break;
    case '오렌지':console.log('오렌지 1000원'); break;
    default:console.log('판매하지 않는 상품입니다.')
}
 */

//-----------------------------------------------
/* let num1 = Number(prompt('원하는 숫자 1번'))
let num2 = Number(prompt('원하는 숫자 2번'))
let op = window.prompt('+, -, *, /, % 중 한개를 골라주세용')
let result =0

switch(op){
    case '+' : result=`${num1+num2}`;break;
    case '-' : result= `${num-num2}`;break;
    case '*': result=num1*num2;break;
    case '/':result=num1/num2;break;
    case '%':result=num%num2;break;
    default:result='잘못된 방법입니다.';
}
console.log(result) */

//-----------------------------------------------
let lucky = 7
let result = 0

/* if (lucky == 1){
    result = '냉장고'
}else if (lucky == 2){
    result = '세탁기'
}else if (lucky == 3){
    result =' tv'
}else(
    result='꽝'
)
console.log(result) */


switch(lucky){
    case 1:result = '냉장고';break;
    case 2:result = '세탁기';break;
    case 3:result = 'tv';break;
    default:result = '꽝'
}
console.log(result)