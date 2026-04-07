class Bidding extends Phaser.Scene {
	constructor() {
		super("bidding_scene");
	}

	create() {
		this.bidstart_text = this.add.bitmapText(
			this.cameras.main.width / 2.0,
			50.0,
			"winkymilky",
			"",
			48
		).setOrigin(0.5, 0.5);

		this.tileindex_text = this.add.bitmapText(
			100.0,
			100.0,
			"winkymilky",
			"",
			32
		).setOrigin(0.5, 0.5);

		this.bid_text = this.add.bitmapText(
			100.0,
			150.0,
			"winkymilky",
			"",
			32
		).setOrigin(0.5, 0.5);

		this.raise_bid_button = this.add.sprite(
			100.0,
			225.0,
			"button"
		).setInteractive().on("pointerdown", () => {
			this.events.emit("increase_bid");
		}).setOrigin(0.5, 0.5);

		this.raise_bid_text = this.add.bitmapText(
			100.0,
			225.0,
			"winkymilky",
			"Raise",
			24
		).setOrigin(0.5, 0.5);

		this.lower_bid_button = this.add.sprite(
			100.0,
			300.0,
			"button"
		).setInteractive().on("pointerdown", () => {
			this.events.emit("decrease_bid");
		}).setOrigin(0.5, 0.5);

		this.lower_bid_text = this.add.bitmapText(
			100.0,
			300.0,
			"winkymilky",
			"Lower",
			24
		).setOrigin(0.5, 0.5);

		this.place_bid_button = this.add.sprite(
			100.0,
			375.0,
			"button"
		).setInteractive().on("pointerdown", () => {
			this.events.emit("place_bid");
		}).setOrigin(0.5, 0.5);

		this.place_bid_text = this.add.bitmapText(
			100.0,
			375.0,
			"winkymilky",
			"Bid",
			24
		).setOrigin(0.5, 0.5);

		this.points_text = this.add.bitmapText(
			this.cameras.main.width / 2.0,
			100.0,
			"winkymilky",
			"15",
			32
		).setOrigin(0.5, 0.5);

		this.update_bidstart_text(0);
		this.update_tileindex_text(0);
		this.update_bid_text(0);
		this.update_points_text(15);
	}

	update_bidstart_text(player_index) {
		this.bidstart_text.text = `Player ${player_index + 1}, place your bids!`;
	}

	update_tileindex_text(tile_index) {
		this.tileindex_text.text = `Bid for tile ${tile_index + 1}:`;
	}

	update_bid_text(bid) {
		this.bid_text.text = `${bid}`;
	}

	update_points_text(points) {
		this.points_text.text = `Points remaining: ${points}`;
	}
}

