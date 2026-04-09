// TODO unify! there are 2 sources of truth between this and board.js
const token_sprite_keys = [
	"token-undecided_sprite",
	"x",
	"o",
];

class Token extends Phaser.GameObjects.Sprite {
	constructor(scene, position, state) {
		super(scene, position.x, position.y, token_sprite_keys[state]);

		let color = xColor;
		if(state == 2) { color = oColor; }

		this.setTint(color);

		scene.add.existing(this);
	}
}

