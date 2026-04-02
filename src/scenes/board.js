const tile_size = 100;

class TileState {
	static undecided = 0;
	static x = 1;
	static o = 2;
}

class Board extends Phaser.Scene {
	constructor() {
		super("board_scene");
	}

	create() {
		this.board_state = [
			TileState.undecided, TileState.undecided, TileState.undecided,
			TileState.undecided, TileState.undecided, TileState.undecided,
			TileState.undecided, TileState.undecided, TileState.undecided,
		];
	}

	tile_index_to_screen_pos(tile_index) {
		return new Phaser.Math.Vector2(
			tile_size * (tile_index % 3),
			tile_size * Math.floor(tile_index / 3)
		);
	}

	claim_tile(tile_index, new_state) {
		this.board_state[tile_index] = new_state;

		new Token(this, tile_index_to_screen_pos(tile_index), new_state);
	}
}

