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
        this.textX = (this.game.config.width/100) * 2;
        this.textY = (this.game.config.height/100) * 90
        this.add.text(this.textX, this.textY, this.textToShow).setScale(6);
        this.on('pointerdown', () => {
            this.scene.start(this.nextSceneKey);
        })
    }
}

class Title extends TransitionScene {
    constructor() {
        super("Title");
    }

    init() {
        this.textToShow = "Title Screen";
        this.nextSceneKey = "transitionOne";
    }
}

class MessageOne extends TransitionScene {
    constructor() {
        super("messageOne");
    }

    init() {
        this.textToShow = "Watch out for slugs!";
        this.nextSceneKey = "gameplayOne";
    }
}

class MessageTwo extends TransitionScene {
    constructor() {
        super("messageTwo");
    }

    init() {
        this.textToShow = "That's good work!";
        this.nextSceneKey = "messageThree";
    }
}

class MessageThree extends TransitionScene {
    constructor() {
        super("messageThree");
    }

    init() {
        this.textToShow = "Watch out for Snails!";
        this.nextSceneKey = "gameplayTwo";
    }
}

class MessageFour extends TransitionScene {
    constructor() {
        super("messageFour");
    }

    init() {
        this.textToShow = "Good job!";
        this.nextSceneKey = "messageFive";
    }
}

class MessageFive extends TransitionScene {
    constructor() {
        super("messageFive");
    }

    init() {
        this.textToShow = "This is the last level!";
        this.nextSceneKey = "gameplayThree";
    }
}

let game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    scene: [Title]
})