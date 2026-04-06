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

		this.points_remaining = [ 15, 15 ];

		this.scene.launch("bidding_scene");
		this.bidding_scene = this.scene.get("bidding_scene");
		
		this.bidding_scene.events.on("increase_bid", () => {
			this.increment_bid();
		}, this);
	
		this.bidding_scene.events.on("decrease_bid", () => {
			this.decrement_bid();
		}, this);

		this.bidding_scene.events.on("place_bid", () => {
			if(this.tile_index >= 8) {
				this.tile_index = 0;

				if(this.player_index > 0) {
					this.scene.stop("bidding_scene");

					this.scene.launch("game_scene", this.player_bids);

					return;
				}
				
				this.bidding_scene.update_bidstart_text(1);
				this.bidding_scene.update_tileindex_text(0);
				this.bidding_scene.update_bid_text(0);
				this.bidding_scene.update_points_text(15);
				this.player_index++;

				return;
			}

			this.bidding_scene.bid_text.text = 0;
			this.bidding_scene.update_tileindex_text(++this.tile_index);
		}, this);
	}

	increment_bid() {
		if(this.points_remaining[this.player_index] < 1) { return; }

		if(this.player_bids[this.player_index][this.tile_index] < 3) {
			this.bidding_scene.update_bid_text(++this.player_bids[this.player_index][this.tile_index]);
			this.bidding_scene.update_points_text(--this.points_remaining[this.player_index]);
		}
	}

	decrement_bid(player_index, tile_index) {
		if(this.player_bids[this.player_index][this.tile_index] > 0) {
			this.bidding_scene.update_bid_text(--this.player_bids[this.player_index][this.tile_index]);
			this.bidding_scene.update_points_text(++this.points_remaining[this.player_index]);
		}
	}
};

