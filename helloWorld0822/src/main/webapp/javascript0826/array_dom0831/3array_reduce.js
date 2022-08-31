//array_reduce3.js

const numbers = [2, 3, 8, 5, 1];
let sum = 0;

// console.log(sum);

let result = numbers.reduce(function (acc, val, idx, ary) {
    return acc + val;
}, 0);
//acc = 누적초기값, val = 현재값
result = numbers.reduce((acc, val, idx, ary) => {
    acc.push(val + 2); //[4, 5, 10, 7, 3] 누적시킨 후에
    // console.log(acc, val);
    return acc; //반환
}, []);
console.log('최종 결과 : ', result);

//html태그
//ul>li 2 3 8 5 1 각 리스트에 넣음 /ul 이런 형태의 문자열 반환

result = numbers.reduce((acc, val, idx, ary) => {
    console.log(acc);
    if (idx == 0) {
        acc = '<ul>';
    }
    acc += '<li>' + val + '</li>'
    if (idx == numbers.length - 1) {
        acc += '</ul>'
    }
    return acc; //다음 순번의 누적 초기값으로 사용
    //            어떤 값을 반환하는지
}, ''); //초기값 지정을 문자열로
document.write(result);

//배열 요소의 max값
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > max) {
        // 제일 큰 값을 구하는 코드
        max = numbers[i];
    }
}
console.log('max : ' + max);

result = numbers.reduce((acc, val) => {
    return acc > val ? acc : val;
    // if (acc < val) {
        // acc = val;
    // }
    // return acc;
}, Number.MIN_SAFE_INTEGER);//<-integer type의 최저값

console.log('최종 결과2 : ', result);

//reduce()함수만 잘 활용하면 못하는게 없다. 필터 맵 사용 안해도 될만큼