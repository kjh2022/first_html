const members = [{mid: 'admin',name: '관리자',mphone: '010-1234-5678'},
                {mid: 'hong12',name: '김혹시',mphone: '010-9876-5432'},
                {mid: 'parkgr',name: '김홀식',mphone: '010-1357-2468'}];
                
document.addEventListener('DOMContentLoaded', function () { 
    //1.멤버 리스트 출력 메소드 호출
    showMember();

});

//1.멤버 리스트 출력 메소드정의
function showMember(){
    let table = document.getElementById('list');//시멘틱한 구조를 위해 tbody밑에 테이블 값 만든다.
    //리스트 보여주는 forEach문
    members.forEach(member=>{
        let mValues = [];
        mValues = Object.values(member);
        let tr = makeTr(mValues);
        //1-2makeTr이라는 함수를 정의하여 members의 출력, 삽입, 삭제 관리함
        table.appendChild(tr);
    });
}

//2회원 등록 및 출력?
function addMember(){
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.valud, mphone.value);
    if(!mid.value || !mname.value || !mphone.value) {
        alert('아이디, 이름, 연락처는 필수 입력 사항입니다.');
        return;
    }
    const mValues = [mid.value, mname.value, mphone.value];
    let tr = makeTr(mValues);
    document.getElementById('list').appendChild(tr);
    //회원 등록위해 입력했던 값 모두 초기화시켜줌
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
}

//회원 찾기 및 정보 변경
function findMember(){
    let id = document.getElementById('mid').value;
    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbocy>tr');

    trs.forEach(tr =>{
        tr.removeAttribute('class');
    });
    //정보 변경
    trs.forEach(tr=>{
        if(tr.firstElementChild.textContent == id){
            tr.setAttribute('class', 'focus');
            let childTd = tr.children;
            childTd[1].textContent = document.getElementById('mname').value;
            childTd[2].textContent = document.getElementById('mphone').value;
        }
    })
}

//1-2멤버 리스트 출력, 삽입, 삭제 등의 기능 메소드 추가
function makeTr(mValues= []){
    
    //테이블 내 이름 클릭시 상단 입력창에 정보가 올라가게 만드는것
    let tr = document.createElement('tr');
    tr.addEventListener('click', function(){
        let text = this.firstElementChild.innerText;
        document.getElementById('mid').value = text;
        text = this.firstElementChild.nextSibling.innerText;
        document.getElementById('mname').value = text;
        text = this.firstElementChild.nextSibling.nextSibling.innerText;
        document.getElementById('mphone').value = text;
    });
    
    mValues.forEach(val=>{
        let td = document.createElement('td');
        let txt = document.createTextNode(val)
        td.appendChild(txt);
        tr.appendChild(td);
    });
    //삭제 버튼 추가
    let td = document.createElement('td');
    let btn = document.createElement('button');
    let txt = document.createTextNode('삭제');
    //ㄴ추가한 버튼에 삭제 기능 붙여주기 및 
    //삭제 클릭 시 삭제하시겠습니까 경고문 띄우기
    btn.addEventListener('click', function(e){
        if(confirm("삭제 하시겠습니까?") == true){
            this.parentElement.parentElement.remove();
        }else{
            return false;
        }e.stopPropagation();
    });
    btn.appendChild(txt);
    td.appendChild(btn);
    tr.appendChild(td);

    return tr;
}