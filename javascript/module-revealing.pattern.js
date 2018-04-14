/**
 * Revealing Module 패턴
 * 모듈 패턴과 동일하나 객체 리터럴에서 반환하는 변수, 메서드들을 명시적으로 나타내는 패턴입니다.
 */
var Exposer = (function() {
    var privateVariable = 10;

    var parivateMethod = function() {
        console.log('Exposer Object, private method: privateMethod');
        privateVariable++;
    }

    var pulbicMethod = function() {
        console.log('Exposer Object, public method: pulbicMethod');
    }

    var otherMethod = function() {
        console.log('Exposer Object, public method: otherMethod');
        parivateMethod();
    }

    return {
        first: pulbicMethod,
        second: otherMethod
    };
})();

Exposer.first();
Exposer.second();