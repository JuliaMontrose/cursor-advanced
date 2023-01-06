//Get random Array with function with 3 arguments
const randomArr = [];

function getRandomArray(length, min, max) {
	for(let i = 0; i < length; i++) {
		randomArr.push(Math.floor(min + Math.random() * (max + 1 - min)));
	}
	return randomArr;
}
console.log(getRandomArray(12, 2, 17));
//////////////////////// Find Average

const numbersArray = [6,2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
let sum = 0;

function getAverage(arr) {
	arr.forEach((num) => { sum += num });
	average = sum / arr.length;
	return average;
}
console.log(getAverage(numbersArray));

/////// Find Median
const numbersList = [6, 2, 55, 11, 78, 2, 55, 77,	57, 87, 23, 2, 56, 3, 2];
function getMedian(numbersList) {
	const {length} = numbersList;
	numbersList.sort((a, b) => a - b);
	if (length % 2 === 0) {
		return (numbersList[length / 2 - 1] + numbersList[length / 2]) / 2;
	}
	return numbersList[(length - 1) / 2];
}
console.log(getMedian(numbersList));
////// Find Mode
const modeNumbers = [6, 2, 55, 11, 78, 2, 55, 77,	57, 87, 23, 2, 56, 3, 2];

function mode(modeArray) {
	let numMapping = {};
	let greatestFreq = 0;
	let moda = 0;
	modeArray.forEach((modeNum) => {
		numMapping[modeNum] = (numMapping[modeNum] || 0) + 1;
		if (greatestFreq < numMapping[modeNum]) {
			greatestFreq = numMapping[modeNum];
			moda = modeNum;
	  }
 	});
	return +moda;
}
console.log(mode(modeNumbers));

//////filterEvenNumbers(...numbers)

const filterTask = [1,2,3,4,5,6];

function filterEvenNumbers(filterArr) {
	let evenNumbersArray = filterArr.filter((num) => num % 2 !== 0);
	return evenNumbersArray;
}
console.log(filterEvenNumbers(filterTask));

//// getDividedByFive(...numbers)
const dividedArr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 100];

function getDividedByFive(argum) {
	let dividedArray = argum.filter((num) => num % 5 === 0);
	return dividedArray;
}
console.log(getDividedByFive(dividedArr));

document.getElementById("task1").innerHTML = getRandomArray(12, 2, 17);
document.getElementById("task2").innerHTML = getAverage(numbersArray);
document.getElementById("task3").innerHTML = getMedian(numbersList);
document.getElementById("task4").innerHTML = mode(modeNumbers);
document.getElementById("task5").innerHTML = filterEvenNumbers(filterTask);
document.getElementById("task6").innerHTML = getDividedByFive(dividedArr);