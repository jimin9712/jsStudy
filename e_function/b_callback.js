// function printName(name) {
//     console.log(name);
// }

// arrow expression
// 함수 선언 시, 이름이 없는 익명 함수 선언 방법

// const printName = (name) => {
//     console.log(name);
// };

// printName("이지민");

// => const printName = "이지민"; 이거랑 같다고 볼 수 있어야 한다.

// 첫 번째, 두 번째 매개변수는 값이지만, 세 번째에 작성된 callback에는 함수가 들어온다.
// const add = (number1, number2, callback) => {
//     // 만약 callback에 아무것도 전달되지 않았다면, undefined이다.
//     // 이는 조건식 자리에 작성할 경우 false를 의미한다.
//     if (callback) {
//         // 만약 callback 함수가 전달되었다면,
//         // 전달받은 callback 함수를 사용한다.
//         // 단, 전달한 함수의 매개변수 구조를 알아야 사용할 수 있다.
//         callback(number1 + number2);
//     }
//     // 만약 callback에 함수를 전달받지 않았다면, 두 정수의 결과를 리턴한다.
//     return number1 + number2;
// };

// // 출력하지 않고 6 리턴
// let total = add(1, 5);

// // 출력하고 6 리턴
// total = add(1, 5, (result) => {
//     console.log(result);
// });

// 1. 두 정수의 곱셈을 구한 뒤
// const multiple = (number1, number2, callback) => {
//     let result = number1 * number2;

//     if (callback) {
//         callback(result);
//     }

//     return result;
// };
// // 2. 결과에 2를 곱해서 출력
// const printResult = (result) => {
//     console.log(result * 2);
// };

// multiple(3, 5, printResult);

// 모듈화의 핵심 -> 함수 하나당 하나의 목적

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력
// const makeFullName = (firstName, lastName, callback) => {
//     let fullName = lastName + firstName;
//     if (callback) {
//         callback(fullName);
//         return;
//     }
//     return fullName;
// };

// const printFullName = (fullName) => {
//     console.log(fullName + "님");
// };

// makeFullName("동석", "한", printFullName);
// let result = makeFullName("동석", "한");
// console.log(result);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const getCount = (price, total, callback) => {
//     let count = price / total;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// const checkLessEqaulThan5 = (count) => {
//     return count <= 5;
// };

// let check = getCount(140000, 70000, checkLessEqaulThan5);
// console.log(check);

// let count = getCount(140000, 70000);
// console.log(count);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// const setStatus = (price, status, callback) => {
//     if (callback) {
//         callback(status ? price + "원 결제 완료" : price + "원 결제 취소");
//     }
// };

// setStatus(3000, true, console.log);

// 템플릿 문법
// let price = 1000;
// console.log(`${price}원`);
// let status = true;
// status ? `${price}원 결제 완료` : `${price}원 결제 취소`;

// 사용자 환영 메시지 출력
// 사용자의 이름과 역할을 전달받아서 전체 메시지를 만든 뒤 callback 함수로 그 메시지를 출력하세요.
// callback 함수가 없으면 기본적으로 "반갑습니다, [이름]님!" 형태의 메시지를 반환하세요.
const makeWelcomeMessage = (name, role, callback) => {
    let message = role + " " + name + "님, 반갑습니다!";
    if (callback) {
        callback(message);
        return;
    }
    return "반갑습니다, " + name + "님!";
};

const printWelcomeMessage = (message) => {
    console.log(message);
};

makeWelcomeMessage("지민", "학생", printWelcomeMessage);
let result1 = makeWelcomeMessage("지민");
console.log(result1);

// 문제 3개 만들어서 팀원에게 공유

// 문제 1: 두 숫자의 합 계산
// 설명: 두 개의 숫자를 전달받아 그 합을 계산하는 함수를 작성하세요. 이 함수는 계산된 합을 callback 함수로 전달해 출력합니다.

// 문제 2: 문자열 길이 계산
// 설명: 문자열을 전달받아 그 길이를 계산하는 함수를 작성하세요. 이 함수는 계산된 길이를 callback 함수로 전달해 출력합니다.

// 문제 3: 숫자 비교
// 설명: 두 개의 숫자를 전달받아 첫 번째 숫자가 두 번째 숫자보다 큰지 여부를 확인하는 함수를 작성하세요. 이 함수는 결과를 callback 함수로 전달해 출력합니다.
