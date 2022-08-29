//variable_ref.js

//원시형 타입과 참조형타입
let str1 = 'Hello'; //데이터 타입 string
let str2 = new String('Hello'); //타입이 object(객체)

console.log(str1 == str2); //값 비교하기 true
console.log(str1 === str2); //값과 데이터의 타입까지 비교 false str1은 문자열, str2는 객체로 구분되어 false

let num1 = 20; //Number type
let num2 = new Number(20); //Object type

console.log(num1 == num2);
console.log(num1 === num2);

let obj; //undefined
obj = null; // null.(null값도 하나의 타입이다.)

let sym1 = Symbol('symbol'); //unique한 키 값을 생성해 주는것이 심벌타입
let sym2 = Symbol('symbol'); //똑같은 문자열을 생성하더라도 다른 값을 생성하도록 함
console.log(sym1 == sym2); //아직까지는 용도가 크게 없어서 새롭게 추가된 데이터 타입정도로만 생각 중요도 낮음

//객체(object)
obj = {
    sname: 'Hong', //속성: 속성값
    age: 20,
    showAge: function () {
        console.log('나이는 ' + this.age + '입니다.');
    } //속성에 함수를 가지는 부분은 메소드라고 한다

}
console.log(obj.sname);
console.log(obj['age']);
obj.showAge(); //메소드 호출은 변수.메소드명();을 같이 사용하면 된다

obj.sname = 'Hwang'; //값 할당

//배열
const numbers = []; // new Array();
numbers[numbers.length] = 10; //배열 값 추가
numbers[numbers.length] = 20; //배열 값 추가
numbers[numbers.length] = 30; //배열 값 추가

numbers.forEach(function (val) {
    console.log(val);
}); //메소드(콜백 함수(값, 인덱스, 배열 자체))
//  메소드에 매개값으로 쓰여지는 함수를 콜백함수라고 한다. 대체로 올 수 있는 값이 정해져 있음

const randomVals = [];
for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 10); // 0~1사이의 임의의 값을 생성해주는 명령어
    randomVals[i] = val;
} //math.ceil = 소수점 이하올림

console.clear(); //콘솔 메시지 초기화
randomVals.forEach(function (val) {
    if (val > 5) {
        console.log('5이상 : ' + val);
    }
});

// Math.random() : 0~1의 임의값 생성(범위를 정함) + 00<-시작하는 지점 정함
//21~50까지의 임의의 값을 생성하도록 만들어보기 Math.ceil(Math.random() * 30) + 20
// const rdv = [];
// for (let i = 0; i < 5; i++) {
//     let val = Math.ceil(Math.random() * 50);
//     if(val > 20){
//         rdv[i] = val;
//     }
//     console.log('21이상의 수' + rdv[i]);
// }


randomVals.splice(0, randomVals.length); //(배열의 첫번째 위치, 배열 내의 길이만큼 지정)배열 내의 할당된 값 초기화
console.log(randomVals); //배열 내의 값이 비어있는것 확인

console.log(Math.ceil(.8));

for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 30) + 20;
    randomVals[i] = val;
}

randomVals.forEach(showEven); //짝수만 출력 시켜보기

console.clear();
//콜백함수(call back함수) : 메소드가 실행될때 호출하겠다는 함수
function showEven(val) {
    if (val % 2 == 0) {
        console.log(val);
    }
}

console.log( '3' + 4); // 문자열 + 숫자 '34'의 결과 출력
console.log('3' / 3); //곱셈이나 나눗셈, 뺄셈은 문자열 타입의 숫자 *or/or- 여도 자동으로 숫자 타입으로 변환시켜 계산

console.log((3).toString()); //숫자타입을 문자타입으로 변환도 가능함

console.log(Math.abs(-20)); //Math.abs() 음의 값을 넣어도 양의 값으로 반환
console.log(Math.sign(-30));

console.clear();
const arr2 = [-3, 2 , -45 , 0, 4, 7];
const arr3 = arr2.map(function(val){
    return Math.sign(val);    
}); // 배열의 갯수만큼 콜백함수 실행 => 새로운 배열 반환

console.log(arr3);

//NaN, Infinity
console.log(3 / 'five') ;  // nan
console.log(-1 / 0); // infinaty