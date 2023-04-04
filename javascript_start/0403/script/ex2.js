const cat1 = {
    color:'black',
    age:1
}

/* 속성명은 의미있게 작성 */
const user = {
    id:['abcd', 'efg', 'hij'],
    pw:'12345'
}
console.log(cat1)
console.log(cat1.color)
console.log(cat1.age)

/* 객체 순서를 이요하고 싶을때는
const user = {
    id:['abcd', 'efg', 'hij'],
    pw:'12345'
} */
console.log(user.id[0])
console.log(user.pw)