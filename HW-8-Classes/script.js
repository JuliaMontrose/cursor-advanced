class Students {
	constructor (university, course, fullName) {
		this.university = university;
		this.course = course;
		this.fullName = fullName;
		this.getInfo();
		this.mark = [5, 4, 4, 5];
		this.active = true;
	}
	getInfo () {
		return ("Студент "+this.course+"го курсу "+this.university+","+this.fullName);
	}

	get marks () {
		if (this.active) {
			return this.mark;
		}
		else {
			return null;
		}
	}

	set marks (value) {
		if (this.active) {
			this.marks.push(value);
		}
	}

	getAverageMark () {
		return this.marks.reduce((sum, current) => sum + current, 0)/this.mark.length;
	}

	dismiss() {
		this.active = false;
	}

	recover () {
		this.active = true;
	}
}

const student1 = new Students('NULP', 3, 'Yuliia Kolba');
console.log(student1.getInfo());

student1.marks = 5;
console.log(student1.marks);

console.log(student1.getAverageMark());

student1.dismiss()
console.log("Student dismissed");

student1.marks = 4;
console.log(student1.marks);

student1.recover();
console.log("Student recovered");

student1.marks = 4;
console.log(student1.marks);