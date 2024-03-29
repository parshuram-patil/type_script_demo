"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Constants = require("./GoodConstants");
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.add = function () {
        console.log("Add Method");
    };
    A.prototype.sub = function () {
        console.log("Sub Method");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.test = function () {
        this.add();
        this.sub();
    };
    B.prototype.div = function () {
        console.log("Div Method");
        return Constants.ConfigConstant.a / Constants.ConfigConstant.c;
    };
    return B;
}(A));
var b = new B();
b.test();
console.log(b.div());
