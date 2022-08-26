//basic.js

let student = {}; //object 변수 선언
student.id = 'st1';
student.name = '길동';
student['score'] = 80;

for (let prop in student) {
    console.log(student[prop]);
}
// console.log(student);

let numbers = [];
numbers[0] = 90;
numbers[1] = 80;
numbers[2] = 75;
numbers[3] = 85;

for (let num of numbers) {
    console.log(num);
}

let students = [];
let stu1 = {
    sNo: '1001',
    sName: '김영희',
    score: 90
}
let stu2 = {
    sNo: '1002',
    sName: '최희수',
    score: 88
}
let stu3 = {
    sNo: '1003',
    sName: '박버거',
    score: 85
}
//배열변수에 값을 추가해주는것
students[0] = stu1;
students[1] = stu2;
students[2] = stu3;

//위 학생들의 이름 출력
let str = '<ul>';
for (let student of students) {
    console.log('학생 번호: ' + student.sNo + ', 학생 이름: ' +
        student.sName + ', 점수: ' + student.score);

    str += '<li>' + '학번: <b> ' + student.sNo + '</b>, 학생 이름: ' +
        student.sName + ', 점수: ' + student.score + '</li>'
}
str += '</ul>';
document.write(str);