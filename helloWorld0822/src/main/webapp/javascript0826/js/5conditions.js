//conditions5.js

const members = [{
        id: 'user1',
        name: '홍길동',
        score: 80,
        phone: '010-1234-5678',
        gender: 'M'
    },
    {
        id: 'user2',
        name: '김민식',
        score: 85,
        phone: '010-8765-4321',
        gender: 'W'
    },
    {
        id: 'user3',
        name: '고무신',
        score: 55,
        phone: '010-6543-9876',
        gender: 'M'
    },
    {
        id: 'user4',
        name: '황룡',
        score: 70,
        phone: '010-0258-8520',
        gender: 'W'
    }
];


//함수를 매개값으로 받는 함수
// function callFunc(fnc){
//     let name ='Hong';
//     fnc(name);
// }


// function welcomeFnc(param){
//     console.log('welcome ' + param);
// }

// 아래 세개 모두 같은 결과를 출력한다
//1. function helloFnc(param){
//     console.log('Hello ' + param);
// }

//2. let helloFnc = function(param){
//     console.log('Hello ' + param);
// }
//3.화살표 함수
// let helloFnc =(param) => {
//     console.log('Hello ' + param);
// }

// callFunc(welcomeFnc);
// callFunc(helloFnc);


//--점심 후 2시강의

const passMember = [];

for (let i = 0; i < members.length; i++) {
    if (members[i].score > 60) {
        console.log('이름: ' + members[i].name);
        passMember[passMember.length] = members[i].name;
    }
}
console.log(passMember);

const women = []
for (let member of members) {
    if (member.gender == 'W') {
        women[women.length] = member;
    }
}
console.log(women);

//테이블 형식(표) => 
// 성별 남자=>파란색 글씨, 여자 => 빨간색 글씨
//makeTr함수를 만들어서 사용(파란색, 빨간색 글씨)/ makeBlueTr(), makeRedTr
function makeBlueTr(mem = {}) {

    let tr = '<tr style="color: blue">';

    if (mem.gender == 'M') {
        for (let prop in mem) {
            tr += `<td>${mem[prop]}</td>`;
        }
    }
    tr += '</tr>'
    return tr;
}

function makeRedTr(mem = {}) {
    let tr = '<tr style="color: red">';

    if (mem.gender == 'W') {
        for (let prop in mem) {
            tr += `<td>${mem[prop]}</td>`;
        }
    }
    tr += '</tr>'
    return tr;
}


function makeHd() {
    let titles = ['아이디', '이름', '점수', '연락처', '성별'];
    let tr = '<tr>';
    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}

let str = '<table border=1>';
str += makeHd();

for (let member of members) {
    if (member.gender == 'M') {
        str += makeBlueTr(member);
    } else {
        str += makeRedTr(member);
    }
}

str += '</table>'
document.write(str);