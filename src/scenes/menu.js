class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
    
        this.load.image('board', './assets/art/board.png');
        this.load.image('x', './assets/art/X.png');
        this.load.image('o', './assets/art/O.png');

        //Loading font
        this.load.font('winkymilky', './assets/fonts/WinkyMilky.ttf');

    }

    create() { 
    console.log("menu scene");
        //this.add.image(game.config.width/2, game.config.height/2, 'board');
        this.xsprite = this.add.image(game.config.width/2, game.config.height/2, 'x').setTint(0xFF0000);
        this.osprite = this.add.image(game.config.width/2, game.config.height/2, 'o').setTint(0x0000FF);

        this.yOffset = 30;

        for(let i = 0; i < 7; i++) {
            this.add.rectangle(10, 10 + this.yOffset * i, 20, 20, colors[i]).setInteractive().on('pointerdown', () => {
                this.xsprite.setTint(colors[i]);
            });
        }

        for(let i = 0; i < 7; i++) {
            this.add.rectangle(50, 10 + this.yOffset * i, 20, 20, colors[i]).setInteractive().on('pointerdown', () => {
                this.osprite.setTint(colors[i]);
            });
        }

        this.add.rectangle(500, 500, 100, 50, 0x00FF00);
    }
}