const height = document.getElementsByClassName('height')
const weight = document.getElementsByClassName('weight')
const normal = document.getElementsByClassName('normal')
const weight2 = document.getElementsByClassName('weight2')


let userHeight = window.prompt('현재 키를 알려주세요')
console.log(`${userHeight}`)

let userWeight = window.prompt('현재 몸무게를 알려주세요.')
console.log(`${userWeight}`)

let normal_w = ((userHeight-100)*0.9)
console.log(normal_w)

let goal_w = (`${normal_w-userWeight}`)
console.log(goal_w)

height[0].innerHTML = userHeight
weight[0].innerHTML = userWeight
normal[0].innerHTML = normal_w
weight2[0].innerHTML = goal_w

consol.log(userHeight, userweight, normal_w, goal_w)


/* let useheight = window.prompt('ekdtlsdml zlsms?')
let userheight = window.promt('ekdfjskdfjkas?')
let normal_w = ((userHeight-100)*0.9)
let result = userWeight_normal_W */


//dom 객체 변수 생성하기
/* const span_height = document.getElementsByClassName  */