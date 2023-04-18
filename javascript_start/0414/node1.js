// 노드 관계 속성
/* 
dom.parentnode => parents
dom.parentnode.parentnode => grand parent

-------------dom 부모 기준 연습 clonenode()=> method라 () 뒤에 붙음
*/
const p = document.querySelectorAll('p') //body에 있는 모든 p 인식
console.log(p[0])
console.log(p[3])
//const p = document.querySelectorAll('#box p') //box에 있는 모든 p 인식
//객체.속성.속성 = 값
p[0].parentNode.style.background = 'lime' // 첫번쨰 p의 부모의 백그라운드 css 를 lime 색으로 바꾼다
p[1].parentNode.parentNode.style.border = '5px solid #000'
//노트복제(복제 -> 반복사용 위치 붙여넣기)
console.log(p[2].parentNode.cloneNode())//대상만 복제
console.log(p[2].parentNode.cloneNode(true))//대상의 자식, 자손 복제
console.log(p[0].parentNode.parentNode.cloneNode())
console.log(p[0].parentNode.parentNode.cloneNode(true))

let clone1 = p[0].parentNode.cloneNode(true)
console.log(clone1)// 원본x 복제본 0 (원본에 영향을 주지 않음)

p[3].appendChild(clone1)//마지막 자식위치에 만드시오
p[2].appendChild(clone2)

/* 
객체. 속성
객체. 속성 . 함수()
DOM. parentNode 부모
DOM. parentNode. parentNode 부모의 부모
DOM. parentNode. cloneNode() 부모만 복제
DOM. parentNode. cloneNode(true) 부모 복제 (자식, 자손 포함0)
DOM. appendChild(삽입노드) 마지막 자식 위치에 노드삽입
*/


