/**
 * Prototype 패턴
 * prototype 모델은 주로 성능이 중요한 상황에서 객체를 생성하는데 사용됩니다.
 * prototype은 상속이 가능합니다.
 */
var TeslaModelS = function() {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

TeslaModelS.prototype = {
    go: function() {
        console.log('Rotate wheels');
    },
    stop: function() {
        console.log('Apply break pads');
    }
};

TeslaModelS.prototype.go();
TeslaModelS.prototype.stop();