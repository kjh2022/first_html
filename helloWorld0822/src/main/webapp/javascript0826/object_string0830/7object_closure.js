//object_closure.js

//1.함수는 변수에 대입 가능
let fnc = function () {
    console.log('함수 호출!!!!!!!!!!!');
}

//2.메소드의 매개값으로 대입 가능
let num = [1, 2];
num.forEach(function (val) {
    console.log(val);
});

//3.결과 값으로 함수가 반환되는것도 가능 못하는게없는데?
function outerFunc(name) {
    let saying = name + '하이 ㅋㅋ';

    return function () {
        return saying;
    }
}

let closure1 = outerFunc('홍길동');
console.log(closure1);
console.log(closure1());

function initCnt() {
    let cnt = 10;

    return function addCnt() {
        cnt++;
        console.log(cnt);
    }
    // addCnt();
}
let plusCnt = initCnt();
for(let i = 0; i<18; i++){
    plusCnt(i);
}

console.log