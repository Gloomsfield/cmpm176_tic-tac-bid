class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() { 
    console.log("menu scene");

        //Title
        this.title = this.add.bitmapText(game.config.width/2, 50, 'winkymilky', 'Tic-Tac-Bid', 48).setOrigin(0.5).setTint(0x00000);

        this.add.image(game.config.width + 10, game.config.height, 'bidBlue').setOrigin(1, 1);
        this.add.image(-10, game.config.height, 'bidPurple').setOrigin(0, 1);
        this.add.image(game.config.width + 10, game.config.height / 3, 'bidOrange').setOrigin(1, 1);
        this.add.image(-10, game.config.height / 3, 'bidRed').setOrigin(0, 1);

        //X and O sprite creation
        this.xsprite = this.add.image(game.config.width/3, game.config.height / 4, 'x').setTint(xColor).setOrigin(0.5);
        this.add.bitmapText(this.xsprite.x, this.xsprite.y + 140, 'winkymilky', 'Choose a color!', 24).setOrigin(0.5).setTint(0x000000);
        this.osprite = this.add.image(game.config.width/1.5, game.config.height / 4, 'o').setTint(oColor).setOrigin(0.5);
        this.add.bitmapText(this.osprite.x, this.osprite.y + 140, 'winkymilky', 'Choose a color!', 24).setOrigin(0.5).setTint(0x000000);

        // Color selection rectangles xOffset
        this.xOffset = 30;

        // Color selection rectangles for X and O
        for(let i = 0; i < 7; i++) {
            this.add.rectangle(this.xsprite.x - 95 + this.xOffset * i, this.xsprite.y + 100, 20, 20, colors[i]).setInteractive().on('pointerdown', () => {
                this.xsprite.setTint(colors[i]);
                xColor = colors[i];
            });
        }

        for(let i = 0; i < 7; i++) {
            this.add.rectangle(this.osprite.x - 95 + this.xOffset * i, this.osprite.y + 100, 20, 20, colors[i]).setInteractive().on('pointerdown', () => {
                this.osprite.setTint(colors[i]);
                oColor = colors[i];
            });
        }

        //Start game button
        this.startButton = this.add.sprite(game.config.width/2, game.config.height - 100, 'button').setInteractive().setScale(1.5);
        this.add.bitmapText(this.startButton.x, this.startButton.y, 'winkymilky', 'Start Game', 24).setOrigin(0.5).setTint(0x000000);
        this.startButton.on('pointerover', () => {
            this.startButton.setFrame(1);
        });
        this.startButton.on('pointerout', () => {
            this.startButton.setFrame(0);
        });
        //======================================== Start play scene ========================================
        this.startButton.on('pointerdown', () => {
            this.scene.start('play_scene');
        });

        // Rules button
        this.ruleButton = this.add.sprite(game.config.width / 3, game.config.height / 1.5, 'button').setInteractive().setTint(0xff6000).setScale(1.5);
        this.add.bitmapText(this.ruleButton.x, this.ruleButton.y, 'winkymilky', 'Rules', 24).setOrigin(0.5).setTint(0x000000);
        this.ruleButton.on('pointerover', () => {
            this.ruleButton.setFrame(1);
        });
        this.ruleButton.on('pointerout', () => {
            this.ruleButton.setFrame(0);
        });

        // How to Play button
        this.howToPlayButton = this.add.sprite(game.config.width/1.5, game.config.height / 1.5, 'button').setInteractive().setTint(0x00ff00).setScale(1.5);
        this.add.bitmapText(this.howToPlayButton.x, this.howToPlayButton.y, 'winkymilky', 'How to play', 24).setOrigin(0.5).setTint(0x000000);
        this.howToPlayButton.on('pointerover', () => {
            this.howToPlayButton.setFrame(1);
        });
        this.howToPlayButton.on('pointerout', () => {
            this.howToPlayButton.setFrame(0);
        });
    }
}
