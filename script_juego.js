class x {
    constructor(i, t) {
        this.ctx = i;
        this.deviceIsMobile = t;
        if (this.deviceIsMobile) {
            this.x = -80;
            this.y = 200;
            this.width = 170;
            this.height = 75;
        } else {
            this.x = 0;
            this.y = 200;
            this.width = 340;
            this.height = 150;
        }
        this.img = new Image();
        this.img.src = "imgs/0-avion.png";
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        };
    }
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    move() {
        if (this.deviceIsMobile) {
            this.x += 3;
            this.y -= 3;
        } else {
            this.x += 5;
            this.y -= 4;
        }
    }
}

class w {
    constructor(i, t, s, e, h) {
        this.ctx = i;
        this.x = e;
        this.y = 0;
        this.width = 1203;
        this.height = s;
        this.backgroundSpeed = h;
        this.img = new Image();
        this.img.src = t;
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        };
    }
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    move() {
        this.x -= this.backgroundSpeed;
    }
}

class b {
    constructor(i, t, s) {
        this.ctx = i;
        this.deviceIsMobile = t;
        this.todoRectoSinMiedo = s;
        if (this.deviceIsMobile) {
            this.x = 50;
            this.y = 260;
            this.width = 50;
            this.height = 50;
        } else {
            this.x = 400;
            this.y = 370;
            this.width = 100;
            this.height = 100;
        }
        this.vy = 0;
        this.img = new Image();
        this.img.src = "imgs/patos-sprites.png";
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        };
        this.horizontalFrames = 3;
        this.verticalFrames = 1;
        this.xFrame = 0;
        this.yFrame = 0;
        this.tick = 0;
        this.rotationAngle = 0;
        this.space = false;
        this.play = false;
        this.pause = false;
    }
    draw() {
        this.ctx.save();
        this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        this.ctx.rotate(this.rotationAngle * Math.PI / 180);
        this.ctx.drawImage(this.img, this.img.width * this.xFrame / this.horizontalFrames, this.img.height * this.yFrame / this.verticalFrames, this.img.width / this.horizontalFrames, this.img.height / this.verticalFrames, -this.width / 2, -this.height / 2, this.width, this.height);
        this.ctx.restore();
        this.tick++;
        this.animation(0, 0, 3);
    }
    animation(i, t, s) {
        this.yFrame = i;
        if (this.tick % 10 === 0) {
            this.xFrame += 1;
            if (this.xFrame >= s || this.xFrame < t) {
                this.xFrame = t;
            }
        }
    }
    move(i) {
        this.y += this.vy;
        this.rotationAngle = this.vy * 5;
        if (i) {
            if (this.deviceIsMobile) {
                this.x += 2;
                this.vy -= 0.04;
            } else {
                this.x += 6;
                this.vy -= 0.07;
            }
        } else {
            if (!this.todoRectoSinMiedo) {
                this.vy += 0.2;
            }
        }
    }
    onClick() {
        this.vy = -5;
    }
}

