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
//------------------------------------------基础类型
function greeter(person) {
    return "hello world";
}
var user = "gweid";
var isLoad = false;
// 函数没有返回值
function warnUser() {
    alert("哈哈哈哈");
}
// 只有 undefine 也可以赋值给 void
var a = undefined;
// Symbol
// const sym = Symbol("title")
// any
var str = 4;
str = "nihaoaooao1";
// unknown 与 any 的区别
// 我们看到, 这就是 unknown 与 any 的不同之处, 虽然它们都可以是任何类型,
// 但是当 unknown 类型被确定是某个类型之前, 它不能被进行任何操作比如实例化、getter、函数执行等等。
var val; // true
val = "kkkk"; // true
val = 12345; // true
val = true; // true
val = {}; // true
val = []; // true
// val.foo.name = [] // true
// val[0][1] = [] // true
// val() // true
var val1;
val1 = "kkkk"; // true
val1 = 12345; // true
val1 = true; // true
val1 = {}; // true
val1 = []; // true
// val1.foo.name = []     // false
// val1[0][1] = []        // false
// val1()                 // false
// 数组与元组
// 使用泛类型定义数组
var list = [1, 2, 3];
// 第二种（常用）
var arr = [1, 2, 3];
arr.push(4);
console.log(arr[3]);
// 元组 元组类型与数组类型非常相似，表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var arr1 = ["name", 123];
// 元组与数组的不同之处：元组的类型如果多出或者少于规定的类型是会报错的，必须严格跟事先声明的类型一致才不会报错。
// const arr2: [string, number] = ["132", 123, 456] // false
// Typescript 允许向元组中使用数组的 push 方法插入新元素(但不允许访问插入的属性)
var arr3 = ["123", 123];
arr3.push("1");
console.log(arr3); // true
// console.log(arr3[2]) // false
//---------------------------------------------- 枚举
// 枚举 值为数字具有正反向映射特性
var Dd;
(function (Dd) {
    Dd[Dd["Up"] = 10] = "Up";
    Dd["aa"] = "aa";
})(Dd || (Dd = {}));
console.log(Dd.Up);
console.log(Dd[10]);
// 枚举合并
var obj;
(function (obj) {
    obj["a"] = "a";
    obj["b"] = "b";
})(obj || (obj = {}));
(function (obj) {
    obj["c"] = "c";
})(obj || (obj = {}));
// const getUserName = (user: any) => user.name
var getUserName = function (user) { return user.name; };
function getArea(config) {
    var square = 0;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
// 因为需要传入的是 width ，此时传了 height，会报错
// 解决：第一种， 使用断言
var ret = getArea({ height: 5 });
console.log(ret);
function getArea2(config) {
    var square = 0;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
var ret2 = getArea2({ height: 10 });
console.log(ret2);
//-------------------------------------- 类(Class)
// 用 abstract 定义抽象类和在抽象类内部定义抽象方法
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("move");
    };
    return Animal;
}());
// 注意： 不能直接实例化抽象类，通常需要我们创建子类继承基类,然后可以实例化子类。
// const animal = new Animal()  // 报错
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
var cat = new Cat();
cat.move();
