/**
 * Singleton 패턴
 * 객체 하나의 자원을 공유해야 하는 경우 사용하는 패턴입니다.
 */
var printer = (function () {
    var printerInstance;
    
    function create() {
        function print() {
            console.log('print');
        }

        function turnOn() {
            console.log('turn on');
        }

        return {
            print: print,
            turnOn: turnOn
        }
    }

    return {
        getInstance: function() {
            if(!printerInstance) {
                printerInstance = create();
            }
            return printerInstance;
        }
    }

    function Singleton() {
        if(!printerInstance) {
            printerInstance = initialize();
        }
    }
})();

