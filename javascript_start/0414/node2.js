//노드 관계연습(형제)
//nestSibling, nextElementSibling
//previousSibling, previousElementSibling
const p = document.querySelectorAll('p')//4

console.log(p[0].nextSibling)//nextsibling은 공백까지 인식
console.log(p[0].nextSibling.nextSibling)
console.log(p[0].nextElementSibling)
console.log(p[0].nextElementSibling.nextElementSibling)

p[1].nextElementSibling.style.color ='red'
console.log(p[1].previousElementSibling)
console.log(p[2].previousElementSibling.previousElementSibling)

p[2].previousElementSibling.style.border = '1px dashed #000'

let clone1 = p[1].previousElementSibling.cloneNode(true)
console.log(clone1)

p[3].appendChild(clone1)