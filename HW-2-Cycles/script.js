let N = Number(prompt('Введіть ціле початкове значення: '));

while(!Number.isInteger(N) || isNaN(N) || N == "") {
	N = Number(prompt('Введіть ЦІЛЕ число без букв'));
}

let M = Number(prompt('Введіть ціле кінцеве значення: '));
while(M == !Number.isInteger(N) || isNaN(N) || N == "" || M <= N) {
	M = Number(prompt('Введіть ЦІЛЕ число без букв, більше за початкове значення'));
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