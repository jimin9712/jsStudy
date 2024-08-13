const user = {
    id: 1,
    name: "lee",
};
// 구조 분해(비구조화 할당)
// const { id, name } = user; // Mapping
// console.log(id, name);

/*초기값 설정도 가능*/
// const { id, name, age = 25 } = user;
// console.log(id, name, age);

// 프로퍼티 매핑 후 원하는 이름으로 변경
// const { id: number, name, age = 25 } = user;
// console.log(number, name, age);

// product
// property : id, name, price
// 상품 객체 1개 만든 후
// 구조 분해를 사용해서 3개의 정보를 출력한다.
// 이 때, price 대신 value를 사용한다.

const product = {
    id: 1,
    name: "상품A",
    price: 1000,
};

const { id, name, price: value } = product;

console.log(id, name, value);
