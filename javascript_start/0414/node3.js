//자식 노드
//nth-child(n) first-child last-cild
const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.firstChild) //공백포함
console.log(box.firstElementChild) //요소 인식
console.log(box.lastChild)
console.log(box.lastElementChild)

console.log('-------------------------')

box.firstElementChild.style.border = '2px dashed #fff'
box.lastElementChild.style.borderRadius = '10px'
box.lastElementChild.classList.add('a')// id가 class보다 우선순위가 높아서
//동일하게 적용된css는 id가 먼저 잡힘

let clone1 = box.lastElementChild.cloneNode(true)
console.log(clone1)
let clone2 = box.firstChild.cloneNode(true)
console.log(clone2)

result.appendChild(clone1)
//DOM.insertBefore(복제대상, 기준위치)
result.insertBefore(clone1, result.firstChild)
result.appendChild(clone2)
result.insertBefore(clone2, result.secondChild)