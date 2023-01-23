const ukraine = { 
	tax: 0.195, 
	middleSalary: 1789, 
	vacancies: 11476 
};
const latvia = { 
	tax: 0.25, 
	middleSalary: 1586, 
	vacancies: 3921 
};
const litva = { 
	tax: 0.15, 
	middleSalary: 1509, 
	vacancies: 1114 
};

//Task 1 
function getMyTaxes(salary) {
	let number = this.tax * salary;
	return number;
}

console.log(getMyTaxes.call(litva, 3000));

//Task 2
function getMiddleTaxes() {
	let number = this.tax * this.middleSalary;
	return number;
}

console.log(getMiddleTaxes.call(ukraine));

//Task 3
function getTotalTaxes() {
	let number = this.tax * this.middleSalary * this.vacancies;
	return number;
}

console.log(getTotalTaxes.call(ukraine));

//Task 4
function getMySalary() {
	let getMySalary = {};
	let randomSalary = 1500 + Math.random() * (2000 + 1 - 1500);
	getMySalary.salary = randomSalary;
	getMySalary.taxes = this.tax;
	getMySalary.profit = randomSalary - this.tax;
	return getMySalary;
};
console.log(getMySalary.call(litva));

let timerId = setInterval(() => console.log(getMySalary.call(litva)), 10000);
