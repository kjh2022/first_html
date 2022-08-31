//6array_ex1.js
const data = `[{"id":1,"first_name":"Jakie","last_name":"Ellicombe","email":"jellicombe0@blogtalkradio.com","gender":"Male","salary":1226},
               {"id":2,"first_name":"Lorrie","last_name":"Bucktrout","email":"lbucktrout1@usgs.gov","gender":"Male","salary":5974},
               {"id":3,"first_name":"Dar","last_name":"Thaxter","email":"dthaxter2@unesco.org","gender":"Male","salary":6609},
               {"id":4,"first_name":"Frederigo","last_name":"Shew","email":"fshew3@nature.com","gender":"Genderqueer","salary":8068},
               {"id":5,"first_name":"Gustavo","last_name":"Mcwhinnie","email":"gmcwhinnie4@nps.gov","gender":"Male","salary":5343},
               {"id":6,"first_name":"Marina","last_name":"Moynihan","email":"mmoynihan5@symantec.com","gender":"Female","salary":9826},
               {"id":7,"first_name":"Clary","last_name":"Elcocks","email":"celcocks6@nsw.gov.au","gender":"Female","salary":7663},
               {"id":8,"first_name":"Herschel","last_name":"Gooke","email":"hgooke7@cnn.com","gender":"Male","salary":4304},
               {"id":9,"first_name":"Raleigh","last_name":"Duncanson","email":"rduncanson8@vk.com","gender":"Male","salary":1613},
               {"id":10,"first_name":"Roley","last_name":"Fellini","email":"rfellini9@cargocollective.com","gender":"Male","salary":8922},
               {"id":11,"first_name":"Evonne","last_name":"Gowman","email":"egowmana@opensource.org","gender":"Female","salary":6087},
               {"id":12,"first_name":"Rob","last_name":"Faircliff","email":"rfaircliffb@jiathis.com","gender":"Male","salary":9033},
               {"id":13,"first_name":"Ade","last_name":"McDowall","email":"amcdowallc@senate.gov","gender":"Male","salary":6936},
               {"id":14,"first_name":"Trent","last_name":"Bowers","email":"tbowersd@theatlantic.com","gender":"Male","salary":4487},
               {"id":15,"first_name":"Leonidas","last_name":"O'Dempsey","email":"lodempseye@si.edu","gender":"Male","salary":5355}]`

let result = JSON.parse(data); //string ->object 변환
result.forEach(element => {
    // console.log(element.first_name);
});

//성별이 female이고 salary가 5000이상인 사람 str에 담아서 리스트로 출력하기
// let str;
// str += '<ul>';
// let reductFiltFnc = ((acc, val) =>{
//     if(val.salary > 5000 && val.gender == Feamle){
//         acc.push(val)
//     }
//     return acc;
// });
// str += `<li>${}<li>`;
// str += '</ul>';

// document.write(str); // ul>li 15 carolin vanyakin 5500 </li></ul>

// let str = result.reduce((acc, val, idx) => {
//     if (idx == 0) {
//         acc = '<ul>';
//     }
//     if (val.gender == 'Female' && val.salary > 5000) {
//         acc += `<li>${val.id} ${val.first_name} ${val.last_name} ${val.salary}</li>`
//     }
//     if (idx == result.length - 1) {
//         acc += '</ul>';
//     }
//     return acc;
// }, {});
// document.write(str);

let str = result.forEach((member, idx)=>{
    if(idx == 0){
        str = '<ul>';
    }
    if(member.gender == 'Female' && member.salary>5000){

        str += '<li>'
        for(prop in member){
            str += `<span>${member[prop]}</span>`
        }
        str += '</li>';
    }
    if(idx == result.length -1){
        str = '</ul>';
    }
    return str;
},'');
document.write(str);