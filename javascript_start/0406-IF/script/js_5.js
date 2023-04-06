let userId = 'admin'
let userPw = '12345'

/* /* if(userId == 'admin' /* userPw == '12345' */
/*     if(userPw != 12345){
        console.log('비밀번호 오류')
    }else{
        console.log('로그인 성공')
    }
}else{
    console.log('아이디 오류')
} */  

//ver2
if(userId == 'admin' && userPw == '12345'){
    console.log('로그인성공')
}else{
    if(userId != 'admin'){
        console.log('아이디가 틀렸습니다.')
    }
    else{ console.log('비밀번호가 틀렸습니다.')}
}

//-----------------------------------------------
let value = "왼쪽"
if(value == '오른쪽' || value =='가운데' || value =='왼쪽'){
    console.log(`${value}를 누르셨군요!`)
}else{console.log(`확인 할 수 없습니다.`)}
