class Board extends Phaser.Scene {
	constructor() {
		super("board_scene");
	}

	create(data) {
		for(let i = 0; i < 9; i++) {
			this.time.delayedCall(350 * (i + 1), this.claim_tile, [ i, data.state[i] ], this);
		}

		this.time.delayedCall(4000, this.declare_winner, [ data.winner ], this);
	}

	tile_index_to_screen_pos(tile_index) {
		let tile_size = 100.0;

		return new Phaser.Math.Vector2(
			tile_size * (tile_index % 3),
			tile_size * Math.floor(tile_index / 3)
		);
	}

	claim_tile(tile_index, new_state) {
		if(new_state < 0) { return; }

		this.test = new Token(this, this.tile_index_to_screen_pos(tile_index), new_state + 1);
	}

	declare_winner(winner) {
		let win_text = "";

		if(winner == -1) {
			win_text = "A tie!";
		}

		if(winner == 0) {
			win_text = "X wins!";
		}

		if(winner == 1) {
			win_text = "O wins!";
		}

		this.add.bitmapText(
			game.config.width / 2.0, game.config.height / 2.0, "winkymilky", win_text, 72
		).setOrigin(0.5, 0.5);
	}
}

