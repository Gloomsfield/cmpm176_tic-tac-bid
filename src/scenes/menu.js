class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
    
        this.load.image('board', './assets/art/board.png');
        this.load.image('x', './assets/art/X.png');
        this.load.image('o', './assets/art/O.png');

    }

    create() { 
    
        //this.add.image(game.config.width/2, game.config.height/2, 'board');
        this.xsprite = this.add.image(game.config.width/2, game.config.height/2, 'x')
        this.xsprite.setTint(0xFF0000);

    }
}