class f {
    constructor(i, t, s) {
        this.deviceIsMobile = t;
        if (this.deviceIsMobile) {
            this.height = 70;
        } else {
            this.height = 93;
        }
        this.backgroundHeight = s;
        this.ctx = i;
        this.x = 0;
        this.y = s - this.height;
        this.width = 1210;
        this.img = new Image();
        this.img.src = "imgs/suelo.png";
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        };
    }
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class n {
    constructor(i, t, s, e, h) {
        this.ctx = i;
        this.deviceIsMobile = e;
        this.startingPoint = h;
        this.pipeColor = s;
        if (this.deviceIsMobile) {
            this.x = this.startingPoint ? this.startingPoint : 1300;
            this.y = t;
            this.width = 15;
            this.height = 440;
            this.speed = 3.5;
        } else {
            this.x = this.startingPoint ? this.startingPoint : 1300;
            this.y = t;
            this.width = 15;
            this.height = 750;
            this.speed = 5;
        }
        this.img = new Image();
        this.img.src = "imgs/pipes/tuboDiaBottom.webp";
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        };
        this.img2 = new Image();
        this.img2.src = "imgs/pipes/tuboNocheBottom.webp";
        this.img2.isReady = false;
        this.img2.onload = () => {
            this.img.isReady = true;
        };
        if (this.deviceIsMobile) {
            this.imgwidth = 65;
            this.height = 440;
            this.imgX = this.x - (this.imgwidth - this.width) / 2;
            this.imgY = t;
        } else {
            this.imgwidth = 95;
            this.height = 750;
            this.imgX = this.x - (this.imgwidth - this.width) / 2;
            this.imgY = t;
        }
    }
    draw(i) {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0)";
        this.ctx.fillRect(this.x, this.y + 5, this.width, this.height);
        let t = this.y - this.height - i;
        if (this.ctx.fillRect(this.x, t - 5, this.width, this.height), this.pipeColor === "day") {
            this.ctx.drawImage(this.img, this.imgX, this.y, this.imgwidth, this.height);
            let s = this.y - this.height - i;
            this.ctx.save();
            this.ctx.translate(this.x + this.imgwidth / 2, s + this.height / 2);
            this.ctx.rotate(Math.PI);
            this.ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.imgwidth, this.height);
            this.ctx.restore();
        } else if (this.pipeColor === "night") {
            this.ctx.drawImage(this.img2, this.imgX, this.y, this.imgwidth, this.height);
            let s = this.y - this.height - i;
            this.ctx.save();
            this.ctx.translate(this.x + this.imgwidth / 2, s + this.height / 2);
            this.ctx.rotate(Math.PI);
            this.ctx.drawImage(this.img2, -this.width / 2, -this.height / 2, this.imgwidth, this.height);
            this.ctx.restore();
        }
    }
    move() {
        this.x -= this.speed;
        this.imgX -= this.speed;
    }
}

class r {
    constructor(i, t, s, e, h) {
        this.ctx = i;
        this.deviceIsMobile = s;
        this.startingPoint = e;
        if (this.deviceIsMobile) {
            this.cuelloWidth = 15;
            this.cuelloHeight = h;
            this.width = 45;
            this.height = 300;
            this.realStartingPoint = (this.width - this.cuelloWidth) / 2;
            this.x = this.startingPoint ? this.startingPoint - this.realStartingPoint : 1300 - this.realStartingPoint;
            this.y = t + this.cuelloHeight;
            this.speed = 3.5;
        } else {
            this.cuelloWidth = 15;
            this.cuelloHeight = h;
            this.width = 55;
            this.height = 600;
            this.realStartingPoint = (this.width - this.cuelloWidth) / 2;
            this.x = this.startingPoint ? this.startingPoint - this.realStartingPoint : 1300 - this.realStartingPoint;
            this.y = t + this.cuelloHeight;
            this.speed = 5;
        }
    }
    draw(i) {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0)";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        let t = this.y - this.height - i - this.cuelloHeight * 2;
        this.ctx.fillRect(this.x, t, this.width, this.height);
    }
    move() {
        this.x -= this.speed;
    }
}

