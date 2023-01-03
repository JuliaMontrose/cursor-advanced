const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const boys = students.filter((el) => el.slice(-1) !== "а");
const girls = students.filter((el) => el.slice(-1) === "а");

const getPairs = (boys, girls) => {
	let pair = [];
	for(let i = 0; i < boys.length; i++) {
		pair = [...pair, [girls[i], boys[i]]];
	}
	return pair;
};
const pair = getPairs(boys, girls);
console.log(pair);

const addThemestoPairs = (boys, girls, themes) => {
	let addedThemes = [];
	for(let i = 0; i < boys.length; i++) {
		addedThemes = [...addedThemes,[girls[i], boys[i], themes[i]]];
	}
	return addedThemes;
}
const addedThemes = addThemestoPairs(boys, girls, themes);
console.log(addedThemes);

const addMarks = (students, marks) => {
	let getMarks = [];
	for(let i = 0; i < students.length; i++) {
		getMarks = [...getMarks, [students[i], marks[i]]];
	}
	return getMarks;
}
const getMarks = addMarks(students, marks);
console.log(getMarks);

const getRandomMarks = [];
for(let i = 0; i < 3; i++) {
	getRandomMarks.push(Math.floor(Math.random()*5 + 1));
}
console.log(getRandomMarks);

const getPairsMarks = (boys, girls, themes, getRandomMarks) => {
	let pairMarks = [];
	for(let i = 0; i < boys.length; i++) {
		pairMarks = [...pairMarks, [boys[i], girls[i], themes[i], getRandomMarks[i]]];
	}
	return pairMarks;
}
const pairMarks = getPairsMarks(boys, girls, themes, getRandomMarks);
console.log(pairMarks);

document.getElementById("students").innerHTML = students;
document.getElementById("pair-1").innerHTML = pair[0];
document.getElementById("pair-2").innerHTML = pair[1];
document.getElementById("pair-3").innerHTML = pair[2];

document.getElementById("pair1-theme").innerHTML = addedThemes[0];
document.getElementById("pair2-theme").innerHTML = addedThemes[1];
document.getElementById("pair3-theme").innerHTML = addedThemes[2];

document.getElementById("student-1").innerHTML = getMarks[0];
document.getElementById("student-2").innerHTML = getMarks[1];
document.getElementById("student-3").innerHTML = getMarks[2];
document.getElementById("student-4").innerHTML = getMarks[3];
document.getElementById("student-5").innerHTML = getMarks[4];
document.getElementById("student-6").innerHTML = getMarks[5];

document.getElementById("mark-1").innerHTML = pairMarks[0];
document.getElementById("mark-2").innerHTML = pairMarks[1];
document.getElementById("mark-3").innerHTML = pairMarks[2];