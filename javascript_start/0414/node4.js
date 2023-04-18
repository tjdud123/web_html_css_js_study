//자식 노드
//childnodes, children, [index]
const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.childNodes)// 공백포함 자식들
console.log(box.children)//요소만 인식
console.log(box.children[1])

box.children[0].classList.add('b')
box.children[1].classList.add('c')

let clone1 = box.children[3].cloneNode(true)
result.insertBefore(clone1, result.firstChild)