//object_this.js

//1.객체에서 this는 객체를 가리킴
//2.함수에서의 this는 전역객체(window)를 가리킴
//3.이벤트에서 this는 이벤트를 받는 대상을 가리킴

let obj = {}
// console.log(this); //window

obj.act = function () { //메소드, obj라는 객체를 처리중인 영역
    this.value = 'default value'; //속성

    function innerAct() {
        this.value = 'innerAct value';
        console.log('innerAct는 : ' + this.value); //innerAct라는 메소드 (함수)안에서 this가 출력되어 윈도우를 가리킴
    }
    function innerReact(caller){
        caller.value = 'innerReact value';
        console.log('this.value는 123 : ' + this.value); //전역객체 (innerReact 출력되야함)
        console.log('caller.value는 : ' + caller.value);
    }
    innerAct();
    console.log('obj 객체의 this.value 1 : ' + this.value);
    
    innerReact(this);
    console.log('obj 객체의 this.value2 : ' + this.value);
}

obj.act();


//이벤트.
let btn = document.createElement('button'); //<button></button> 버튼 만들기
btn.innerHTML = '클릭';
btn.onclick = function(){
    console.log(this); //이벤트를 받는 대상
}

document.querySelector('body').append(btn); //body태그의 하위요소
console.log(btn);
