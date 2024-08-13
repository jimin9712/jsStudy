// 객체 스프레드: 값 복사
// const product = {
//     id: 1,
//     name: "상품A",
//     price: 3600,
// };

// immutable, 즉, 기존 객체의 주소가 아닌 값만 복사해 온다.
// const otherProduct = { ...product };
// otherProduct.name = "한동석";
// console.log(product);

// 기존에 없던 key를 작성하면 추가된다.
// const anotherProduct = { ...product, stock: 32 };
// console.log(anotherProduct);

// 이미 있는 key를 작성하면 수정된다.
// const anotherProduct = { ...product, price: 1000 };
// console.log(anotherProduct);

// 유치원에 어린이 3명이 있다.
// 어린이 3명의 정보는 다음과 같다.
// 이름, 나이
// 3명의 어린이를 유치원 객체에 담는다.
// 기존의 어린이 1명의 정보를 복사해서 유치원에 새로운 어린이로 추가한다.
// 이 때, 새로운 유치원에 있는 어린이 정보를 수정해도 원본은 바뀌지 않는다.
// + 이 때, 새롭게 추가된 어린이의 나이를 +1로 설정한다(복사할 때 같이 수정)

// function Child(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const kindergarten = new Object();
// const child1 = new Child("또치", 4);
// const child2 = new Child("둘리", 5);
// const child3 = new Child("도너", 4);

// kindergarten.child1 = child1;
// kindergarten.child2 = child2;
// kindergarten.child3 = child3;

// const child4 = { ...child3, age: child3.age + 1 };

// kindergarten.child4 = child4;

// console.log(kindergarten);

// rest: 나머지
const user = {
    id: 1,
    name: "lee",
    age: 4,
};

const userUpdated = { ...user, age: 20 };

// age만 가져오고 나머지 프로퍼티는 rest에 담긴다.
const { age, ...rest } = userUpdated;

console.log(age);
console.log(rest);
