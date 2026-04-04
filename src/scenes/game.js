class Game extends Phaser.Scene {
	constructor() {
		super("game_scene");
	}

	create(player_bids) {
		this.player_bids = player_bids;
		console.log(this.player_bids);
	}
}

