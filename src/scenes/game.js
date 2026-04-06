class Game extends Phaser.Scene {
	constructor() {
		super("game_scene");
	}

	create(player_bids) {
		this.player_bids = player_bids;

		this.determine_winner();
	}

	determine_winner() {
		console.log(this.player_bids);

		let board_state = [
			-1, -1, -1,
			-1, -1, -1,
			-1, -1, -1,
		];

		let win_counts = [ 0, 0 ];

		for(let i = 0; i < 9; i++) {
			if(this.player_bids[0][i] == this.player_bids[1][i]) {
				continue;
			}

			board_state[i] = +(this.player_bids[1][i] > this.player_bids[0][i]);
		}

		console.log(board_state);

		for(let i = 0; i < 3; i++) {
			let row_winner = -1;
			let column_winner = -1;

			if(board_state[i] == board_state[i + 1] && board_state[i] == board_state[i + 2]) {
				row_winner = board_state[i];
			}

			if(board_state[i] == board_state[i + 3] && board_state[i] == board_state[i + 6]) {
				column_winner = board_state[i];
			}

			if(row_winner > -1) {
				win_counts[row_winner]++;
			}

			if(column_winner > -1) {
				win_counts[column_winner]++;
			}
		}

		if(board_state[0] == board_state[4] && board_state[0] == board_state[8]) { win_counts[board_state[0]]++; }
		if(board_state[2] == board_state[4] && board_state[0] == board_state[6]) { win_counts[board_state[2]]++; }

		let winner = -1;

		if(win_counts[0] != win_counts[1]) { winner = (win_counts[0] < win_counts[1]); }

		console.log(`winner: ${winner}`);
	}
}

