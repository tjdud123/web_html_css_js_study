const gnb = document.querySelectorAll('header nav .gnb>li')
/* const title = document.querySelectorAll('header nav .gnb>li>a') */
const sub = document.querySelectorAll('header nav .gnb li .sub ')
const bg1 = document.querySelector('header nav .bg')
console.log(gnb, sub)

/* for(let i of sub){
    i.style.display = 'none'
}  */
bg1.style.height = '0'
bg1.style.transition = 'height 0.3s'

for(let i of sub){
    i.style.height= '0';
    i.style.overflow= 'hidden'
    i.style.transition= 'height 0.3s'
}
for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        for(let i of sub){
        i.style.height='500px'}
        bg1.style.height = "600px"
    })
    i.addEventListener('mouseout',()=>{
        for(let i of sub){
        i.style.height='0'}
        bg1.style.height = '0'
    })
} 


