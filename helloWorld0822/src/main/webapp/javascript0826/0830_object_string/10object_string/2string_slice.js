//2string_slice.js 문장을 잘라냄

let str = 'Good, Morning!';

console.log(str.slice(2, 8));//index기준 2~7(6번째 까지, 7번째 미포함)
console.log(str.slice(2)); //index:2부터 끝까지

console.log(str.slice(2, -2));
//index 2부터 index : 12까지 (총 문자열14개 중에 -2를 뺀 만큼의 길이까지만 출력)

console.log(str.slice(-2));//index끝자리 2개 단어만 가져옴(14 -2)

console.log(str.substring(0, 7));
//substr(3, 5); index: 3부터 5개의 문자를 가져온다는 뜻

//index값으로 첫번째 글자가 몇번째에 위치 있는지 자리값 반환
console.log(str.indexOf('orn'));
//해당 단어가 없는 경우 -1로 반환해준다, lastIndex는 뒤에서부터 검산
console.log('Good Morning, Good Afternoon'.lastIndexOf('Good'));
console.log(('Good Morning, Good Afternoon').toLowerCase().lastIndexOf('morning'));

console.clear();

str = 'Good Morning, Good Afternoon, Good Evening';
let position = str.indexOf('Good', str.indexOf('Good') +1); // => 0
console.log(position); //두번째 Good이라는 문자가 있는 위치의 인덱스를 가져오기


//문자열에서 반복되는 구문의 횟수 출력하기
let cnt = 0;
let pos = str.indexOf('Good');

while(pos != -1){
    cnt++;
    pos = str.indexOf('Good', pos + 1);
}
console.log(cnt + '회 나옵니다.')

const members =[
    {name:"황병근" , age: 25},
    {name:"김효은" , age: 30},
    {name:"이상욱" , age: 19},
    {name:"최규하" , age: 29}
]
let searchKey = prompt('찾을 이름 입력');
//members 배열에서 searchKey를 찾아서 나이를 콘솔에 출력되도록 하기
members.forEach(member => {
    if(member.name.includes(searchKey)){
        console.log(member.name + '은 ' + member.age + '살 입니다.')
    }
    // if()
});



// members.forEach((member, idx) =>{
//     if(searchKey == member.name){
//     console.log(member.age);
//     }
//     if(idx == (members.length -1) && searchKey == 0){
//         console.log('존재하지 않는 이름입니다.')
//     }
// })