/**
 * Module 패턴
 * 자바스크립트에서 특정 구성요소를 다른 구성요소와 독립적으로 유지하는데 가장 널리 사용되는 디자인 패턴입니다.
 * class와 같이 캡슐화를 위해 사용됩니다. 상태 및 동작을 다른 클래스에서 액세스하지 못하도록 합니다.
 */
var HTMLChanger = (function() {
    var contents = 'contents';

    var changeHTML = function() {
        // var element = document.getElementById('attribute-to-change');
        // element.innerHTML = contents;
        console.log('changeHTML');
    }

    return {
        callChangeHTML: function() {
            changeHTML();
            console.log(contents);
        }
    };
})();

HTMLChanger.callChangeHTML();
console.log(HTMLChanger.contents);