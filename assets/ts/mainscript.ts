interface ITaskRunner {
    greet(dest:HTMLElement): void;
}

class TaskRunner implements ITaskRunner {
    greet(dest:HTMLElement){
        dest.innerHTML = '';
        var span1 = document.createElement("h1");
        var span2 = document.createElement("h2");
        span1.innerText = 'Hi npm !';
        span2.innerText = 'Gulp, hold my beer...';
        dest.appendChild(span1);
        setTimeout(function () {
            dest.appendChild(span2);
        }, 1000);

    }
}

var taskRunner = new TaskRunner();
