//nav>a[index]를 클릭하면
//main->s1 or else 

const header = document.querySelector('header')
const nav = document.querySelectorAll('header>nav>a')
const section = document.querySelectorAll('section')

console.log(header, nav, section)

header.style.transition = 'all 0.3s'
window.addEventListener('scroll',()=>{
    if(window.pageYOffset >= section[1].offsetTop -200){
        header.style.transform  = 'translateY(-100px)' 
    }
    else{
        header.style.transform = 'translateY(0)'
    }
    console.log(this)
})

nav.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault()//href 막기
        window.scrollTo(0,section[index].offsetTop)
    })
})