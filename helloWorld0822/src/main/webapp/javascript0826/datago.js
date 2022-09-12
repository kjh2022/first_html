//조회 버튼
document.getElementById('searchBtn').addEventListener('click', searchCenterFnc);

//리스트 버튼
document.getElementById('sido').addEventListener('change', searchCenterFnc);

//조회 or 리스트 클릭 시 발생되는 이벤트 함수 작성
function searchCenterFnc() {
    let sido;
    if (target.nodeName == 'BUTTON') {
        sido = document.getElementById('center').value;
    } else if (target.nodeName == 'SELECT') {
        sido = target.value;
    }
    //조회하려는 시도 리스트 출력
    let tbody = document.getElementById('list');
    //다른 지역 검색 시 기존 테이블의 행(tr)들 삭제되게
    // document.querySelectorAll('#list>tr').forEach(tr => tr.remove());
}

//리스트/조회에 담아줄 정보들 가져오기
let req_url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&returnType=json&serviceKey=OvKYmU%2FDnqzbDNbxI9PqJzihwNYVdAXVoIrYhPDMcGWou4AZh44kYn15uH1T5dZGVk3Uu1ijQFXstcFYgiQ9gA%3D%3D';
let xhtp = new XMLHttpRequest();
xhtp.open('post', req_url);
xhtp.send();
xhtp.onload = pageLoadCallBack;

function pageLoadCallBack() {
    let result = JSON.parse(this.responseText);

    let tbody = documnet.getElementById('list');

    let data = result.data;
    console.log(data);
    //화면 초기화에 사용하기 위해 data를 전역변수로 선언한 gdata에 담아둔다
    gdata = data;

    let sidoData = [];
    let chartData = [];

    data.forEach((center, idx) => {
        if (idx < 20) {
            tbody.append(makeTr(center));
        }
    })

}

//테이블에 추가할 행 만드는 함수
function makeTr(center) {
    let tr = document.createElement('tr');
    let infos = ['id', 'centerName', 'sido', 'sigungu', 'phoneNumber', 'address'];

    infos.forEach(info=>{
        let td = document.createElement('td');
        let txt = document.createTextNode(center[info]);
        
        td.append(txt);
        tr.append(td);
    });

    return tr;
}

