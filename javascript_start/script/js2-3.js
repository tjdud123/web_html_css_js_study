//버튼 클릭 -> 프롬프트에 입금액 입력 -> 1번칸에 들어가고 -> 
//2번칸 이자는 무조건 100원-> 1번, 2번 더해서 3번 쇼잉

const asset = document.querySelector('#result')
const plus = document.querySelector('#result2')
const deposit = document.querySelector('#result1')
const btn = document.querySelector('#answer_btn')

btn.addEventListener('click',function(){
    let btn = window.prompt('입금을 원하는 금액을 입력하세요.')
    deposit.value = btn/* `${btn.value}` */
    plus.value = 100
    asset.value = `${Number(deposit.value)+Number(plus.value)}`
/*     let m1_num = Number(deposit.value)
    let m2_num = Number(plus.value) */
    let str_asset = Number(deposit.value) + Number(plus.value)
    asset.value = str_asset = str_asset.toLocaleString('ko-kr')
    console.log(this)
/*     asset = Num(m1_num) + Num(m2_num)
    let m1_num = Num(deposit.value)
    let m2_num = Num(plus.value) */
})



///--콘솔모음---
console.log(asset, plus, deposit, btn)