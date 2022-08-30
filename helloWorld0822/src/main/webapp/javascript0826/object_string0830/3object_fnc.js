//object_fnc.js

//생성자 함수(Constructor function)
function Studnet (sno, sname){ //생성자 함수를 정의할때는 첫글자를 대문자로
    this.sno = sno;
    this.sname = sname;
    this.showInfo = function(){
        return `학번은 ${this.sno}, 이름은 ${this.sname} 입니다.`
    }
}

let s1 = new Studnet('s11', '홍길동');
console.log(`학번은 ${s1.sno} 입니다.`);
console.log(s1.showInfo());