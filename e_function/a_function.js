// 함수의 선언
// function 식볏자(매개변수,...){
//      실행할 문장
//      return 리턴값
// }
// 함수는 무조건 값으로 본다.

// function add(num1, num2) {
//     return num1 + num2;
// }

// // 함수는 무조건 값으로 본다.
// const plus = add;
// console.log(plus(1, 3));

// 디폴트 파라미터
// function add(number1, number2, number3 = 0) {
//     return number1 + number2 + number3;
// }

// let result = add(1, 2);
// console.log(result);

// 아이디, 비밀번호, 닉네임을 전달받는다.
// 이 때 닉네임의 기본값은 '없음'으로 설정한다.
function login(id, password, nickname = '없음'){
    console.log("아이디:", id);
    console.log("비밀번호:", password);
    console.log("닉네임:", nickname);
}

login("user123", "password123");
login("user123", "password123", "이지민");

