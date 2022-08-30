//8object.clone.js

let originObj = {
    sname: 'Park',
    age: 10,
    changeAge: function () {
        this.age++;
    }
}

let cloneObj = originObj; //originObj 참조값을 cloneObj에서도 참조하게됨
//주소값을 참조하고 있는 값을 똑같이 cloneObj에 할당해준다
//객체의 참조값을 재할당 하는것
cloneObj.sname = 'choi';
console.log(originObj.sname);
originObj.changeAge();
console.log(cloneObj.age);


//복사 새로운 객체를 만들어냄 원본의 복사판 원본에 영향 X
let obj2 = new Object();
let copyObj = Object.assign({}, originObj); //assign({새로만들 객체}, 복사할 객체명);

copyObj.sname = 'kim';
console.log(originObj.sname);
console.log(copyObj.sname);

let newObj = {
    sname: 'kill',
    phone: '010-1234-5678',
    age: 20
}
//              phone만 남음ㄱ
let dupObj = Object.assign(newObj, originObj);//존재하는 속성은 사라지고 없는 속성은 유지
//                                  ㄴ 기존에 가지고 있던 이름choi와 age 11은 유지
console.log(dupObj);
console.clear();


//객체 속성 지정
let s1 = {
    sname:'Hong'
}
s1.age = 10; //속성추가
// delete s1.age; //속성삭제
s1['phone'] = '010-1234-5678';

s1.friends = [{name:'도권혁', phone: '010-2424-4444', age:17},
              {name:'혁권도', phone: '010-010-010', 취미:['음주', '흡연'], 특이사항: '폭행 전과 4범'}];

console.log(s1);
console.log(s1.friends[1]);
console.log(s1.friends[0].age);
console.log(s1.friends[1].취미[0]);//하위요소의 하위요소들 사용가능
let show = (s1.friends[1].name +' ' + s1.friends[1].취미+ ' ' + s1.friends[1].특이사항);
document.write(show);
class Student{
    constructor(sname, age){
        this.sname = sname;
        this.age = age;
    }
}
let s2 = new Student('홍길동', 20);
Object.defineProperty(s2, 'score',{
    set: function(score){
        if(score > 100){
            throw '만점(100점)이 넘는 점수를 입력했습니다.';
        }else if (score < 0){
            throw '0점 미만으로는 입력할 수 없습니다.';
        }else{
            this._score = score;
        }
    },
    get: function(){
        return this._score;
    }
});

s2.score = 88;
console.log('점수는 ' + s2.score + '점 입니다.');

let s3 = new Student('김민규', 22);

Student.prototype.showInfo = function(){
    return `이름은 ${this.sname}이고, 나이는 ${this.age}살 입니다.`;
}

console.log(s2.showInfo());
console.log(s3.showInfo());