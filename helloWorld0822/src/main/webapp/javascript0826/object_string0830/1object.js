//object.js

//객체 : {name:"홍길동", age:20, showAge: function(){...}}
//중괄호로 표현, 기능을 담당하는 메소드나 다양한 타입의 속성 대입가능

class Student {
    //이 자리에서 속성 정의 불가 this. 과 값을 사용해야함
    constructor(sno, name) { //<ㅡ생성자(매개값)
        this.sno = sno;
        this.name = name;
    }
    setGrade(grade) {
        this.grade = grade;
    }
    showInfo(){
        return `이름은 ${this.name}이고, 학번은 ${this.sno}이다.`;
    }
} //스튜던트 클래스 만들고

let s1 = new Student('s11', '길동'); //객체로 사용가능
console.log(s1.sno);
s1.setGrade(2);
console.log(s1.grade);

let s2 = new Student('s12', '민식');
s2.setGrade(2);

const students = [s1, s2, new Student('s13', '김홍식')]; //세번째 요소인 홍식이를 1학년으로 지정
students[2].setGrade(1);

s1.phone = '010-1111-2222';
s2.phone = '010-1111-4444';
delete s1.phone; //속성 삭제 키워드 : delete 변수명.속성

// students.forEach(student => console.log(`이름 : ${student.name}, 연락처: ${student.phone} ,학년: ${student.grade}`));
students.forEach(student => console.log(student.showInfo()));