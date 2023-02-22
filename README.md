# web_html_css_js_study
반응형 웹디자인 &amp; 웹퍼블리셔 양성과정 버전기록

<!DOCTYPE html>
<html lang="kr">
<head>
  <meta charset="UTF-8" content="">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <title></title>
</head>
<body>
  <h1>html 복습<h1>
  <hr>
  <h2>form tag</h2>
   <ul>
    <li>기본작성 방식<br><span> &ltform action="#" method="post or get"&gt&lt/form&gt</span></li>
    <ll>입력된 정보를 제출하는 최종 주소(url)은 action</li>
    <li>method는 정보를 전달하는1방법을 적는 칸.</li>
    <li>method에 적을수 있는 get은 보안이 안되는 사이트</i>
    <li>method에 적을 수 있는 post는 보안이 덜 된 사이트</li>
  </ul>
  <h2>form을 그룹짓는 fieldset</h2>
    <ul>
      <li>
</body>
<hr>
</head>
<body>
    <h1>RIDIBOOKS</h1>
    <div>
        <form>
            <fieldset>
                <legend>로그인양식</legend>
                <ul>
                    <li>
                        <input type="text" name="id" placeholder="아이디">
                    </li>
                    <li>
                        <input type="password" name="pw" placeholder="비밀번호">
                    </li>
                    <li>
                        <input type="radio" name="login" value="" id="box">
                        <label for="box">로그인 상태 유지</label>
                    </li>
                    <li><a href="#"">아이디찾기</a></li>
                    <li><a href="#">비밀번호 재설정</a></li>
                </ul>
            </fieldset>
            <div>
                <button type="submit">로그인</button>
                <button type="submit">회원가입</button>
            </div>
        </form>
    </div>
</body>
</html>
    
