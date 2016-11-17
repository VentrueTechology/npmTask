'use strict';
class Greet {
    message:string;
    constructor(){
        this.message = 'ecs6 transcription ready!'
    }
}
class TestingEcs6 extends Greet{
    constructor(){
        super()
        this.message += ' ;)'
    }
    greet() {
        let p = document.createElement("p")
        p.innerText = this.message
        window.document.body.appendChild(p)
    }
}
let testingEcs6 = new TestingEcs6()

window.onload = ()=>{testingEcs6.greet()}