class v {
    constructor(i) {
        this.ctx = i;
        this.todoRectoSinMiedo = true; // INICIALIZACION DE TODO RECTO SIN MIEDO
        this.victory = false;
        this.victoryTime = 0;
        this.pipeColor = "day";
        this.deviceIsMobile = this.isMobile();
        this.backgroundSpeed = 2.5;
        if (this.isMobile()) {
            this.canvasHeight = 640;
            this.backgroundHeight = 640;
            this.pipesInterval = 60;
            this.cuelloHeight = 45;
            this.spaceBetweenPipes = 250;
            this.spaceBetweenPipesDecrease = 0.014;
            this.obstacleArr = [
                new n(i, 450, this.pipeColor, this.deviceIsMobile, 600),
                new n(i, 400, this.pipeColor, this.deviceIsMobile, 900),
                new n(i, 500, this.pipeColor, this.deviceIsMobile, 1200)
            ];
            this.obstacleArr2 = [
                new r(i, 450, this.deviceIsMobile, 600, this.cuelloHeight),
                new r(i, 400, this.deviceIsMobile, 900, this.cuelloHeight),
                new r(i, 500, this.deviceIsMobile, 1200, this.cuelloHeight)
            ];
        } else {
            this.canvasHeight = 900;
            this.backgroundHeight = 900;
            this.pipesInterval = 70;
            this.cuelloHeight = 70;
            this.spaceBetweenPipes = 320;
            this.spaceBetweenPipesDecrease = 0.013;
            this.obstacleArr = [];
            this.obstacleArr2 = [];
        }
        this.canvasWidth = 1200;
        this.backgroundsAll = this.generateBackgroundsArray();
        this.backgroundsAllCurrent = this.backgroundsAll;
        this.backgroundsDibujados;
        this.player = new b(this.ctx, this.deviceIsMobile, this.todoRectoSinMiedo);
        this.intervalId;
        this.pipeMinY;
        this.pipeMaxY;
        this.counterGeneratePipe = 0;
        this.drawPipe = true;
        this.avion = new x(this.ctx, this.deviceIsMobile);
        this.suelo = new f(this.ctx, this.deviceIsMobile, this.backgroundHeight);
        this.counter = 0;
        this.counterLoops = 1;
        this.dia = 2;
        this.diaYhora;
        this.remainingTime = 5;
        this.soundCrash = new Audio("sounds/flappyhit.mp3");
        this.soundCrash.volume = 0.5;
        this.soundFlap = new Audio("sounds/flappyflap.mp3");
        this.soundFlap.volume = 0.5;
        this.theme = new Audio("sounds/samba.mp3");
        this.theme.volume = 0.5;
        this.countDownSound = new Audio("sounds/countdown.mp3");
        this.countDownSound.volume = 0.5;
    }
    generateBackgroundsArray() {
        let i;
        if (this.deviceIsMobile) {
            i = [
                { path: "imgs/background/m1-1.webp" },
                { path: "imgs/background/m1-2.webp" },
                { path: "imgs/background/m1-3.webp" },
                { path: "imgs/background/m1-4.webp" },
                { path: "imgs/background/m1-5.webp" },
                { path: "imgs/background/m2-1.webp" },
                { path: "imgs/background/m2-2.webp" },
                { path: "imgs/background/m2-3.webp" },
                { path: "imgs/background/m2-4.webp" },
                { path: "imgs/background/m2-5.webp" },
                { path: "imgs/background/m3-1.webp" },
                { path: "imgs/background/m3-2.webp" },
                { path: "imgs/background/m3-3.webp" },
                { path: "imgs/background/m3-4.webp" },
                { path: "imgs/background/m3-5.webp" },
                { path: "imgs/background/m4-1.webp" },
                { path: "imgs/background/m4-2.webp" },
                { path: "imgs/background/m4-3.webp" },
                { path: "imgs/background/m4-4.webp" },
                { path: "imgs/background/m4-5.webp" },
                { path: "imgs/background/m5-1.webp" },
                { path: "imgs/background/m5-2.webp" },
                { path: "imgs/background/m5-3.webp" },
                { path: "imgs/background/m5-4.webp" },
                { path: "imgs/background/m5-5.webp" }
            ];
        } else {
            i = [
                { path: "imgs/background/1-1.webp" },
                { path: "imgs/background/1-2.webp" },
                { path: "imgs/background/1-3.webp" },
                { path: "imgs/background/1-4.webp" },
                { path: "imgs/background/1-5.webp" },
                { path: "imgs/background/2-1.webp" },
                { path: "imgs/background/2-2.webp" },
                { path: "imgs/background/2-3.webp" },
                { path: "imgs/background/2-4.webp" },
                { path: "imgs/background/2-5.webp" },
                { path: "imgs/background/3-1.webp" },
                { path: "imgs/background/3-2.webp" },
                { path: "imgs/background/3-3.webp" },
                { path: "imgs/background/3-4.webp" },
                { path: "imgs/background/3-5.webp" },
                { path: "imgs/background/4-1.webp" },
                { path: "imgs/background/4-2.webp" },
                { path: "imgs/background/4-3.webp" },
                { path: "imgs/background/4-4.webp" },
                { path: "imgs/background/4-5.webp" },
                { path: "imgs/background/5-1.webp" },
                { path: "imgs/background/5-2.webp" },
                { path: "imgs/background/5-3.webp" },
                { path: "imgs/background/5-4.webp" },
                { path: "imgs/background/5-5.webp" }
            ];
        }
        return i;
    }
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    draw() {
        this.backgroundsDibujados.forEach((i) => {
            i.draw();
            i.move();
        });
        this.avion.draw();
        this.suelo.draw();
        this.obstacleArr.forEach((i) => {
            i.draw(this.canvasHeight);
            i.move();
        });
        this.obstacleArr2.forEach((i) => {
            i.draw(this.canvasHeight);
            i.move();
        });
    }
    animate() {
        this.intervalId = setInterval(() => {
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.draw();
            this.checkCollisions();
            if (this.counter % 70 === 0 && this.drawPipe) {
                this.generatePipes();
                this.counterGeneratePipe = 0;
            }
            this.counterGeneratePipe++;
            this.counter++;
            if (this.counter % 140 === 0) {
                this.backgroundsAllCurrent = this.backgroundsAll.slice(this.counterLoops * 5 - 5, this.counterLoops * 5);
                this.counterLoops++;
            }
            if (this.remainingTime === 0) {
                this.victoryTime = 0;
                this.victory = false;
                this.counter = 0;
                this.remainingTime = 5;
                this.todoRectoSinMiedo = true;
                this.backgroundsAllCurrent = this.backgroundsAll;
                this.backgroundsDibujados = [];
                this.obstacleArr = [];
                this.obstacleArr2 = [];
                clearInterval(this.intervalId);
                this.start();
            }
        }, 1000 / 60);
    }
    checkCollisions() {
        if (this.player.y > this.backgroundHeight - this.suelo.height - this.player.height) {
            this.crash();
        }
        if (this.player.y < 0) {
            this.crash();
        }
        this.obstacleArr.forEach((i) => {
            if (this.player.x + this.player.width > i.x && this.player.x < i.x + i.width && this.player.y + this.player.height > i.y && this.player.y < i.y + i.height) {
                this.crash();
            }
        });
        this.obstacleArr2.forEach((i) => {
            if (this.player.x + this.player.width > i.x && this.player.x < i.x + i.width && (this.player.y < i.y || this.player.y + this.player.height > i.y + i.cuelloHeight)) {
                this.crash();
            }
        });
    }
    crash() {
        this.soundCrash.play();
        clearInterval(this.intervalId);
        if (confirm("¡Oh no! Has chocado. ¿Quieres intentarlo de nuevo?")) {
            this.start();
        } else {
            window.location.reload();
        }
    }
    generatePipes() {
        let i = Math.floor(Math.random() * (this.backgroundHeight - 350)) + 150;
        this.obstacleArr.push(new n(this.ctx, i - this.spaceBetweenPipes - this.pipesInterval, this.pipeColor, this.deviceIsMobile));
        this.obstacleArr2.push(new r(this.ctx, i - this.spaceBetweenPipes - this.pipesInterval, this.deviceIsMobile, null, this.cuelloHeight));
        this.obstacleArr.push(new n(this.ctx, i + this.spaceBetweenPipes, this.pipeColor, this.deviceIsMobile));
        this.obstacleArr2.push(new r(this.ctx, i + this.spaceBetweenPipes, this.deviceIsMobile, null, this.cuelloHeight));
        this.drawPipe = false;
        setTimeout(() => {
            this.drawPipe = true;
        }, this.pipesInterval);
    }
    start() {
        this.theme.currentTime = 1;
        this.theme.play();
        let i = 3;
        this.countDownSound.play();
        this.countDownSound.onended = () => {
            let t = setInterval(() => {
                if (i >= 1) {
                    this.remainingTime = i;
                    this.draw();
                    i--;
                } else {
                    clearInterval(t);
                    this.animate();
                }
            }, 1000);
        };
        this.backgroundsDibujados = this.backgroundsAllCurrent.map((i) => new w(this.ctx, i.path, this.backgroundHeight, this.backgroundSpeed, this.canvasWidth));
    }
}

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const game = new v(ctx);
game.start();

canvas.addEventListener("click", () => {
    game.soundFlap.play();
    game.player.onClick();
});

