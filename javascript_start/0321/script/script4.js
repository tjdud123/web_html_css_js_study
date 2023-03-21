const more = document.getElementsByClassName ('more')
const img = document.getElementsByTagName('img')
const plus = document.getElementsByClassName ('plus')
const join_btn = document.getElementById ('join_btn')
const li = document.getElementsByTagName('li')


//console
console.log(more/* [0] */)
console.log(img[0])
console.log(plus[0])
console.log(plus[1])
console.log(join_btn)
console.log(li[0])
console.log(li[1])
console.log(li[2])
console.log(li[3])
console.log(li[4])


//innerhtml
join_btn.innerHTML = 'join'
li[0].innerHTML = "list4"

//---------style 속성
//객체.속성
//style == css
//속성종류 => font-size color .......
//객체.style.속성 = 값

more[0].style.color = 'red'
li[0].style.backgroundColor = "#AAA"
li[1].style.backgroundColor = "#BBB"
li[2].style.backgroundColor = "#CCC"
li[3].style.backgroundColor = "#DDD"
li[4].style.backgroundColor = "#EEE"