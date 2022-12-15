
let kernelImgs = [];
let popcornImgs = [];
let row = 0;
let column = 0;
let count = 0;
let stage = 0;


function preload() {
  for (let i = 0; i < 9; i++) {
    kernelImgs[i] = loadImage("assets/kernel/kernel_" + i + ".png");
  }

  for (let i = 0; i < 7; i++) {
    popcornImgs[i] = loadImage("assets/popcorn/popcorn" + i + ".png");
  }

  cola = loadImage("assets/cola.png")

  soundFormats("wav");
  popcornSound = loadSound("assets/sound/popcorn sound.wav")
  jazz = loadSound("assets/sound/Christmas Jazz.wav")
  congrats = loadSound("assets/sound/congrats.wav")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  gravity = createVector(0, 0.08);
}

function backgroundMusic() {
  jazz.play();
  jazz.loop();
  userStartAudio();
}

function draw() {
      backgroundMusic();

      background("#FFEE94");
        
      textAlign(CENTER);
      textSize(24);
      textFont("Georgia");
      text("click to make corn pop!", width/2, canvas.height/20);
    
      imageMode(CENTER);
      
      popcorn();
      mousePressed();
}

function popcorn() {
  for (let i = 0; i < kernelImgs.length; i++) {
    for (let j = 0; j <= i; j++) {
      s = Math.floor(Math.random() * 9);
      image(kernelImgs[s], width / 9 * i + 100, 100+(j)*100, 50, 50)
      image(kernelImgs[s], width / 9 * j + 100, 100+(i)*100, 50, 50)
    }
  }
}

function mousePressed() {
  cook();
}

function cook() {
  s = Math.floor(Math.random() * 7);
  i = Math.floor(Math.random() * 9);
  j = Math.floor(Math.random() * 9);

  if (stage == 0 && count < 81) {
    if (row > 8) {
      row = 0
      column += 1
      image(popcornImgs[s], width / 9 * row + 100, 100 + column * 100, 50, 50)
      popcornS();
      count += 1;
      row += 1
    } else if (row <= 8 && count < 81) {
      image(popcornImgs[s], width / 9 * row + 100, 100 + column * 100, 50, 50)
      row += 1
      popcornS();
      count += 1;
    }
  }

  if (count == 81) {
    ending();
  }
}


function ending() {
  background(255);
  congrats.play();
  background("#f24f26");
  fill(255)
  noStroke();
  image(cola, width / 2, height / 2, 455/2, 845/2)
  text("메리 크리스마스!", width/2, height/2+300)
  text("열심히 디지털 팝콘을 튀긴 당신에게 디지털 콜라도 선물합니다.", width/2, height/2+340)
  text("다시 팝콘을 튀기려면 새로고침을 해주세요.", width/2, height/2+380)
}

function popcornS() {
  popcornSound.setVolume(0.3);
  popcornSound.play();
}