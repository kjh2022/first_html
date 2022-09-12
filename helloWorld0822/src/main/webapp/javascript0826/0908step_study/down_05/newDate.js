// 현재 시간을 기반으로 Date 객체를 생성합니다.
let dateA = new Date();
console.log(dateA);
// 유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경과한 밀리초)
let dateB = new Date(692281800000);
console.log(dateB);
// 문자열을 기반으로 Date 객체를 생성합니다.
let dateC = new Date("December 9, 1991 21:30:00")
console.log(dateC);
// 시간 요소(년, 월 - 1, 일, 시간, 분, 초, 밀리초)를 기반으로 Date 객체를 생성합니다.
let dateD = new Date(1991, 12 - 1, 9, 21, 30, 0, 0);
console.log(dateD);