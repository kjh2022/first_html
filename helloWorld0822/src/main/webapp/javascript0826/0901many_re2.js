//8dom_maniplate2.js
const members = [{mid: 'admin',name: '관리자',mphone: '010-1234-5678'},
                {mid: 'hong12',name: '김혹시',mphone: '010-9876-5432'},
                {mid: 'parkgr',name: '김홀식',mphone: '010-1357-2468'}];

document.addEventListener('DOMContentLoaded', function () { //dom 요소에 이벤트 등록
    //                         ㄴclick, mouseover, DOMContentLoaded 등 이벤트 타입 텍스트로 입력


    showMember();
    //등록 버튼 이벤트
    let addBtn = document.querySelector('button'); //버튼 태그에서 가장 처음 나오는 하나만 가져옴
    addBtn.addEventListener('click', addMember);
    //회원 찾기 버튼 이벤트
    let findBtn = document.getElementById('findMember');
    findBtn.addEventListener('click', findMember);
    //전체 선택/해제 이벤트
    let chk = document.getElementById('allCheck');
    chk.addEventListener('click', allChecked);
}); //dom요소에 이벤트 등록

//전체 선택/해제 기능
function allChecked() {
    // true/false값은 this의 checked값을 할당
    let checkbox = document.querySelectorAll('tbody input[type="checkbox"]');
    checkbox.forEach(check => {
        check.checked = this.checked;
        console.log(this);
    });
}


function showMember() {
    let table = document.getElementById('list');
    //리스트 보여주기
    members.forEach(member => {
        let mValues = [];
        //object 를 array로
        // for (let prop in member) {
        //     mValues.push(member[prop]);
        // }
        mValues = Object.values(member); //Object.keys(member) : [속성, 속성]
        //기존 위 자리에 있던 내용을 makeTr이라는 함수로 만들어 대체
        let tr = makeTr(mValues);
        table.appendChild(tr); //table tr td button 삭제 /button /td/ tr /table 
    });
}


//회원 등록
function addMember() {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.valud, mphone.value);

    // 저장 하려는 값이 없으면 등록하라는 경고 메시지가 뜨도록 (warinig)
    if (!mid.value || !mname.value || !mphone.value) {
        alert('아이디, 이름, 연락처는 필수 입력 사항입니다.');
        return; //함수 종료
    }
    const mValues = [mid.value, mname.value, mphone.value];
    let tr = makeTr(mValues);
    document.getElementById('list').appendChild(tr);

    //입력값 초기화
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
};


//회원 찾기
function findMember() {
    let id = document.getElementById('mid').value;
    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbody>tr');
    console.log(trs); // NodeList[tr, tr, tr]을 아래 forEach문을 이용하여 각각 담아옴

    //다른 회원을 다시 찾을때 배경색이 비워지게 만듦
    trs.forEach(tr => {
        // tr.className='';
        tr.removeAttribute('class');
    });

    trs.forEach(tr => {
        if (tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus');
            //정보 변경
            let childTd = tr.children;
            childTd[1].textContent = document.getElementById('mname').value;
            childTd[2].textContent = document.getElementById('mphone').value;
        }
    });

} // end of findMember


//행 등록
function makeTr(mValues = []) {

    let tr = document.createElement('tr');

    tr.addEventListener('click', function () {
        // alert(this.firstElementChild.innerText); //td button user1 /button /td
        //ㄴ 회원 정보를 누르면 클릭한 회원 아이디를 알려주는 알림이 한번 나오게 만드는것

        //리스트의 이름을 클릭하면 등록 화면에 회원 계정 정보가 하나씩 등록되도록 만들기
        let text = this.firstElementChild.innerText;
        document.getElementById('mid').value = text;
        text = this.firstElementChild.nextSibling.innerText;
        document.getElementById('mname').value = text;
        text = this.firstElementChild.nextSibling.nextSibling.innerText;
        document.getElementById('mphone').value = text;

    }, false);


    mValues.forEach(val => {
        let td = document.createElement('td'); //id위치<td>user1</td> : 텍스트 노드
        let txt = document.createTextNode(val) //텍스트 노드를 만들어주는 메소드
        td.appendChild(txt); // td user1 /td 
        tr.appendChild(td); // tr td user td /tr
    });

    //삭제 버튼 추가
    let td = document.createElement('td');
    let btn = document.createElement('button'); //<button></button>
    let txt = document.createTextNode('삭제');



    btn.addEventListener('click', function (e) {
        if (confirm("정말 삭제하시겠습니까?") == true) {
            this.parentElement.parentElement.remove();
        } else {
            return false;
        }
        e.stopPropagation(); //상위에 존재하는 요소의 이벤트가 더이상 실행되지 않도록 전파 차단
    }, false);
    btn.appendChild(txt);
    td.appendChild(btn); //td button 삭제 /button td
    tr.appendChild(td); //tr td button 삭제 /button /td /tr

    //체크박스 추가
    let ckbx = document.createElement('input');
      ckbx.addEventListener('click', function(e){
        e.stopPropagation();
    });
    ckbx.addEventListener('change', function(){
        let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]');
        //[input,input,input] 배열(forEach) : every();, some();
        document.getElementById('allCheck').checked = [...checkProp].every(item=>{return item.checked == true});
//                                                     ㄴ[...파라미터]배열의 형태로 만들어줌
    });
    ckbx.setAttribute('type', 'checkbox');
    td = document.createElement('td');
    td.appendChild(ckbx);
    tr.appendChild(td);
    return tr;
}