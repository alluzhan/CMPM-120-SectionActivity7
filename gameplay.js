class TransitionScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }

    init() {
        console.log("replace with actual text");
        this.textToShow = "placeholder"
        this.nextSceneKey = "Title";
    }

    preload() {

    }

    create() {
        this.textX = (this.game.config.width/100);
        this.textY = (this.game.config.height/100);
        this.add.text(this.textX * 2, this.textY * 90, this.textToShow).setScale(6);
        this.add.text(this.textX * 62, this.textY * 5, "Tap Screen To Continue").setScale(3);
        this.input.on('pointerdown', () => {
            this.scene.start(this.nextSceneKey);
        })
    }
}

class Title extends TransitionScene {
    constructor() {
        super("title");
    }

    init() {
        this.textToShow = "Title Screen";
        this.nextSceneKey = "message1";
    }
}

class Message1 extends TransitionScene {
    constructor() {
        super("message1");
    }

    init() {
        this.textToShow = "Watch out for slugs!";
        this.nextSceneKey = "gameplay1";
    }
}

class Gameplay1 extends Phaser.Scene {
    constructor() {
        super("gameplay1");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, "Gameplay: two slugs\nPress W = Win\nPress L = Lose", {
                fontSize: "64px",
                align: "center"
            }).setOrigin(0.5);

        this.input.keyboard.on('keydown-W', () => {
            this.scene.start("message2");
        });

        this.input.keyboard.on('keydown-L', () => {
            this.scene.start("title");
        });
    }
}

class Message2 extends TransitionScene {
    constructor() {
        super("message2");
    }

    init() {
        this.textToShow = "That's good work!";
        this.nextSceneKey = "message3";
    }
}

class Message3 extends TransitionScene {
    constructor() {
        super("message3");
    }

    init() {
        this.textToShow = "Watch out for Snails!";
        this.nextSceneKey = "gameplay2";
    }
}

class Gameplay2 extends Phaser.Scene {
    constructor() {
        super("gameplay2");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, "Gameplay: two snails\nPress W = Win\nPress L = Lose", {
                fontSize: "64px",
                align: "center"
            }).setOrigin(0.5);

        this.input.keyboard.on('keydown-W', () => {
            this.scene.start("message4");
        });

        this.input.keyboard.on('keydown-L', () => {
            this.scene.start("title");
        });
    }
}

class Message4 extends TransitionScene {
    constructor() {
        super("message4");
    }

    init() {
        this.textToShow = "Good job!";
        this.nextSceneKey = "message5";
    }
}

class Message5 extends TransitionScene {
    constructor() {
        super("message5");
    }

    init() {
        this.textToShow = "This is the last level!";
        this.nextSceneKey = "gameplay3";
    }
}

class Gameplay3 extends Phaser.Scene {
    constructor() {
        super("gameplay3");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, "Gameplay: both snails and slugs\nPress W = Win\nPress L = Lose", {
                fontSize: "64px",
                align: "center"
            }).setOrigin(0.5);

        this.input.keyboard.on('keydown-W', () => {
            this.scene.start("message6");
        });

        this.input.keyboard.on('keydown-L', () => {
            this.scene.start("title");
        });
    }
}

class Message6 extends TransitionScene {
    constructor() {
        super("message6");
    }

    init() {
        this.textToShow = "The roly poly gets a badge!";
        this.nextSceneKey = "victory";
    }
}

class Victory extends TransitionScene {
    constructor() {
        super("victory");
    }

    init() {
        this.textToShow = "Victory Screen";
        this.nextSceneKey = "title";
    }
}

const config = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    scene: [Title, Message1, Gameplay1, Message2, Message3, Gameplay2, Message4, Message5, Gameplay3, Message6, Victory],
    title: "Roly Poly: To the End"
})