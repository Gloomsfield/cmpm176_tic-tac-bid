class Game extends Phaser.Scene {
	constructor() {
		super("game_scene");
	}

	create() {
		this.player_index = 0;

		this.player_bids = [
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
		];

		this.add.sprite(50, 50, "increase-bid_sprite").setInteractive().on("pointerdown", () => {
			this.increment_bid(this.player_index, this.tile_index);
		});
	}

	this.increment_bid(player_index, tile_index) {
		if(player_bids[player_index][tile_index] < 3) {
			player_bids[player_index][tile_index]++;
		}
	}

	this.decrement_bid(player_index, tile_index) {
		if(player_bids[player_index] > 0) {
			player_bids[player_index][tile_index]--;
		}
	}
}

