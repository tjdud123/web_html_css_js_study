var box1 = 10
let box2 = 20
const box3 = 30
let box4 = 'hello javascript'
console.log(`box1 변수의 값은 = ${box1}`)
console.log(`box2 변수의 값은 = ${box2}`)
console.log(`box3 변수의 값은 = ${box3}`)

box1 = box1+1
console.log(box1)

/* 복합 대입 */
box1 +=1
box1 +=10
console.log(`box1 변수의 값 = ${box1}`)

/* 산술연산자 */
/*  box2의 값을 2로 나누었을 떄 나머지 값*/
box2 = box2%2
console.log(`box2 변수의 값 = ${box2}`)

/* const 상수를 변하게 시도할 떄 에러뜸 */
/* box2 = ++box3 */
console.log(`box2 qustn rkqt = ${box2}`)

/* 증감 연산자 */
/* ++가 앞에 있을 떄 는 정의 연산자 */
/* ++가 뒤에 있으르 떄는 후위 연산자 box1값만 바꾼다. */
box2 = box1++
console.log(`box2 변수 값 =${box2}`)
console.log(`box2=${box2}, box1=${box1}`)

console.log(box1.length)
console.log(box4.length)


/* ------------------------------- */
let array1 = ['aqua', 'lime', 'yellow']
let array2 = new Array('black', 'white', 'gray')
let array3 =  new Array(10)
array3[9] = 'black'
console.log(array1)
console.log(array1[0])
console.log(array2)
console.log(array3)
console.log(array3[9])

/* -----------예제----------- */
let array4 = [10,20,30,40,50]
let total
console.log(array4)
console.log(array4[0]+1)
console.log(array4[1]%2)//0
console.log(++array4[4])//51
console.log(array4[3]++)//40
total = array4[3]++
console.log(`total=${total}, array4[3]=${array4[3]}`)

