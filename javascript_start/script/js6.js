//가상으로 사용자의 보유포인트를 최소 100원 이상 가지고 있다 생각하고 보유포인트 설정
//전액사용버튼을 클릭하면
//사용칸에 보유한 모든 포인트입력되게
//보유는 0원으로

const mapoint = document.querySelector('#user_point')
const use_poing = document.querySelector('#use_point')
const reset = document.querySelector('#point_reset')
const btn = document.querySelector('#point_all_btn')

mapoint.value = 200000
reset.style.display = 'none'

console.log(use_poing, reset, btn)
console.log(user_point)

function reset_display(){
    if(use_poing.value>= 1){
        reset.style.display = 'inline-block'
    }else{
        reset.style.display = 'none'
    }
}

function wannaUse (){
    mapoint.value =0
    use_poing.value=200000
    reset_display()
}
btn.addEventListener('click', wannaUse)

function cancel (){
    mapoint.value =200000
    use_poing.value=0
    
}
reset.addEventListener('click', cancel)


