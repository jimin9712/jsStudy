// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.

const mart = new Object();

mart.customer1 = {
    name: "홍길동",
    age: 30,
    points: 3500,
};

mart.customer2 = {
    name: "이순신",
    age: 22,
    points: 0,
};

mart.customer3 = {
    name: "장보고",
    age: 66,
    points: 9500,
};

console.log(mart);
