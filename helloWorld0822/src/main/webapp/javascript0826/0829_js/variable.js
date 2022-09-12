//js0829/variable.js
var age; //undifiend - 호이스팅
//ES6;
let fname = 'Hong'; //변수선언 전역변수 / 지역변수 / 블록 레벨 변수
fname = 'Hwang'; //재할당 가능
console.log(fname);

const PI = 3.14; //상수선언 재할당 불가
// PI = 1.23;
//let, const는 값을 선언하고 사용해야함

console.log(age); // var은 선언 전에 사용은 가능하나 undefined만 반환됨(호이스팅)
// var age = 20; 
age = 20;

function localFnc(){
    var age = 30; //지역변수
    console.log('지역변수 : ' + age);
    age = 33;
    console.log('지역변수2 : ' + age);

    let fname = 'kill'; //let의 지역변수 사용
    console.log(fname); 
}

{
    let fname = 'park'
    console.log(fname);
    var age = 222;//전역변수. 에러 발생X var은 새롭게 변수 선언 가능하지만 위험한 방식
}
localFnc();
console.log('var 전역변수 : ' + age);
console.log('let 전역변수 : ' + fname);

console.log(window);
