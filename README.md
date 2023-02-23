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
  <hr>
  /* css 주석 */
        /* 1. html 태그 꾸미는 대상 확인 */
        /* 2. 위 태그가 가족관계에 속해있는지 확인 (가족관계 중 body, html 태그는 생략 가능) */
        /*  .뒤에는 공백없이 바로 적어야 함. 구분이 필요 없으면(딱히 적용해야할 특정적인 부분이 없다면) .으로 바로 시작ㅏ/*/
        /* block : 기본 w 100% 줄바꿈 크기를 가질 수 있다.
        inline : 내용크기만큼 너비 인식, 줄바꿈x  크기x*/
        /* 꺽쇠는 중복이 있을 경우에 대부분은 공백으로 진행가능 */
        /* 인접형제선택자 */
        .test_box #title2+p {border:2px solid black}
        .test_box h2+h3 {border:2px solid black}
        h1 {background-color:yellow}
        .test_box {background-color: aqua;}
        .test_box > h1 {background-color:pink}
        .test_box > h2 {background-color:blue}
        .test_box > h3 {background-color:violet}
        .test_box > h4 {background-color:coral}
        .test_box > #title1 {background-color: greenyellow;}
        .test_box > #title2 {background-color: hotpink;}
        .test_box > p {background-color:darkred;}
        .test_box > blockquote {background-color: cornflowerblue;}
        .test_box > p > span {background-color: yellow;}
        .test_box p span {background-color: limegreen;}
        .test_box p q {background-color:forestgreen;}
        .test_box p code {background-color: blue;}
        .test_box p sup {background-color: blue;}
        .test_box p sub {background-color: blue;}
        .test_box div.test1 {background-color: blue;}
        .test_box div.test2 {background-color: blue;}
        .test_box .test1 {}
        .test_box .test2 {}
        .test_box .test {border:2px solid red;}
        .test_box .test3 {background-color: yellow;}
        .test_box .test4 {background-color: beige;}
        .test_box #wrap {background-color: brown;}
        .test_box #wrap p {background-color: white;}
        /* ver1---------------------------------------- */
        header {border:2px solid black;}
        header h1 {border:2px solid black;}
        header form {background-color: green;}
        header form input {background-color: black;}
        header a {background-color: black;}
        /* ver2---------------------------------------- */
        .box {background-color: aqua;}
        .box a {background-color: white;}
        .box a span {background-color: black;}
        .box .contents {border:2px solid black;}
        .box .contents p {background-color: white;}
        .box .img {background-color: black;}
        .box .img img {background-color: aqua;}
        /* ver3-------------------------------------- */
        main {background-color: beige;}
        main aside {background-color: aqua;}
        main aside h2 {ackground-color: white;}
        main aside h2 ul {background-color: black;}
        main aside h2 ul li {background-color: black;}
        main aside h2 ul li a {background-color: black;}
        main aside h2 ul .last {border:2px solid black;}
        main section {border:2px solid black}
        main section .top {background-color: aqua;}
        main section .top h1 {background-color: white;}
        main section .top p {background-color: yellowgreen;}
        main section article {background-color: darkblue}
        main section article p {background-color:blueviolet}
        /* ver4---------------------------------------- */
        #t {border:2px solid black;}
        #t thead {border:2px solid black;}
        #t thead tr {border:2px solid black;}
        #t thead tr th {border:2px solid black;}
        #t tbody {border:2px solid black;}
        #t tbody tr {border:2px solid black;}
        #t tbody tr td {border:2px solid black;}
        #t tbody tr td span {border:2px solid black;}
        #t tfoot {border:2px solid black;}
        #t tfoot tr {border:2px solid black;}
        #t tfoot tr th {border:2px solid black;}
        #t tfoot tr td {border:2px solid black;}
        #t tfoot tr td em{border:2px solid black;}
        /* --------------------------- 그룹선택자 */
        .test_box p sup,
        .test_box p sub {border:2px solid black;}
        #t thead tr th, #t tfoot tr th {background-color: red;}
        /* ------------------------형제선택자 */
        .test_box #title2~P {border: 10PX solid black;}
</body>

</html>
    
