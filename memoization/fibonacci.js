/**
 * 메모이제이션
 * 불필요한 작업을 피하기 위해서 이전의 연산한 결과를 저장하고 있는 객체를 사용하는 기법.
 */

/**
 * 요구사항
 * 피보나치수열에서 한 항의 값은 앞선 두 항의 값을 더한 값입니다.
 * 
 * 1항부터 10항까지 피보나치수열의 값을 출력합니다.
 * ex) 0:0, 1:1, 2:1, 3:2, 4:3, 5:5, 6:8, 7:13 ..
 * 
 * 메모이제이션 사용 전
 */
var fibonacci = function (i) {
    /**
     * i가 0또는 1이면, 해당 값 출력
     * i가 2이상이면, (i-2)항 (i-1)항의 값을 더해서 출력
     */
    return i < 2 ? i : fibonacci(i - 2) + fibonacci(i - 1);
}

for (var i = 0; i < 10; i++) {
    console.log(`${i} : ${fibonacci(i)}`);
}


console.log(`=================================================`);
console.log(`=================================================`);


/**
 * 메모이제이션 사용 후
 */
var fibonacci_memo = function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 2) + fib(n - 1);
            memo[n] = result;
        }
        return result;
    }
    return fib;
}();

for (var i = 0; i < 10; i++) {
    console.log(`${i} : ${fibonacci_memo(i)}`);
}


console.log(`=================================================`);
console.log(`=================================================`);


/**
 * 한번 더 일반화 작업
 */
var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    }
    return shell;
}

var fibonacci2 = memoizer([0, 1], function (shell, n) {
    return shell(n - 2) + shell(n - 1);
});

for (var i = 0; i < 10; i++) {
    console.log(`${i} : ${fibonacci2(i)}`);
}
