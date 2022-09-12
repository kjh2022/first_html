try {
    // 예외를 발생시킵니다.
    error.error.error();
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}