/**
 * @Title      : Observer Pattern
 * @Description:
 *              The Observer pattern offers a subscription model in which
 *              objects subscribe to an event and get notified when the event occurs.
 *              This pattern is the cornerstone of event driven programming, including JavaScript.
 *              The Observer pattern facilitates good object-oriented design and promotes loose coupling.
 * @author    : Vaishnavi Bhosale
 */

function Click() {
    this.handlers = [];  // observers
}
 
Click.prototype = {
 
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    fire: function(o, thisObj) {
        var scope = thisObj || this.window;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
 
// log helper 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();
 
function run() {
 
  //clickHandler() has a function signature that can be invoked when Subject changes (i.e. event occurs)
    var clickHandler = function(item) { //Observers
        log.add("fired: " + item); 
    };
 
    var click = new Click();
 
    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
 
    log.show();
}

run();
