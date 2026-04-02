// tic-tac-bid!
// by amory acosta and nick marigo

let config = {
	type: Phaser.WEBGL,
	width: 800,
	height: 600,
	backgroundColor: '#FACADE',
	scene: [ Load, Menu ]
};

const game = new Phaser.Game(config);

let colors = [0xff0000, 0xff7f00, 0xffff00, 0x00ff00, 0x0000ff, 0x4b0082, 0x9400d3];

let xColor = 0xff0000;
let oColor = 0x0000ff;