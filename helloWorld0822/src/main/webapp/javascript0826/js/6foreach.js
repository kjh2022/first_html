// foreach6.js

const members = [
        {id: 'user1',name: '홍길동',score: 80,phone: '010-1234-5678',gender: 'M'},
        {id: 'user2',name: '김민식',score: 85,phone: '010-8765-4321',gender: 'W'},
        {id: 'user3',name: '고무신',score: 55,phone: '010-6543-9876',gender: 'M'},
        {id: 'user4',name: '황룡',score: 70,phone: '010-0258-8520',gender: 'W'}
    ];

// for 반복문, 배열매소드(forEach) foreach가 정해놓은 규칙에 따른 메소드(함수, 기능)만 들어갈 수 있다.
let str = '<table border=1>';
 str += makeHd();
members.forEach((val,ind,ary) => {
    if(val.gender == 'M'){
        str +=makeTr(val, 'blue');
    }else if(val.gender == 'W'){
        str += makeTr(val, 'red');
    }
});
str += '</table>'
document.write(str);

function makeTr(mem={}, color) {
    let tr = `<tr style="color: ${color};">`;
    
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    
    tr += '</tr>';
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

// function callBackFnc(val, ind, ary){
//     console.log(val);
// }
// members.forEach(callBackFnc);