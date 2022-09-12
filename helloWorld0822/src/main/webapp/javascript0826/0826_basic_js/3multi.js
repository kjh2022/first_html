//multi.js: 구구단 출력


function gugudan(numb) {
    let num = numb;
    let str = '';
    for (let j = 1; j < 10; j++) {
        //str +='<p>'+ i + 'X' + j + '=' + i*j + '</p>';
        str += `<p>${num} * ${j} = ${num*j} </p>`
    }
    return str;
}
let result = gugudan(8);
document.write(result)
// for(let i=2; i<10; i++){
//     for(let j=1; j<10; j++){
//         console.log(i + 'X' + j + '=' + (i*j))
//         str += '<p>' + i + 'X' + j + '=' + (i*j) + '</P>'
//     }
// }
document.write(str);

let numb = 30;
console.log(`numb의 값은 ${numb} 입니다.`);