class Load extends Phaser.Scene {
    constructor() {
        super('loadScence');
    }

    preload() {
            

        this.load.image('board', './assets/art/board.png'); //Board image
        this.load.image('x', './assets/art/X.png'); // X image
        this.load.image('o', './assets/art/O.png'); // O image
        this.load.image('bidBlue', './assets/art/bidBlue.png');
        this.load.image('bidPurple', './assets/art/bidPurple.png');
        this.load.image('bidOrange', './assets/art/bidOrange.png');
        this.load.image('bidRed', './assets/art/bidRed.png');

        //Button
        this.load.spritesheet('button', '/assets/art/button.png', {frameWidth: 110, frameHeight: 60});

        //Loading font
        this.load.bitmapFont('winkymilky', './assets/fonts/winkymilky.png', './assets/fonts/winkymilky.xml');
    }

    create() {

        /*this.button = this.add.sprite(game.config.width/2, game.config.height/2, 'button').setInteractive();
        this.button.on('pointerover', () => {
            this.button.setFrame(1);
        });
        this.button.on('pointerout', () => {
            this.button.setFrame(0);
        });*/


        this.scene.start('menuScene');
    }
}