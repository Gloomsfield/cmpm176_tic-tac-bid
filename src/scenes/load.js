class Load extends Phaser.Scene {
    constructor() {
        super('loadScence');
    }

    preload() {
            

        this.load.image('board', './assets/art/board.png'); //Board image
        this.load.image('x', './assets/art/X.png'); // X image
        this.load.image('o', './assets/art/O.png'); // O image

        //Loading font
        this.load.font('winkymilky', './assets/fonts/WinkyMilky.ttf');
    }

    create() {


        this.scene.start('menuScene');
    }
}