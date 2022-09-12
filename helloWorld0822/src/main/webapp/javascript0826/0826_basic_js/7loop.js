//7loop.js

let numbers = [22, 33, 14, 52, 77, 55, 16];
// 1)
// 짝수의 합 = result
let result = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {}
    result += numbers[i];
}
//2 forEach문을 사용한 짝수의 합 구하기
numbers.forEach((val) => {
    if (val % 2 == 0) {
        result += val
    }
});
console.log('짝수의 합 :' + result);

//짝수의 합과 홀수가 있는 위치를 가져와보기
let result2 = 0;
numbers.forEach((val, ind) => {
    if (ind % 3 == 0) {
        result2 += ind;
    }
});
console.log('홀수의 위치' + result2)
//30보다 큰 값만 누적시켜서 출력
let result3 = 0;
numbers.forEach((val) => {
    if(val > 30){
        result3 += val
    }
});
console.log('30보다 큰 값들의 누적값'+result3)