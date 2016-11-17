'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Greet = (function () {
    function Greet() {
        this.message = 'ecs6 transcription ready!';
    }
    return Greet;
}());
var TestingEcs6 = (function (_super) {
    __extends(TestingEcs6, _super);
    function TestingEcs6() {
        _super.call(this);
        this.message += ' ;)';
    }
    TestingEcs6.prototype.greet = function () {
        var p = document.createElement("p");
        p.innerText = this.message;
        window.document.body.appendChild(p);
    };
    return TestingEcs6;
}(Greet));
var testingEcs6 = new TestingEcs6();
window.onload = function () { testingEcs6.greet(); };
