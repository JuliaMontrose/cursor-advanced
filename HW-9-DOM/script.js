const cube = document.getElementById("cube");
const blocks = 25;

function generateBlocks () {
	for(let i = 0; i < blocks; i++) {
		const block = document.createElement("div");
		block.className = "block";
		const color = random_bg_color();
		block.style.background = color;
		cube.append(block);
	}
}

function random_bg_color() {
	let x = Math.floor(Math.random() * 256);
	let y = Math.floor(Math.random() * 256);
	let z = Math.floor(Math.random() * 256);
	let bgColor ="rgb(" + x + "," + y + "," + z + ")";
	return bgColor;
};

generateBlocks();