class Title extends Phaser.Scene {
    constructor() {
        super("title");
    }

    create() {
        this.add.text(960, 540, 'Title Screen' )
            .setOrigin(0.5).setFontSize(100);

        this.input.on('pointerdown', () => {
            this.scene.start("message1");
        });
    }
}

class Message1 extends Phaser.Scene {
    constructor() {
        super("message1");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, "Watch out for slugs!")
            .setOrigin(0.5).setFontSize(100);

        this.input.on('pointerdown', () => {
            this.scene.start("gameplay1");
        });
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

class Message2 extends Phaser.Scene {
    constructor() {
        super("message2");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, "That's good work!")
            .setOrigin(0.5).setFontSize(100);

        this.input.on('pointerdown', () => {
            this.scene.start("message3");
        });
    }
}

class Message3 extends Phaser.Scene {
    constructor() {
        super("message3");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, "Watch out for snails!")
            .setOrigin(0.5).setFontSize(100);

        this.input.on('pointerdown', () => {
            this.scene.start("gameplay2");
        });
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

class Message4 extends Phaser.Scene {
    constructor() {
        super("message4");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, "Good job!")
            .setOrigin(0.5).setFontSize(100);

        this.input.on('pointerdown', () => {
            this.scene.start("message5");
        });
    }
}

class Message5 extends Phaser.Scene {
    constructor() {
        super("message5");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, "This is the last level!")
            .setOrigin(0.5).setFontSize(100);

        this.input.on('pointerdown', () => {
            this.scene.start("gameplay3");
        });
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

class Message6 extends Phaser.Scene {
    constructor() {
        super("message6");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, "The roly poly gets a badge!")
            .setOrigin(0.5).setFontSize(100);

        this.input.on('pointerdown', () => {
            this.scene.start("victory");
        });
    }
}

class Victory extends Phaser.Scene {
    constructor() {
        super("victory");
    }

    create() {
        this.cameras.main.fadeIn(2000);
        this.add.text(960, 540, 'Victory Screen' )
            .setOrigin(0.5).setFontSize(100);

        this.input.on('pointerdown', () => {
            this.scene.start("title");
        });
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