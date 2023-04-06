console.log('논리데이터연습--------------------------')
console.log(true)
console.log(false)
console.log(true+2) //논리데이터를 숫자데이터로 인식하면  true는 1
console.log(false+2)//false 는 0 이 나온다.
console.log(typeof true)//boolean 논리데이터
console.log(typeof false+1)//논리데이터는 무조건 논리데이터로 인식한다.

let bo = true+10
console.log(typeof bo)//number-> true + 10 한결과인 11일 이미 들어가있기때문
console.log(true+null)//1 null은 숫자 0으로 인식이 되어서 1이 뜬다
console.log(false+null) // 0

/* console.log('비교연산자--------------------')
let a = 10
let b = 20
let c = '20'
let d = 0
console.log(a,b,c)
console.log(a==b)//거짓
console.log(b===c)//ture
console.log(a!=b)
console.log(b!=c)
console.log(b!==c)
console.log(a>b)
console.log(a<=b)
console.log(!b) */// 값을 반전시킴 0보다 큰 숫자는 모두 false로 처리한다. 

console.log('---------------조건식')
/* 
if(날씨 == '비'){
    우산챙기기
}
if(날씨 != '맑음'){

}
if(점수 >= 60){자격증 합격}
if(점수 <= 60){재시험}
*/
/* let weather = ''
if(weather == '비'){
    window.alert('우산챙기기')
} */

let a = true
let b = false
let c = 10
let d = 20
if(a==true){
    /* a 는 참인가? */
}
if(c>10){
    /* c는 10보다 초과하는가? */
}
if(d<c){
    /* d는 c 보다 작은가 */
}