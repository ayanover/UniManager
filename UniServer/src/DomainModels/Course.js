class Course {
    constructor(data) {
        this.id = data.course_id;
        this.name = data.name;
        this.code = data.code;
        this.credits = data.credits;
        this.semester = data.semester;
        this.mandatory = data.mandatory;
        this._program = null;
        this._professor = null;
        this._students = [];
    }

    get program() {
        return this._program;
    }

    set program(program) {
        this._program = program;
    }

    get professor() {
        return this._professor;
    }

    set professor(professor) {
        this._professor = professor;
    }

    get students() {
        return this._students;
    }

    set students(students) {
        this._students = students;
    }
}

module.exports = Course;