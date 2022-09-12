//junc.js
let num;
console.log(num);

function sum(num1 = 0, num2 = 0) {
    return num1 + num2;
    //boolean 타입의 특징 : 0, null, undifined, '' => false로 취급한다.
    // if (!num1 && !num2) 
    // return num1 + num2; //코드가 길어지므로 비선호
    // else return 0;
    //함수는 무조건 어떤 값을 return해줘야하는데 리턴값을 입력하지않으면 undifined 를 반환함
}

console.log(sum(1, 2, 3));
//리턴이 없을대 sum 변수에 값을 넣어으면 똑같이 undifined를 반환함
//매개값의 개수에 상관없이 계산을 처리함

console.log(sum(1));
//NaN(Not a Number) => 1+undufuned 어떤 값이 숫자가 아니어서 계산할 수 없다는 에러문

console.log(sum() + sum(2, 3));
//정상적으로 가져온 2,3의 결과값이 sum()때문에 NaN오류가 발생할 수 있어서 sum선언 시
//매개변수의 초기값을 0으로 잡아두는 등 에러가 일어나지 않도록 방지하는것이 좋다.

console.log(sum);
//함수 표현식
sum = function(num1, num2){
    return num1 + num2;
}
sum(11, 22);
console.log(sum(11,22));

let showInfo = function(name){
    return `안녕하세요 ${name}님.`;
}
console.log(showInfo('누텔라땡겨요'));

let welcome = showInfo;
console.log(showInfo('응ㅇ애'));

let ohayo=welcome;
console.log(showInfo('김민수'))

let members = ['노은경', '이준의', '김민선'];
for(let member of members){
    console.log(welcome(member));
}