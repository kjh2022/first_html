// 함수 선언
function callTenTimes(callback) {
    if (callback) {
        for (let i = 0; i < 10; i++) {
            callback();
        }
    } else {
        console.log('매개 변수 callback이 지정되지 않았습니다.');
    }
}
// 정상 실행
callTenTimes(function () { console.log('안녕하세요'); });
// 예외 발생
callTenTimes();