//for_test2.js
const arr = [];
//arr[arr.length] = 10;

arr.push(10);
arr.push(20);

let obj = {
    sname: 'Hong',
    age: 20,
    friends: ['제이박'],
    addFriend: function (friend) {
        this.friends.push(friend);
    },
    friendList: function(){
        //친구의 이름을 콘솔에 출력시키기위한 함수
        this.friends.forEach(val => {
            console.log(val.name);
        });
    }
}

obj.addFriend('frk');
obj.addFriend({name:'Hong', phone: '010-010-010'});

console.log(obj.friends[2].phone);
obj.friendList();