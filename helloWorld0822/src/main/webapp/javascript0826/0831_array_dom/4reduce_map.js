//reduce_map.js

//Array.prototype.map(); 매핑 (A라는 값을 A' 로 변환)
//Array.prototype.filter(); 필터링(A라는 값에서 조건을 만족하는것만 a로 변환)

const names = ['이현성', '이주훈', '황용주', '최승현'];

// let members = names.map((name, idx) => {
//     let obj = {};
//     obj.name = name;
//     obj.sno = idx + 1; // {name : '이현성', sno : 1}, {name~}
//     //                    이런 형태의 값으로 변환됨
//     return obj;
// });
// console.log(members);

//ㄴ위의 표현식을 아래처럼 간편하게 줄임
let mapfnc = (name, idx) => {
    let obj = {};
    obj.name = name;
    obj.sno = idx + 1;
    return obj;
}

// let lees = members.filter((member) => {
//     //return값이 true이면 반환, false이면 반환 안하게
//     return member.name.startsWith('이');
// });
// console.log(lees);

//ㄴ위의 표현식을 아래처럼 간편하게 줄임
let filfnc = (member) => {
    return member.name.startsWith('이');
};

//연쇄함수.연속함수 
let result = names.map((name, idx) => {
    let obj = {};
    obj.name = name;
    obj.sno = idx + 1;
    return obj;
}).filter((member) => {
    return member.name.startsWith('황');
});
//방법1, map, filter 메소드 사용
//map 메소드
let members = names.map(mapfnc);
console.log(members)
//filter메소드
let lees = members.filter(filfnc);
console.log(lees);
//map.filter 메소드체인
let chainResult = names.map(mapfnc).filter(filfnc);
console.log(result);

console.clear();








//reduce로 map과 같은 기능 구현
// members = names.reduce((acc, val, idx) => {
//     let obj = {};
//     obj.name = val;
//     obj.sno = idx + 1;
//     acc.push(obj); //[{name : '이현성', sno : 1}, {name : '이주훈', sno : 2},~~]
//     return acc;
// }, []);
// console.log(members);

let reduceMapFnc = (acc, val, idx) => {
    let obj = {};
    obj.name = val;
    obj.sno = idx + 1;
    acc.push(obj);
    return acc;
}

//reduce로 filter와 같은 기능 구현
// lees = members.reduce((acc, val) => {
//     if (val.name.startsWith('이')) {
//         acc.push(val);
//     }
//     return acc;
// }, []);
// console.log(lees);

// let reduceFilFnc = (acc, val) => {
//     if (val.name.startsWith('황')) {
//         acc.push(val);
//     }
//     return acc;
// }

let reduceFilFnc = (acc, val) => {
    if (val.name.startsWith('이')) {
        acc.push(val);
    }
    return acc;
}


//방법2
//reduce로 map과 같은 기능 구현
members = names.reduce(reduceMapFnc, []);
console.log(members);

lees = members.reduce(reduceFilFnc, []);
console.log(lees);

result = names.reduce(reduceMapFnc, []).reduce(reduceFilFnc, [])
console.log(result);