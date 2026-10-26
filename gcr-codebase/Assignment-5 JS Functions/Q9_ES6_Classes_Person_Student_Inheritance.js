// Q9: ES6 Classes - Person and Student Inheritance
// This version behaves like the constructor/prototype version from Q5.

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls Person's constructor to initialize name.
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Aarav", "Computer Science");
student.showName();
student.showBranch();

console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true

// Like the prototype version, Student inherits showName() from Person
// and defines its own showBranch() method.
