// TODO unify! there are 2 sources of truth between this and board.js
const token_sprite_keys = [
	"token-undecided_sprite",
	"token-x_sprite",
	"token-o_sprite",
];

class Token extends Sprite {
	constructor(scene, position, state) {
		super(scene, position.x, position.y, token_sprite_keys[state]);
	}
}

