/* const h1 = document.getElementsByTagName('h1')
const h3 = document.getElementsByTagName('h3')
const p = document.getElementsByTagName('p')
const button = document.getElementsByTagName('button')
const main = document.getElementById('main')
const link = document.getElementById('link')
const sub_title = document.getElementsByClassName('sub_title')



console.log(h1[0])
console.log(h3[0])
console.log(p[0])
console.log(button[0])
console.log(main)
console.log(link)
console.log(sub_title[0]) */

//querySeletor es6 dom

const h1_tag = document.querySelector('h1')
const h2_cls = document.querySelectorAll('.sub_title')
const h3_tag = document.querySelector('h3')
/* const p_tag = docoument.querySelector('p')
 */
const p_id = document.querySelector('#main')
const button_tag = document.querySelector('button')
const a_id = document.querySelector('#link')
const box_h4 = document.querySelector('.box h4') 
console.log('.box_h4')

console.log(h1_tag)
console.log(h2_cls[0])
console.log(h2_cls[1])
console.log(h3_tag)
/* console.log(p_tag) */
console.log(p_id)
console.log(button_tag)
console.log(a_id)

//------객체.style.css속성 = '속성값'
/* const h1_after = document.querySelector('h1::after')
console.log(h1_after)
h1_after.sytle.backgroundColor = '#ff0' */