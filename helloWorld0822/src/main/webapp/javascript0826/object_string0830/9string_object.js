//9string_object.js점심먹고

//메소드 : trim() > trimStart() > trimEnd();
//메소드 : replace(a, b) : a문자를 b문자로 변환
//정규 표현식 : replace(/\s+/, '표현값')
        //      /\s+/ s=공백 하나 + => 하나 이상의 공백 
//메소드 : split('구분자') => 문자열을 배열로 생성
//메소드 : join('구분자') => 배열 -> 문자열로 변환


let str1 = 'Hello';
let str2 = new String('Hello');

console.log(str1, str2, str1 == str2, str1 === str2);
console.log(str1.substring(0, 4));

//valueOf()메소드는 String 타입의 숫자를 number타입으로 변환시켜주는 메소드 아래와 같이 활용가능
//string =>string 
console.log(typeof str2.valueOf()); //객체 ->기본타입

let result = eval(new String('1+2*3').valueOf()); //문자열의 연산식을 숫자로 변환하여 출력시켜주는 함수
console.log(result);

let trimStr = '               모든 공백 을 제거 할 수 있는 메소드     '
console.log(trimStr); //공백 제거 x

console.log(trimStr.trimStart()); //앞쪽의 공백만 제거
console.log(trimStr.trimEnd()); //뒤쪽의 공백만 제거

console.log(trimStr.trimStart().trimEnd()); //좌우 모든 공백 제거
console.log(trimStr.trim()); //좌우 모든 공백 제거


console.clear();

//String 객체의 메소드 추가 정의
let obj = {}; //new Object()
let ary = []; //new Array();
// let regExp = //new regExp

String.prototype.ltrim = function(){
    return this.replace(/^\s+/, '');
}
console.log(trimStr.ltrim());

String.prototype.rtrim = function(){
    return this.replace(/\s+$/, '');
}
console.log(trimStr.ltrim().rtrim());

trimStr = '    how are you    to    day   everyone.     ';
console.log(trimStr.trim().replace(/\s+/g, ' ')); //\s문자 = 공백이 여러개임을 나타낸  

const trimAry = trimStr.split(' ');
//forEach, map, filetr 등
const filAry = trimAry.filter(function(str){
    return str != '';
});

console.log(filAry.join(' '));
// console.log(trimAry);

const str = 'The quick brown fox jumps over the lazy fuckin doge.';
const strAry = str.split(' ');
console.log(strAry[8]);
console.log(strAry.join('-'));
