//string_charAt.js

//chartAt(index) => 문자 반환

console.log('World'.charAt(2));

function checkGender(no) {
    //남자 / 여자입니다 구별해주는 콘솔을 출력
    let gender = no.replace('-', '').charAt(6);
    // let gender = parseInt(edno.charAt(6));
    if (gender == 1 || gender == 3) {
        console.log('남자입니다.');
    } else if (gender == 2 || gender == 4) {
        console.log('여자입니다.');
    }else{
        console.log('잘못된 주민등록 번호입니다.')
    }
}
    //     switch (gender) {
    //         case 1:
    //         case 3:
    //             console.log('남자입니다.');
    //             break;
    //         case 2:
    //         case 4:
    //             console.log('여자입니다.');
    //             break;
    //         default:
    //             console.log('잘못된 주민등록 번호임')
    //     }
    // }

    checkGender('970301-2545678');
    checkGender('950301-1845678');
    checkGender('9903011395678');
    checkGender('050301-3745678');
    checkGender('090301-4845678');