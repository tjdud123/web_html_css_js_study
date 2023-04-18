//노드생성,  제거
//DOM.createElement(노드생성)
//DOM.remove(노드제거)
//DOM.removeChild(자식노드)

const p = document.querySelectorAll('p')
const box = document.querySelector('#box')

p[2].remove()
box.removeChild(p[0])

let img = document.createElement('img')
img.alt = '연습이미지'
//img.src = './imges/rest.img'
console.log(img)

let pTag = document.createElement('p')
pTag.classList.add('a')
pTag.innerHTML = 'p태그 생성'
console.log(pTag)

box.appendChild(pTag)

let divTag = document.createElement('di')
divTag.classList.add('a')
divTag.innerHTML = 'wanna go home'
console.log(divTag)

box.appendChild(divTag)