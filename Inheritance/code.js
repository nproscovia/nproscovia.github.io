// Exercise 1
String.prototype.filter = function(...bannedwords) {
    if (!bannedwords) {
        return this.toString();
    }

    return this.split(' ').filter(a => !bannedwords.includes(a)).join(' ');
};

// Exercise 2

Array.prototype.bubbleSort = function() {
    let checked = false;
    while (!checked) {
        checked = true;
        for (let i = 1; i < this.length; i++) {
            if (this[i-1] > this[i]) {
                checked = false;
                [this[i], this[i-1]] = [this[i-1], this[i]];
            }
        }
    }
    return this;
};

// Exercise 3
const Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}


const Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
 
    console.log(this.name + ' is now teaching ' + subject);
    return this.name + ' is teaching ' + subject;
};

