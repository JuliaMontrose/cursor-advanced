let N = parseInt(prompt('Введіть ціле початкове значення: '));

while(N == null || !Number.isInteger(N)) {
	N = parseInt(prompt('Введіть ЦІЛЕ число без букв'));
}

let M = parseInt(prompt('Введіть ціле кінцеве значення: '));
while(M == null || !Number.isInteger(M)) {
	M = parseInt(prompt('Введіть ЦІЛЕ число без букв'));
}

let boolean = confirm('Чи потрібно пропускати парні числа?');
let sum = 0;

if (boolean == true) {
	for(let i = N; i <= M; i++ ){
	console.log(i)
	    if (i % 2 != 0) {
           sum += i
		 }
		}
} else {
	for(let i = N; i <= M; i++ ){
		console.log(i)
			 if (i % 2 == 0) {
				  sum += i
			 }
			}
}

document.getElementById("result").innerHTML = sum;