// Q5: Constructor Functions - Person and Student Inheritance

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); // Initialize inherited name property.
    this.branch = branch;
}

// Link Student.prototype to Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Aarav", "Computer Science");
student.showName();
student.showBranch();

// Demonstrate the prototype chain.
console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); // true
