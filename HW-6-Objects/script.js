const students = [{
		name: "Tanya",
		course: 3,
		subjects: {
			math: [4, 4, 3, 4],
			algorithms: [3, 3, 3, 4, 4, 4],
			'data science': [5, 5, 3, 4]
		}
	}, {
		name: "Victor",
		course: 4,
		subjects: {
			physics: [5, 5, 5, 3],
			economics: [2, 3, 3, 3, 3, 5],
			geometry: [5, 5, 2, 3, 5]
	}
	}, {
	name: "Anton",
	course: 2,
	subjects: {
		statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
		english: [5, 3],
		cosmology: [5, 5, 5, 5]
	}
	}];

// First task

let getSubjects = (students) => {
	let studSub = new Array(Object.keys(students.subjects).map(function(element) {
		return element[0].toUpperCase(1) + element.slice(1).replace(" ", "_");
	}));
	return studSub;
}
console.log(getSubjects(students[1]));

// Second task

let marks = [];

let getAverageMark = (students) => {
	let marksArr = Object.values(students.subjects);
	let marks = marksArr[0].concat(marksArr[1], marksArr[2]);
	let averageMark =  marks.reduce((sum, value) => sum + value, 0)/ marks.length;
	return averageMark.toFixed(2);
}

console.log(getAverageMark(students[0]));

// Third task

let getStudentInfo = students.map((student) => {
    return {
        course: student.course,
        name: student.name,
        highestGrade: getAverageMark(student)
    };
});
console.log(getStudentInfo[0]);

// Fourth task

let getStudentsName = (students) => {
	return students.map((student) => student.name).sort();
}
console.log(getStudentsName(students));

// Fifth task

let getStudentAverMark = students.map((student) => {
    return {
        name: student.name,
        averMark: getAverageMark(student)
    };
});

let getBestStudent = getStudentAverMark.sort((a,b) => {
	return b.averMark - a.averMark;
});

console.log(getBestStudent[0].name);

// Sixth task

function calculateWordLetters(word) {
	let info = {};
	word = word.split("");
	word.forEach((l) => (info[l] = (info[l]) ? ++info[l] : 1));
	return info
}
console.log(calculateWordLetters('test'));