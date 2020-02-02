
var mod = require('./lib');

console.log(mod);
console.log(mod.counter); // 3

mod.addCounter();

console.log(mod.counter); // 3

/*
* CommonJS 输出是值的拷贝，即原来模块中的值改变不会影响已经加载的该值，
* ES6静态分析，动态引用，输出的是值的引用，值改变，引用也改变，即原来模块中的值改变则该加载的值也改变。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
CommonJS 加载的是整个模块，即将所有的接口全部加载进来，ES6 可以单独加载其中的某个接口（方法），
CommonJS this 指向当前模块，ES6 this 指向undefined
CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
ES6 模块的运行机制与 CommonJS 不一样。
JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。
等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。
* */
