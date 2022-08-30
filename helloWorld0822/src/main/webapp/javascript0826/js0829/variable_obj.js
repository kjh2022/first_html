//variable_obj.js p.57 다양한 for문의 이해

let strAry = [];
for (let i = 0; i < 10; i++) {
    strAry[i] = 'i' + i; //i0, i1, i2 ... i9
}

//배열 for .. of
for (let str of strAry) {
    console.log(str);
}

//객체(object)의 경우 for .. in 사용
let obj = {fname: '길동', lname: '고', age: 20,
         fullName: function () {
            return this.lname + ' ' + this.fname;
    }
}

for (let prop in obj){
    console.log(prop, obj[prop]); // obj.lname
}

//배열[{객체},{객체},{객체}]
let members = [
    {id: 'user1', name: '사용자1'},
    {id: 'user2', name: '사용자2'},
    {id: 'user3', name: '사용자3'}
]
let str = '<table border=1>';

str += `<th style = "width: 60px;">아이디</th><th>이름</th>`

for(let member of members){
    str += '<tr>';
    for(let prop in member){
        str += `<td style = "text-align: center;">${member[prop]}</td>`;
        console.log(prop, member[prop]);
    }
    str += '</tr>';
    console.log('=============')
}
str += '</table>';
document.write(str);

str = '<table border=1>';
//forEach() 함수를 이용한 배열 표현
members.forEach(createTable); //createTable 콜백함수 만들어서 기능 분리
str += '</table>';
document.write(str);

function createTable(val, idx){
    //테이블의 헤더
    if(idx == 0){
        str += '<tr>';
        for(let prop in val){
            str += `<th>${[prop]}</th>`;
        }
        str += `<th>버튼</th>`
        str += '</tr>';
    }
    //테이블의 데이터부분
    //val => {id:'user1', name:'사용자1'}이라는 값을 가지고 있다.
    str += '<tr>';
    for(let prop in val){
        str += `<td>${val[prop]}</td>`;
    }
    str += `<td><button onclick="alertName(event)">클릭</button></td>`
    str += '</tr>';
}

function alertName(e){ //버튼 태그의 부모 요소
    console.log(e.target.parentElement.parentElement.remove());
    // window.alert(e)
};

