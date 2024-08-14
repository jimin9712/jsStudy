// Array 객체
// let datas = [10, 4, 20, 3, 2];

// push(): 가장 마지막에 값 추가
// datas.push(3);
// console.log(datas);

// join(): 전달한 값으로 구분한 뒤 문자열로 연결되어서 리턴
// console.log(datas.join(","));

// slice(begin, end): 원하는 부분을 추출하기 위해
// 시작 인덱스와 마지막 인덱스를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다
// console.log(datas.slice(1, 3));
// console.log(datas.slice(1));

// splice(index, count): 삭제
// console.log(datas.splice(1, 1));
// console.log(datas);

// splice(index, count, ...args): 교체
// console.log(datas.splice(1, 1, 200));
// console.log(datas);

// pop(): 마지막 요소 삭제
// const dataRemoved = datas.pop();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// shift(): 첫 번째 요소 삭제
// const dataRemoved = datas.shift();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// indexOf(value): value를 해당 Array객체에서 찾은 뒤 인덱스 번호 리턴.
// 못찾으면 -1 리턴
// const i = datas.indexOf(489);
// console.log(i);

// let datas = [10, 4, 20, 3, 2];
// const numbers = [...datas];
// console.log(numbers);

// const [number1, number2] = datas;
// console.log(number1, number2);

// let datas = new Array(5).fill(0);
// console.log(datas);

// fill(value): Array 객체의 모든 칸에 value로 초기화
// let datas = new Array(5).fill(0);

// forEach((value, index, array) => {})
// datas.forEach((data, i, datas) => {
//     console.log(data, i, datas);
// });

// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// console.log(datas);

// for (let i in datas) {
//     console.log(i);
// }

// for (let data of datas) {
//     console.log(data);
// }

// 2 ~ 10까지 2의 배수로 Array객체에 담기
// 2 4 6 8 10: 5칸
// const datas = new Array(5).fill(5);
// datas.forEach((값, 인덱스, 객체) => {
//     객체[인덱스] = (인덱스 + 1) * 2;
// });

// console.log(datas);

// 1 ~ 10까지 담은 후 각 값에 제곱을 출력한다.
// const datas = new Array(10).fill(0);

// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// datas.forEach((data) => {
//     console.log(data * data);
// });

// map((value, index, array) => {})
// 기존 값을, 전달한 callback 함수의 리턴값으로 변경
// const datas = new Array(10, 6, 4, 8, 2);
// 기존 값을 두 배 증가시킨다.
// const updatedDatas = datas.map((data) => data * 2);
// console.log(updatedDatas);

// filter((value, index, array) => {})
// const datas = new Array(10, 6, 4, 8, 2);
// const updatedDatas = datas.filter((data) => data % 4 == 0);
// console.log(updatedDatas);

// reduce((temp, data, i) => {}, 초기값)
// 리턴값을 다시 temp에 담아준다.
// 초기값을 설정하면 data에 담기고,
// 초기값을 설정하지 않으면 datas의 첫번째 값이 data에 담긴다.
// i는 인덱스이며, 초기값의 유무에 따라 시작 인덱스가 바뀐다(초기값이 없으면 1이다).
// reduce는 누적 알고리즘에서 사용된다.
// let datas = new Array(5).fill(0).map((data, i) => i + 1);
// let test = datas.reduce((temp, data, i) => {
//     return temp + data;
// });

// console.log(test);

// 문자열
// split(): 구분점을 전달해서 값을 나눠준다.
//          Array 객체로 리턴하기 때문에, 문자열을 Array객체로 바꿀 때도 사용한다.
// console.log("ABC".split(""));

// includes(value): value가 문자열에 포함되었는지 검사
// console.log("ABCD".includes("Z"));

// charAt(index): 해당 인덱스의 문자열을 추출
// console.log("ABCD".charAt(0));

// 형변환
// parseInt(): 다른 문자열과 섞여있어도 정수만 추출해준다.
// console.log(parseInt("14px") + 1);
// Number(): 정수 외에 다른 문자열이 있으면 오류
// console.log(Number("14px") + 1);

// 10~1까지 Array 객체에 담은 후 짝수만 출력
let datas = new Array(10).fill(0).map((_, i) => 10 - i);
let evenNumbers = datas.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// 1~100까지 Array 객체에 담은 후 3의 배수만 추출 후 출력
let numbers = new Array(100).fill(0).map((_, i) => i + 1);
let multiplesOfThree = numbers.filter((num) => num % 3 === 0);
console.log(multiplesOfThree);

// 한글을 숫자로(삼사칠구 -> 3479)
// function hangulToNumber(hangul) {
//     const hangulMap = {
//         일: 1,
//         이: 2,
//         삼: 3,
//         사: 4,
//         오: 5,
//         육: 6,
//         칠: 7,
//         팔: 8,
//         구: 9,
//         영: 0,
//     };
//     return hangul
//         .split("")
//         .map((data) => hangulMap[data])
//         .join("");
// }
// console.log(hangulToNumber("삼사칠구"));
// 강사님 코드=============================================================================
const changeNumber = (...input) => {
    const hangul = [..."공일이삼사오육칠팔구"];
    return parseInt(input.map((c) => hangul.indexOf(c)).join(""));
};

// ...문자열 또는 ...Array객체: unpacking 문법,
// 모든 값을 각각 분리할 때 사용한다.
const test = "ABC";
console.log(...test);

const number = changeNumber(..."삼사칠구");
console.log(number + 10);

// =======================================================================================
// 숫자를 한글로(3479 -> 삼사칠구)

// function numberToHangul(number) {
//     const numberMap = {
//         1: "일",
//         2: "이",
//         3: "삼",
//         4: "사",
//         5: "오",
//         6: "육",
//         7: "칠",
//         8: "팔",
//         9: "구",
//         0: "영",
//     };
//     return number
//         .toString()
//         .split("")
//         .map((data) => numberMap[data])
//         .join("");
// }

// console.log(numberToHangul(3479));

// 강사님 코드=============================================================================
// const hangul = [..."공일이삼사오육칠팔구"];
// const input = "3479";
// const target = [...input];

// const result = target.map((number) => hangul[number]).join("");
// console.log(result);

// ★ special
// new Array(10).fill(0).forEach(() => {datas[i] = i + 1}) : 리턴 없음, 반복문, 기존 객체
// new Array(10).fill(0).map(() => i + 1): 리턴 있음, 반복문 + 수정(리턴값), 새로운 객체
// new Array(10).fill(0).filter(() => true); : 추출됨
// new Array(10).fill(0).filter(() => false); : 추출 안됨
