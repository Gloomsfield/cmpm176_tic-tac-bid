class Play extends Phaser.Scene {
	constructor() {
		super("play_scene");
	}

	create() {
		this.player_index = 0;
		this.tile_index = 0;

		this.player_bids = [
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
			[ 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
		];


		this.scene.launch("bidding_scene");
		
		this.scene.get("bidding_scene").events.on("increase_bid", () => {
			this.increment_bid();
		}, this);
	
		this.scene.get("bidding_scene").events.on("decrease_bid", () => {
			this.decrement_bid();
		}, this);

		this.scene.get("bidding_scene").events.on("place_bid", () => {
			if(this.tile_index >= 8) {
				if(this.player_index > 0) {
					this.scene.get("bidding_scene").stop();

					this.scene.launch("game_scene");

					return;
				}
				
				this.player_index++;

				return;
			}

			this.tile_index++;
		}, this);
	}

	increment_bid() {
		if(this.player_bids[this.player_index][this.tile_index] < 3) {
			this.scene.get("bidding_scene").bid_text.text = ++this.player_bids[this.player_index][this.tile_index];
		}
	}

	decrement_bid(player_index, tile_index) {
		if(this.player_bids[this.player_index] > 0) {
			this.scene.get("bidding_scene").bid_text.text = --this.player_bids[this.player_index][this.tile_index];
		}
	}
};

