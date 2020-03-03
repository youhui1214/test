(function (global,number, factory) {
    
    
    console.log(global)
    
    global.Person =factory(number, 'fff')
    
    console.log(global.Person)
    
    
})(this, 100, function (num, type) {
    
    if (num === 100) {
        console.log('tt100')
    }
    
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    
    Person.prototype.getName = function () {
        console.log('getName', this.name);
    };
    
    return Person;
});
