class Bidding extends Phaser.Scene {
	constructor() {
		super("bidding_scene");
	}

	create() {
		this.bidstart_text = this.add.bitmapText(
			this.cameras.main.width / 2.0,
			50.0,
			"winkymilky",
			"Player 1, place your bids!",
			48
		).setOrigin(0.5, 0.5);

		this.tileindex_text = this.add.bitmapText(
			100.0,
			100.0,
			"winkymilky",
			"Bid for tile 1:",
			32
		).setOrigin(0.5, 0.5);

		this.bid_text = this.add.bitmapText(
			100.0,
			150.0,
			"winkymilky",
			"0",
			32
		);

		this.raise_bid_button = this.add.sprite(
			100.0,
			200.0,
			"button"
		).setInteractive().on("pointerdown", () => {
			this.events.emit("increase_bid");
		});

		this.place_bid_button = this.add.sprite(
			100.0,
			250.0,
			"button"
		).setInteractive().on("pointerdown", () => {
			this.events.emit("place_bid");
		})
	}
}

