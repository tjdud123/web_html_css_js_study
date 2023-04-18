//반복문✨✨✨✨
/* 
for (초기갑; 조건식; 증감식){
    조건식이 참일 때 반복실행구문
}
*/
//for의 초기변수명 : i(basic,can use at the first) , j, m,n
/* for(let i=0; i<10; i++){
    console.log(`javascript${i}`)
} */

//if u wanna see 1 as the first
/* for(let i=0; i<10; i++){
    console.log(`javascript${j+1}`)
}

for(let i=0; i<4; i++){
    console.log(`day${i+1}`)
}
 */
//for usually start with number 0 cause when we connect with DOM//// DOM start with index 0

/* let a = ['html', 'css', 'javascript']
for(let i = 0; i < 3; i++){
    console.log(a[i])
} */

/* let coffee = ['아메리카노','카페라뗴', '카푸치노', '에스프레소', '돌체라뗴']
for(let i = 0; i<5; i++){
    console.log(`${i+1}번메뉴 ${coffee[i]}`)
} */
console.log('----------------------')
//역순출력
let coffee = ['아메리카노','카페라뗴', '카푸치노', '에스프레소', '돌체라뗴']
for(let i = 4; i>=0; i--){
    console.log(`${i+1}번메뉴 ${coffee[i]}`)
}

//-----------------------
let fruite = new Array('apple','peach','orange','lemon','straw','tan','mango')
console.log(fruite.length)
for(let i = 0; i <fruite.length; i++){
    console.log(`${fruite[i]}`)
}
for(let i = fruite.length-1; i >=0; i--){
    console.log(`${fruite[i]}`)
}

//반복문 + 조건문
//반복 {조건}

for(let i=1; i<21; i++){
    if(i%2){
        console.log(i)
    }
}
console.log('-------------------------')
for(let i=5; i<16; i++){
    if(i%2 == false ){
        console.log(i)
    }
}

console.log('---------------------------')
for(let i=10; i>0; i--){
    if(i%2){
        console.log(i)
    }
}

console.log('----------------------------')
for(let i=20; i>9; i--){
    if(i%2 == false){
        console.log(i)
    }
}

//반복문 이용 총 합 구하기
console.log('------------------')
let data = [10,20,30,40,50]
let result = 0
for(let i= 0; i< data.length; i++ ){
    result += data[i]
}
console.log(`data 변수의 총 합은 ${result}입니다.`)

console.log('--------------------')
for(let i=1; i<11; i++){
    if(i%2){
        document.write(`<p class="bg1">${i}</p>`) //스크립트를 통해서 만든 태그
    }
    else{document.write(`<p class="bg2">${i}</p>`)}
}

