// 기본
function test() {
    try {
        // 예외를 발생시킵니다.
        const array = new Array(-2000);
    } catch (exception) {
        console.log(`${exception.name} 예외가 발생했습니다.`);
        console.log('함수가 종료되었습니다.');
    }
}
test();

// catch 구문 내부에서 return 키워드 사용 - finally 구문을 사용하지 않았을 때 
function test() {
    try {
        // 예외를 발생시킵니다.
        const array = new Array(-2000);
    } catch (exception) {
        console.log(`${exception.name} 예외가 발생했습니다.`);
        return; 
        console.log('함수가 종료되었습니다.');
    }
}
test();

// catch 구문 내부에서 return 키워드 사용 - finally 구문을 사용했을 때 
function test() {
    try {
        // 예외를 발생시킵니다.
        const array = new Array(-2000);
    } catch (exception) {
        console.log(`${exception.name} 예외가 발생했습니다.`);
        return; 
    } finally {
        console.log('함수가 종료되었습니다.');
    }
}
test();