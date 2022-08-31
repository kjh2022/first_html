//8dom_maniplate2.js

let addBtn = document.querySelector('button'); //버튼 태그에서 가장 처음 나오는 하나만 가져옴

addBtn.onclick = function () {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.valud, mphone.value);
    // 저장 하려는 값이 없으면 등록하라는 메시지가 뜨도록 warinig이라는 문구로
    if(!mid.value || !mname.value || !mphone.value){
        alert('아이디, 이름, 연락처는 필수 입력 사항입니다.');
        return;
    }
    const mValues = [mid.value, mname.value, mphone.value];

    let tr = document.createElement('tr');

    mValues.forEach(val => {
        let td = document.createElement('td'); //id위치<td>user1</td> : 텍스트 노드
        let txt = document.createTextNode(val) //텍스트 노드를 만들어주는 메소드
        td.appendChild(txt); // td user1 /td 
        tr.appendChild(td); // tr td user td /tr
    });

    document.getElementById('list').appendChild(tr);

    //입력값 초기화
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
}