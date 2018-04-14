/**
 * Observer 패턴
 * 어플리케이션에서 한 부분이 변경되었을때 다른 부분들도 같이 변경되어야 하는 경우 사용되는 패턴입니다.
 * 객체가 수정되면 종속 객체에 broadcast 합니다.
 * 
 * 간단 설명
 * - Subject, Observer 객체가 존재합니다.
 * - Subject는 변경되는 객체를 말합니다.
 * - Observer는 변경되는 객체에 의존한 객체를 말합니다. (많게 존재할 수 있습니다.)
 * - Subject는 Observer를 배열로 관리하고, 등록/삭제/알리기 기능이 있습니다.
 * - Observer는 Subject의 알림을 받을 수 있습니다.
 */
var Subject = function() {
    var observers = [];

    return {
        subscribeObserver: function(observer) {
            observers.push(observer);
        },
        unsubscribeObserver: function(observer) {
            var index = observers.indexOf(observer);
            if(index > -1)
                observers.splice(index, 1);
        },
        notifyObserver: function(observer) {
            var index = observers.indexOf(observer);
            if(index > -1)
                observers[index].notify(index);
        },
        notifyAllObservers: function() {
            for(var i = 0; i < observers.length; i++)
                observers[i].notify(i);
        }
    }
};

var Observer = function() {
    return {
        notify: function(index) {
            console.log("Observer" + index + "is notified!");
        }
    }
};

var subject = new Subject();
var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();
var observer5 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);
subject.subscribeObserver(observer5);

// subject.notifyObserver(observer2);
subject.notifyAllObservers();

