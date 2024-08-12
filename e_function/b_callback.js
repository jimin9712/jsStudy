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

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님 " 출력
const fullName = (lastName, firstName, callback) => {
    let result = lastName + firstName;

    if (callback) {
        callback(result);
    }
    return result;
};

const printFullName = (result) => {
    console.log(result + "님, 환영합니다!");
};

fullName("이", "지민", printFullName);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴

const productCount = (price, total, callback) => {
    const itemCount = total / price;
    const result = itemCount <= 5;

    if (callback) {
        callback(result);
    }

    return result;
};

const productCheck = (result) => {
    console.log(result ? true : false);
};
// 결제 완료일 때
productCount(1000, 4000, productCheck);
// 결제 실패일 때
productCount(1000, 6000, productCheck);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력

const checkPayment = (itemPrice, paymentStatus, callback) => {
    if (callback) {
        callback(itemPrice, paymentStatus);
    }
};

const handlePayment = (itemPrice, paymentStatus) => {
    if (paymentStatus) {
        console.log("결제 완료");
    } else {
        console.log("결제 취소");
    }
};

checkPayment(5000, true, handlePayment);
checkPayment(5000, false, handlePayment);
