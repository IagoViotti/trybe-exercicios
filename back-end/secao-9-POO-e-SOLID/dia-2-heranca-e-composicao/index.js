var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Crie uma classe chamada _Superclass_.
var Superclass = /** @class */ (function () {
    function Superclass() {
        // _isSuper_ deve ser setado como `true` na inicialização.
        this.isSuper = true;
    }
    // A _Superclass_ deve possuir um método público chamado `sayHello`, que deve imprimir "Olá mundo!".
    Superclass.prototype.sayHello = function () {
        console.log('Olá mundo!');
    };
    return Superclass;
}());
// Crie uma classe chamada _Subclass_ que herda da _Superclass_.
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Subclass;
}(Superclass));
// Crie uma função `myFunc` fora do escopo da _Subclass_ que recebe um objeto da _Superclass_.
var myFunc = function (object) {
    // Dentro dessa função, chame o método `sayHello` do objeto passado como parâmetro.
    object.sayHello();
};
// Crie um objeto da _Superclass_ e outro da _Subclass_.
var sup = new Superclass();
var sub = new Subclass();
// Chame a função `myFunc` 2 vezes, passando os objetos criados.
myFunc(sup);
myFunc(sub);
