//function_param.js

//gkatn ghdltmxld
function myFunc(param) { //parameter
    console.log('Hello, ' + param);
}

function myFunc2(param1, param2) {
    console.log(param1 + param2);
}

//함수선언식
myFunc('World!!'); //argument

myFunc2('Welcome ', 'Home~');

//함수 표현식
let myFunc3 = function (param) {
    document.write('<p>Hello, ' + param + '</p>')
}

myFunc3('길동홍');

let myFunc4 = myFunc3;

myFunc4('World');

console.clear();
//매개값을 처리하는 arguments 객체
function mySum(n1 = 0, n2 = 0) {
    let sum = 0;
    console.log(arguments); //매개값을 받아옴 배열 타입처럼 사용가능
    // console.log(n1 + n2);
    for (let num of arguments) //매개변수에 들어가는 값 만큼 다 계산?>함?
        sum += num;

    console.log(sum);
}
mySum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);


//화살표 함수
function mySum5(a, b) {
    console.log(a + b);
}

//forEach메소드의 매개값으로 화살표 함수를 사용
['hello', ' world'].forEach((val, idx) => {
    console.log(val, idx);
});