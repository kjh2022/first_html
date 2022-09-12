//for_test

//1~100사이의 임의의 수를 생성 => 5개의 값 배열에 저장
//배열값 중 최대값을 구하는 반복문 작성, 큰값은 콘솔에 출력
// 배열요소는 화면에 출력

const rdv = [];
// document.write('1~100사이의 랜덤 수5개 : ')
for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 100) + 1;
    rdv[i] = val;
    // document.write(rdv[i] + ' ');
}
rdv.forEach(val => document.write(`<p>${val}</p>`));

let max = rdv[0];
rdv.forEach(val => {
    if (val > max) {
        max = val;
    }
});
console.log('배열의 최대값 : ' + max);

//함수의 스코프 체인
//변수는 최대한 지역변수로 선언해주는것이 좋다. 전역변수는 모든곳에 영향을 미쳐서 언제 어디서 에러가 발생할지 모르니까
var a = 1;
var b = 5;

function outerFunc() {
    function innerFunc() {
        a = b;
    }
    console.log(a); // 여기서 a는 1
    a = 2;
    b = 4;
    innerFunc();
    console.log(a); // a가 4로 바뀜
    var b = 2;
    console.log(b); //이 시점에서 b의 값은 얼마? = 2
}
outerFunc();
console.log(b); //