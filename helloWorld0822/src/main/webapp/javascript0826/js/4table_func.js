// table_func.js

function makeTr(mem={}){
    let tr = '<tr>';
    // str += `<td> ${member.id}</td><td>${member.name}</td><td>${member.score}</td>`;
    //위 문장 대신 아래의 for문으로 대체 가능
    for(let prop in mem){
        tr += `<td>${mem[prop]}</td>`
    }
    tr += '<td><button>확인</button></td>'
    tr+='</tr>'
    return tr;
}

// str += `<tr> <th>아이디</th><th>이름</th><th>점수</th></tr>`;
//위 문장 대신 아래의 for문으로 해결 가능 더 간결해짐 독립성향상, 유지보수쉬워짐
function makeHd(){
    let titles = ['아이디', '이름', '점수', '연락처', '확인'];
    let tr = '<tr>';
    for(let title of titles){
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}

//const 상수 변수: 값이 한번 할당되면 값을 바꿀 수 없는것.
const members = [
    {id: 'user1', name: '홍길동', score: 80, phone: '010-1234-5678'},
    {id: 'user2', name: '김민식', score: 85, phone: '010-8765-4321'},
    {id: 'user3', name: '황룡', score: 70, phone: '010-0258-8520'}
]; //현재 값이 할당 된 상태
// members = ''; //다시 값을 할당하면 에러남

let str ='<table border=1>';
str += makeHd();
// str += `<tr> <th>아이디</th><th>이름</th><th>점수</th></tr>`;
    for(let member of members){
        str += makeTr(member);
        // str += '<tr>';
        // str += `<td> ${member.id}</td><td>${member.name}</td><td>${member.score}</td>`;
        // str += '</tr>';
    }
str += '</table>';
document.write(str);

