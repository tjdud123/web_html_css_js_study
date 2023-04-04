//배열, 객체
//배열 : 2개 이상의 값 저장소
//객체 : 2개 이상의 속성, 값 저장소
//배열vs객체 : 속성의 유무
//객체는 값의 의미있는 속성명이 함께 지정되기 때문에
//의미잇는 지정으로 대상을 쉽게 구분 가능하다.


let num = new Array(5,4,3)
console.log(num)
num[4] = 1
console.log(num)
//vs
let num2 = [1,2,3,4,5,6]
console.log(num2)
num2[20]='last'//배열은 처음에 값혹은 인덱스를 지정해 놓아도 값을 계속 추가할 수 있다
console.log(num2)


//--------------------------------
console.log('------------객체')
let study = {
    subject : ['html', 'css', 'js', 'jq', 'sass', 'git','photo', 'ill'],
    name : '홍길동',
    age:20,
    city:'인천',
    goals : '풀스텍',
    birthday:'1990-04-05'
}
//html css, js ,jq, sass, git, photoshop, illu
console.log(study)
console.log(study.subject)
console.log(study.birthday)
console.log(study.subject[2])
console.log(`내일 홍길동은 ${++study.age} 살이 됩니다! 생일 축하 해 주세요`)
console.log(`홍길동의 시험점수는 ${study.subject[0]}+${study.subject[1]} 70점, ${study.subject[2]} 60점입니다.`)
