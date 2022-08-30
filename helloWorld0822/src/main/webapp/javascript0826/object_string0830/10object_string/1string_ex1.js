//string_ex1.js
let items = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eius tempore vero, dolor illum ipsa reprehenderit assumenda sed repudiandae distinctio commodi error veniam, voluptate odit quam asperiores est corporis illo?'

let bdy = document.querySelector('body'); //body태그를 찾아서 bdy 변수에 담아준것
let div = document.createElement('div'); //div element(태그)를 생성했음
bdy.append(div); //생성한 div태그를 body의 자식요소로 붙임

let words = items.split(' ');
words.forEach(word => {
    let span = document.createElement('span'); //<span></span>
    span.innerText = word;

    div.append(span);
});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';

//버튼 클릭 시 실행할 함수
btn.onclick = function () {
    let findWord = inp.value;
    let spans = document.querySelectorAll('span');
    // console.log(findWord);
    // console.log(spans);
    spans.forEach(function (span) {
        //findWord ==span.innerText => span.remove();메소드 사용
        if (findWord == span.innerText) {
            span.remove();
            document.querySelector('input').value='';
        }
    });
}
document.querySelector('div').after(inp, btn);