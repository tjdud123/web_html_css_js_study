function fun1(a){//1. 매게변수 a 생성
    console.log(a)//3. 값이 대입된 매개변수를 전달 후 출력
}
fun1(10)//2. a매개변수에 10값 대입

/* function fun2(b){
    console.log(b)
}
fun2('집에가고 싶어요')

function fun4(c){
    document.write(c+"에 가고싶어요")
}
fun4('집')
fun4('에버랜드') */


function fun2(a,b){
    console.log(a+b)
}
fun2(10,20)

console.log('-------------------')
/* function japangi(drink){
    console.log(`${drink}출력`)
}
japangi('콜라')
 */
function japangi(a,b){
    console.log(`${a} ${b}개 출력`)
}
japangi('콜라',2)
japangi('사이다',2)
japangi('사이다',2)

console.log('-------------------')
function dan99(num){
    /* console.log(`${num}x`) */
    result.innerHTML += `${num}X1=${num*1}<br>`
    result.innerHTML += `${num}X2=${num*2}<br>`
    result.innerHTML += `${num}X3=${num*3}<br>`
    result.innerHTML += `${num}X4=${num*4}<br>`
    result.innerHTML += `${num}X5=${num*5}<br>`
    result.innerHTML += `${num}X6=${num*6}<br>`
    result.innerHTML += `${num}X7=${num*7}<br>`
    result.innerHTML += `${num}X8=${num*8}<br>`
    result.innerHTML += `${num}X9=${num*9}<br>`
    //result.innerHTML = `${num}X2=${num*2}<br>`
/*     result.innerHTML += `${num}X2=${num*1}<br>`
    result.innerHTML += `${num}x3=${num*1}<br>`
    result.innerHTML += `${num}x4=${num*1}<br>`
    result.innerHTML += `${num}x5=${num*1}<br>`
    result.innerHTML += `${num}x6=${num*1}<br>`
    result.innerHTML += `${num}x7=${num*1}<br>`
    result.innerHTML += `${num}x8=${num*1}<br>`
    result.innerHTML += `${num}x9=${num*1}<br>`
} */
}
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)

console.log('---------------')
const cat = {
    name:'쿠키',
    birthday:'12/25',
    birth:function(a){
        return `${cat.name}야 ${cat.birthday}일 생일축하해!`
    }
}
console.log(cat)
console.log(cat.birth())
