//  학습목표: 이 코드를 보고 완벽히 이해할 수 있어야 한다.
// const module = (function () {
//     function a(callback) {
//         if (callback) {
//             callback();
//         }
//     }
//     return { a: a };
// })();

// 모듈화
// getNumbers는 일회용 함수의 리턴값이 담긴다.
// (function(){})() : 함수 선언과 동시에 사용

const getNumbers = (function () {
    // 서비스2
    function getOne() {
        return 1;
    }
    // 서비스2
    function getTwo() {
        return 2;
    }
    // 구현된 서비스 객체를 
    return { getOne: getOne, getTwo: getTwo };
})();
getNumbers.getOne();
getNumbers.getTwo();

const { getOne, getTwo } = getNumbers;
console.log(getOne());
console.log(getTwo());
