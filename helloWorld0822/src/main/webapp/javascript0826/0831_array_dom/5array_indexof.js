//array_indexof.js

//String.prototype/indexOf()
//Array.prototype/indexOf()

const members = ['진정욱', '노은결', '백나현'];
const newMems = ['김민지', '노은결', '정다슬'];
let pos = members.indexOf('백나현');
console.log(pos + 1); //값이 배열의 몇번째에 있는지 출력


//members배열에 newMems를 추가, 단, 동일한 이름이 있으면 추가 X
//반복문 사용
newMems.forEach(member => {
    //member의 값이 members의 배열에 존재하는지 확인 후 추가
    if (members.indexOf(member) == -1) {
        members.push(member);
    }
});
console.log(members); //= [진정욱, 노은결, 백나현, 김민지, 정다슬 +]
members.push('김민준');
let result = members.some(member => member =='노은경');
result = members.every(member => member.length == 3);
console.log(result);
result = members.find(member => member.startsWith('김'))