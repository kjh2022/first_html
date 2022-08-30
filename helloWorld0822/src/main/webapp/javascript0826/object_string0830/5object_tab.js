//object_tab.js
//members, addmember, showList => table태그로 값 반환
function Table(param){
    this.members = param;

    this.addMember = function(member){ //멤버 추가 함수
        this.members.push(member);
    }

    this.showList = function(){ //table 태그 생성부
        let str = '<table border = "1px;">';

        this.members.forEach((val, idx) => {

            if(idx == 0){
                str += '<tr>';
                for(let prop in val){
                    str += `<th style="width: 60px;">${prop}</th>`;
                }
                str+= '</tr>';
            }

            str += '<tr>'
            for(let members in val){
                str+= `<td style = "text-align : center; height:28px;">${val[members]} </td>`
            }
        });
        str += '</tr>'
        str += '</table>'
        return str;
    }
}

let members =[
    {id: 'user1', name: '홍길동', age: 20},
    {id: 'user2', name: '박두희', age: 22},
    {id: 'user3', name: '김민규', age: 25}]

let t1 = new Table(members); //table객체 만듦

t1.addMember({id: 'user5', name: '최규식', age:27});
t1.addMember({id: 'user4', name: '정준하', age:72});
let str = t1.showList();
document.write(str);