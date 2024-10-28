class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return `${this.name} (${this.email})`;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log("Invalid name or email");
            return false;
        }

        for (const student of this.students) {
            if (student.email === studentToRegister.email) {
                console.log(`${studentToRegister.email} is already registered`);
                return false;
            }
        }

        this.students.push(studentToRegister);
        console.log(`Successfully registered ${studentToRegister.name} for ${this.name}`);
        return true;
    }

    listStudents() {
        if (this.students.length === 0) {
            console.log(`No students are registered to the ${this.name} bootcamp.`);
            return false;
        }

        console.log(`The students registered in ${this.name} are:`);
        this.students.forEach(student => {
            console.log(`${student.name} (${student.email})`);
        });
        return true;
    }

    getInfo() {
        return `${this.name} - Level: ${this.level}`;
    }

    removeStudent(email) {
        this.students = this.students.filter(student => student.email !== email);
        console.log(`${email} has been removed from ${this.name}`);
    }
}

// Testing
const testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
const reactBootcamp = new Bootcamp("React", "Advanced");

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if (attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};

runTest(reactBootcamp, testStudent);
