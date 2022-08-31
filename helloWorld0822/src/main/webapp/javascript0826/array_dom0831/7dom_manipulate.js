//dom_manipulate.js
//element생성 : createElement()
//textNode 생성 : createTextNode()
//부모-자식 형성 : appendChild()

let frm = document.createElement('form');
frm.setAttribute('action', 'addMember.jsp');
// frm.setAttribute('target', '_blank')
frm.setAttribute('method', 'post');

//자식요소(label) 아이디
let labelId = document.createElement('label');
labelId.setAttribute('for', 'user_id');
labelId.innerText = '사용자 아이디';
frm.appendChild(labelId);

//자식요소 (input) 아이디 입력란
let inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'user_id');
inputId.setAttribute('id', 'user_id');
frm.appendChild(inputId);

//자식요소(label) 비밀번호
let labelPass = document.createElement('label');
labelPass.setAttribute('for', 'user_pass');
labelPass.innerText = '비밀번호';
frm.appendChild(labelPass);

//자식요소 (input) 비밀번호 입력란
let inputPass = document.createElement('input');
inputPass.setAttribute('type', 'password');
inputPass.setAttribute('maxlength', '20')
inputPass.setAttribute('name', 'user_pass');
inputPass.setAttribute('id', 'user_pass');
frm.appendChild(inputPass);

//버튼(로그인)
let btn = document.createElement('button');
btn.innerText = '로그인'
frm.appendChild(btn);
//div#show의 자식요소로 지정
document.getElementById('show').appendChild(frm);
console.log(frm);