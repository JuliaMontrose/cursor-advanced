let number = Math.floor(Math.random()*10000);
console.log(number);

function getMaxDigit(number) {
	if(number == 0) { 
		return 0;
	}
	else {
		return Math.max(number % 10, getMaxDigit(Math.floor(number/10)));
	}
}
document.getElementById("random-number").innerHTML = number;
document.getElementById("maxDigit").innerHTML = getMaxDigit(number);



function countLetter(letter, word) {
	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if(word[i] == letter) {
			count += 1;
		}
	}
	return count;
}
document.getElementById("count").innerHTML = countLetter(prompt('Введіть букву, кількість повторювань якої потрібно порахувати'), prompt('Введіть слово'));


function ucFirst(str) {
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
 }
 
 document.getElementById("first").innerHTML = ucFirst(prompt("Введіть слово, яке потрібно відформатувати"));




function randomNumber(N, M) {
	let random = N + Math.random() * (M + 1 - N);
	return Math.floor(random);
}
document.getElementById("random").innerHTML = randomNumber (Number(prompt("Введіть число від якого буде починатися діапазон для рандомного виведення цілого числа")), Number(prompt("Введіть число, яким буде закінчуватися діапазон")));




function removeCharacter(word, letter) {
	let newWord = word.split(letter).join("");
	return newWord;
}
document.getElementById("removed").innerHTML = removeCharacter(prompt("Введіть слово з якого потрібно видалити букву(и): "),prompt("Введіть букву, яку потрібно видалити: "));


function createPassword(length) {
	let password = '';
	const chars = '0123456789';
	let passwordLength = length;

	if (length == 0 || length == undefined) {
		length = 8;
	}
	const array = new Uint32Array(length);
	window.crypto.getRandomValues(array);

	for (i = 0; i<length; i++) {
		password += chars[array[i] % chars.length]
	}

	console.log(password);
	return(password)

}
document.getElementById("password").innerHTML = createPassword(Number(prompt("Введіть бажану кількість символів, яку повинен містити пароль:")));