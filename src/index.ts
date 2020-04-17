//------------------------------------------基础类型
function greeter(person: string) {
    return "hello world"
}

const user: string = "gweid"

const isLoad: boolean = false

// 函数没有返回值
function warnUser(): void {
    alert("哈哈哈哈")
}

// 只有 undefine 也可以赋值给 void
const a: void = undefined

// Symbol
// const sym = Symbol("title")

// any
let str: any = 4
str = "nihaoaooao1"

// unknown 与 any 的区别
// 我们看到, 这就是 unknown 与 any 的不同之处, 虽然它们都可以是任何类型,
// 但是当 unknown 类型被确定是某个类型之前, 它不能被进行任何操作比如实例化、getter、函数执行等等。
let val: any // true
val = "kkkk" // true
val = 12345 // true
val = true // true
val = {} // true
val = [] // true
// val.foo.name = [] // true
// val[0][1] = [] // true
// val() // true

let val1: unknown
val1 = "kkkk" // true
val1 = 12345 // true
val1 = true // true
val1 = {} // true
val1 = [] // true
// val1.foo.name = []     // false
// val1[0][1] = []        // false
// val1()                 // false

// 数组与元组
// 使用泛类型定义数组
const list: Array<number> = [1, 2, 3]
// 第二种（常用）
const arr: number[] = [1, 2, 3]
arr.push(4)
console.log(arr[3])

// 元组 元组类型与数组类型非常相似，表示一个已知元素数量和类型的数组，各元素的类型不必相同。
const arr1: [string, number] = ["name", 123]
// 元组与数组的不同之处：元组的类型如果多出或者少于规定的类型是会报错的，必须严格跟事先声明的类型一致才不会报错。
// const arr2: [string, number] = ["132", 123, 456] // false
// Typescript 允许向元组中使用数组的 push 方法插入新元素(但不允许访问插入的属性)
const arr3: [string, number] = ["123", 123]
arr3.push("1")
console.log(arr3) // true
// console.log(arr3[2]) // false

//---------------------------------------------- 枚举
// 枚举 值为数字具有正反向映射特性
enum Dd {
    Up = 10,
    aa = "aa",
}
console.log(Dd.Up)
console.log(Dd[10])

// 枚举合并
enum obj {
    a = "a",
    b = "b",
}
enum obj {
    c = "c",
}

// ------------------------------------ 接口(interface)
// 这个接口 User 描述了参数 user 的结构，当然接口不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
interface User {
    name: string
    age: number
}
// const getUserName = (user: any) => user.name
const getUserName = (user: User) => user.name

// 可选属性 键值可能存在或者不存在
interface User1 {
    name: string
    age?: number
}

// 只读属性 当确定 user 的性别之后就不允许就改了，interface 可以保证这一点吗？
interface User2 {
    name: string
    age?: number
    readonly isMale: boolean
}
// const setUserMale = (user: User2) => user.isMale = false  // 会报错，不能修改

// 接口内有函数
// 1、直接内部描述
interface User3 {
    name: string
    say: (str: string) => string
}
// 2、外部定义后使用
interface Say {
    (str: string): string
}
interface User4 {
    name: string
    say: Say
}

// 属性检查
interface Config {
    width?: number
}
function getArea(config: Config): { area: Number } {
    let square: number = 0
    if (config.width) {
        square = config.width * config.width
    }

    return { area: square }
}
// 因为需要传入的是 width ，此时传了 height，会报错
// 解决：第一种， 使用断言
let ret: object = getArea({ height: 5 } as Config)
console.log(ret)
// 解决：第二种， 添加字符串索引签名：这样Config可以有任意数量的属性，并且只要不是width，那么就无所谓他们的类型是什么了。
interface Config2 {
    width?: number
    [propName: string]: any
}
function getArea2(config: Config2): { area: number } {
    let square: number = 0
    if (config.width) {
        square = config.width * config.width
    }
    return { area: square }
}
let ret2: Object = getArea2({ height: 10 })
console.log(ret2)
// 除非有万不得已的情况，不建议采用上述方法。

// 可索引类型 比如 email 是一个对象，里面有几个键值对不确定
interface Email {
    [name: string]: string
}
interface Admin {
    name: string
    say: Function
    email: Email
}

// 继承接口
interface VipAdmin extends Admin {
    level: number
}
// 继承多个接口
interface VipAdmin extends User, Admin {
    level: number
}

//-------------------------------------- 类(Class)
// 用 abstract 定义抽象类和在抽象类内部定义抽象方法
abstract class Animal {
    move(): void {
        console.log("move")
    }
}
// 注意： 不能直接实例化抽象类，通常需要我们创建子类继承基类,然后可以实例化子类。
// const animal = new Animal()  // 报错
class Cat extends Animal {}
const cat = new Cat()
cat.move()

// 类的访问限定
// public 在 TypeScript 的类中，成员都默认为 public, 被此限定符修饰的成员是可以被外部访问。
