//  내 문제

// 1. 두 숫자의 합 계산하기
// 설명: 두 개의 수를 전달받아 그 합을 계산하는 함수를 작성하세요. 이 함수는 계산된 합을 callback 함수로 전달해 출력합니다.
// const calculateSum = (num1, num2, callback) => {
//     let sum = num1 + num2;
//     if (callback) {
//         callback(sum);
//         return;
//     }
//     return sum;
// };

// const printSum = (sum) => {
//     console.log("합계: " + sum);
// };

// calculateSum(5, 3, printSum);

// let result1 = calculateSum(5, 3);
// console.log(result1);

// // 2. 문자열 길이 계산하기
// // 설명: 문자열을 전달받아 그 길이를 계산하는 함수를 작성하세요. 이 함수는 계산된 길이를 callback 함수로 전달해 출력합니다.
// const calculateLength = (str, callback) => {
//     let length = str.length;
//     if (callback) {
//         callback(length);
//         return;
//     }
//     return length;
// };

// const printLength = (length) => {
//     console.log("문자열 길이: " + length);
// };

// calculateLength("안녕하세요", printLength);

// let result2 = calculateLength("안녕하세요");
// console.log(result2);

// // 3. 숫자 비교하기
// // 설명: 두 개의 수를 전달받아 첫 번째 수가 두 번째 수보다 큰지 여부를 확인하는 함수를 작성하세요. 이 함수는 결과를 callback 함수로 전달해 출력합니다.
// const isGreater = (num1, num2, callback) => {
//     let result = num1 > num2;
//     if (callback) {
//         callback(result);
//         return;
//     }
//     return result;
// };

// const printComparison = (result) => {
//     console.log("첫 번째 숫자가 더 큽니다: " + result);
// };

// isGreater(10, 5, printComparison);

// let result3 = isGreater(10, 5);
// console.log(result3);

// 주현님 문제

// 1. 세 정수의 덧셈을 구한 뒤 결과에 3을 곱해서 출력
// const sumAndMultiplyByThree = (num1, num2, num3, callback) => {
//     let sum = num1 + num2 + num3;
//     let result = sum * 3;
//     if (callback) {
//         callback(result);
//         return;
//     }
//     return result;
// };

// const printResult = (result) => {
//     console.log("결과: " + result);
// };

// sumAndMultiplyByThree(1, 2, 3, printResult);
// // 출력: 결과: 18

// let result1 = sumAndMultiplyByThree(1, 2, 3);
// // 출력: 18
// console.log(result1);

// // 2. 상품의 개수와 총 합을 입력받고 가격을 알아낸 뒤 가격이 5000원 이하라면
// // true 아니면 false 리턴
// const calculatePriceAndCheck = (quantity, totalAmount, callback) => {
//     let pricePerItem = totalAmount / quantity;
//     let isPriceBelowOrEqual5000 = pricePerItem <= 5000;
//     if (callback) {
//         callback(isPriceBelowOrEqual5000);
//         return;
//     }
//     return isPriceBelowOrEqual5000;
// };

// const printCheck = (result) => {
//     console.log("가격이 5000원 이하인가요?: " + result);
// };

// calculatePriceAndCheck(3, 12000, printCheck);

// let result2 = calculatePriceAndCheck(3, 12000);
// console.log(result2);

// // 3.1~10 중 숫자 1개를 전달받아서 숫자가 5보다 크면 크다, 5보다 작을경우 작다 출력
// const compareWithFive = (number, callback) => {
//     let comparisonResult = "";
//     if (number > 5) {
//         comparisonResult = "크다";
//     } else if (number < 5) {
//         comparisonResult = "작다";
//     } else {
//         comparisonResult = "같다";
//     }

//     if (callback) {
//         callback(comparisonResult);
//         return;
//     }
//     return comparisonResult;
// };

// const printComparisonResult = (result) => {
//     console.log("숫자는 5보다 " + result);
// };

// compareWithFive(7, printComparisonResult);

// let result3 = compareWithFive(3);
// console.log(result3);

// 승민님 문제

// 1.
// 방문자의 이름과 나이 정보를 받아서 나이가 20세 이상이라면 "000님은 성인입니다."
// 를 출력하고, 20세 미만이라면 "미성년자 출입제한"을 출력한다.
// const checkVisitorAge = (name, age) => {
//     if (age >= 20) {
//         console.log(`${name}님은 성인입니다.`);
//     } else {
//         console.log("미성년자 출입제한");
//     }
// };

// checkVisitorAge("이지민", 25);

// checkVisitorAge("용호중", 17);

// // 2.
// // 자동차 번호판 정보, 과속 단속구간 진입 시 속도(km/h)와 이탈 시 속도에 대한 정보를 받는다.
// // 자동차의 평균속도가 과속 단속 기준 속도에서 10(km/h) 초과했다면 번호판 정보와 "벌금 부과" 문구를 출력하고,
// // 초과하지 않았다면 "정상 주행" 문구를 출력한다. 단속 기준 속도는 100(km/h)이다.
function checkSpeed(licensePlate, entrySpeed, exitSpeed) {
    var averageSpeed = (entrySpeed + exitSpeed) / 2;
    var speedLimit = 100;

    if (averageSpeed > speedLimit + 10) {
        console.log(licensePlate + ": 벌금 부과");
    } else {
        console.log(licensePlate + ": 정상 주행");
    }
}

checkSpeed("123가 4567", 110, 120);

checkSpeed("234나 5678", 95, 100);

// // 3.
// // 학생의 이름과 국어, 영어, 수학 점수를 입력받는다.
// // 70점보다 낮은 과목이 하나라도 있을 경우에는 이름과 "낙제" 문구를 출력하고, 그렇지 않다면 이름과 평균점수를 출력한다.
// function checkStudentGrades(name, korean, english, math) {
//     var average = (korean + english + math) / 3;

//     if (korean < 70 || english < 70 || math < 70) {
//         console.log(name + ": 낙제");
//     } else {
//         console.log(name + ": 평균 점수 " + average);
//     }
// }

// checkStudentGrades("이지민", 85, 90, 95);

// checkStudentGrades("용호중", 60, 75, 80);

// 아영님 문제

// 1. 두 개의 숫자를 입력받아 차이를 구한 뒤, 그 차이가 5이상이면
// true를, 그렇지 않으면 false를 출력하세요
function checkDifference(num1, num2) {
    var difference = Math.abs(num1 - num2);

    if (difference >= 5) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkDifference(10, 4);
checkDifference(8, 5);

// 2. 문자열과 문자를 입력받아 해당 문자가 문자열에 포함되어있는지
// 확인하는 함수를 작성하세요
function checkCharacterInString(str, char) {
    if (str.includes(char)) {
        console.log("포함되어 있습니다.");
    } else {
        console.log("포함되어 있지 않습니다.");
    }
}

checkCharacterInString("hello world", "o");
checkCharacterInString("hello world", "x");

// 3.숫자를 하나를 받아 짝수인지 홀수인지 검사 후  결과 출력
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }
}

checkEvenOrOdd(4);
checkEvenOrOdd(7);
