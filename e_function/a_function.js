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
// 사용할 때는 뒤에서부터 채워넣어라
// function add(number1, number2, number3 = 0) {
//     return number1 + number2 + number3;
// }

// let result = add(1, 2);
// console.log(result);

// 아이디, 비밀번호, 닉네임을 전달받는다.
// 이 때 닉네임의 기본값은 '없음'으로 설정한다.
// JS는 '', "", `` 모두 문자열 값이다.

// function introduce(id, password, nickname = "없음") {
//     let result = "";

//     result += "아이디: " + id;
//     result += "\n비밀번호: " + password;
//     result += "\n닉네임: " + nickname;

//     return result;
// }

// let result = introduce("hds1234", "1234");
// console.log(result);

// 가변 인자
// function add(...numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// }

// let result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(result);

// 고객의 정보를 받아서 출력하는 함수
// 고객의 정보는 몇 개일지 알 수 없다.
// 단, 반드시 이름은 받아야 한다.

// function customer(name, ...info) {
//     let result = "";
//     result += "이름: " + name + "\n";
//     result += "정보: " + info;

//     return result;
// }

// let result = customer("이지민", "25살", " 남성", " 서울시 관악구 거주");
// console.log(result);


