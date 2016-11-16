var TaskRunner = (function () {
    function TaskRunner() {
    }
    TaskRunner.prototype.greet = function (dest) {
        dest.innerHTML = '';
        var span1 = document.createElement("h1");
        var span2 = document.createElement("h2");
        span1.innerText = 'Hi npm !';
        span2.innerText = 'Gulp, hold my beer...';
        dest.appendChild(span1);
        setTimeout(function () {
            dest.appendChild(span2);
        }, 1000);
    };
    return TaskRunner;
}());
var taskRunner = new TaskRunner();
