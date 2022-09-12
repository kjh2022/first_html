//4string_exp.js

let now = new Date();
console.log(now.toDateString()); //tue ayg 30 2022
console.log(now.toLocaleDateString()); //2022. 8. 30.
console.log(now.toLocaleTimeString()); //오후 5:28:00 현재시각

console.log(`${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일
             ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);

//아래 문장을 간단하게 변환해보기
console.log(`${now.getSeconds()<10?'0'+ now.getSeconds(): now.getSeconds()}`);

console.log(`0${now.getSeconds()}`.slice(-2));

console.log('abc'.toUpperCase()); //대문자로 변환 
console.log('ABC'.toLowerCase()); //소문자로 변환

Date.prototype.hhmiss = function(){
    //09:08:07 시간만 가져오는데 한자릿수 시간일때는 앞에0이 붙게
    let time = `0${now.getHours()}`.slice(-2) +'시' +`0${now.getMinutes()}`.slice(-2) + '분' + `0${now.getSeconds()}`.slice(-2) + '초';
    console.log(time);
}
now.hhmiss();