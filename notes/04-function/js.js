//колбэк функции

function func() {
    console.log(123);
}

function funcArg(callBackFunc) {
    callBackFunc();
}

funcArg(func);
