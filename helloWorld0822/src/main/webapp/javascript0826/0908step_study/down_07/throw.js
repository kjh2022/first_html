// 기본
try {
    // 예외를 강제로 발생시킵니다.
    throw '예외가 발생했습니다';
} catch (exception) {
    // 예외 객체를 출력합니다.
    console.log('예외가 발생했습니다.');
    console.log(exception);
}

// Error 객체를 사용한 예외 강제 발생  
try {
    // 예외 객체를 만듭니다.
    const error = new Error('메시지');
    error.name = '내 마음대로 오류';
    error.message = '오류의 메시지';
    // 예외를 발생시킵니다.
    throw error;
} catch (exception) {
    // 예외 객체를 출력합니다.
    console.log(`${exception.name} 예외가 발생했습니다.`);
    console.log(exception.message);
}