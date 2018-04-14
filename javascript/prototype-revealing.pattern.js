/**
 * Revealing Prototype 패턴
 * 객체 리터럴을 반환하여 멤버 변수나 메소드를 캡슐화 합니다.
 * prototpye은 상속되기 때문에 기본 기능들을 다시 작성할 필요가 없습니다.
 */
var TeslaModelS = function() {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

TeslaModelS.prototype = function() {
    var go = function() {
        console.log('Rotate wheels');
    };
    
    var stop = function() {
        console.log('Apply break pads');
    };

    return {
        pressBreakPedal: stop,
        pressGasPedal: go
    }
}();

TeslaModelS.prototype.pressBreakPedal();
TeslaModelS.prototype.pressGasPedal();