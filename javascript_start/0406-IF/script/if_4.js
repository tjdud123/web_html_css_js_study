let id = 'admin'
let pw = '1234'
if(id == 'admin' || pw == '1234'){
    console.log('관리자 로그인 성공')
}else(
    console.log('로그인 실패')
)

//-----------1~20 사이 숫자를 입력받고 해당 숫자가 10보다 작다면 ' 10 이하입니다', 아니라면 '11이상입니다'를 출력하세요
let num = Number(window.prompt('숫자를 입력하세요.'))

if(num <= 10 && num > 0 ){
    console.log('10 이하입니다.')
}else{
    console.log('10 이상입니다.')
} 


//-----------------------------
/* let a = 11
if(a>10){
    console.log('a>10')
}else if(a == 10){
    console.log('a==10')// else if 는 처음 if 조건이 거짓이어야만 발동됨단
}else if(a<9){
    console.log('a<9')
}
console.log('if종료')
console.log('------------------------')
let number = 1
if(number > 0 && number <21){
    if(number < 11){console.log('10이하')}
    console.log('1단 if 종료 위치')
}else{console.log('error')}
console.log('if종료') */
//--------------------------

let a = 200
if( a>100){
    console.log(a==)
}