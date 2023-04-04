let study = ['html', 'css', 'js', 'jq', 'sass', 'git']
let device = ['desktop', 'tablet', 'mobile', 'tv']
let weather = ['맑음', '비','눈','흐림','태풍' ]
let num = 0
console.log(study, device, weather)

//매소드 = 머라하셨지...?

console.log(Array.isArray(study))
console.log(Array.isArray(device))
console.log(Array.isArray(num))

//변수.pop 의 리턴=>반환한다.
//arr.pop() =>마지막 값 제거
//1 -> 제거된 값

/* console.log(study.pop()) //-==>git 사라짐
console.log(study) */

//변수 .shift => 첫번쨰 값 변환

console.log(study.shift())
console.log(study)

//변수.unshift(원본데이터 앞에 추가)
study.unshift('html')
console.log(study)


//변수.push (원본데이터 추가)
study.pop()
console.log(study)
study.push('github')
console.log(study)

//변수.concat => 결합데이터 원본배열이 변경되지 않음
//study.concat(device)
console.log(study)

//변수.concat을 원본배열에 반영하고 싶다면?

/* console.log(stydy.concat(device)) */
console.log(device.concat(study))

//===>비회원주문(회원정보에 영향 없이 주문을 할 때 concat을 사용)

//변수.reverse => 베열 순서 반전, 변경 해줌 (날짜별로 정렬 등)
study.reverse()
console.log(study)

//변수.sort => 숫자 밎 알파벳 순으로 변경

console.log(weather.slice(0,2))
console.log(weather.slice(1,3))
console.log(weather.slice(0,-1))
console.log(weather.slice(0)) //종료 인덱스를 안적으면 적은 숫자 기준으로 적은 숫자 포함해서 다나와용! 말도안되게 999적어도 다나와용!
console.log(weather.slice(2))
console.log(weather.slice(-1))


console.log('=------------------')
weather.splice(0,2) //0부터 2개를 제거한다.
weather.splice(0,2, 'sunny') //0부터 2개를 제거한다.
console.log(weather)

let yoil = ['월', '화','수', '목', '금', '토', '일']
console.log(yoil)

// 여러개 있는 문자열의 배열을 변경할떄

console.log(yoil.join('요일 ')) // 사이사이에 들어가서 맨 마지막에는 들어가지 않음
console.log(yoil.join('/'))


