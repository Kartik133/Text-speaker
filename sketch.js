var voice,a,b,sel,c;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  voice = new p5.Speech();
  a = createInput("");
  a.position(width/2-88.5,height/2);
  b = createButton("Speak");
  b.position(width/2-88.5,height/2+60);

  voice.setRate("0.9");
  voice.setVoice("Cellos");
}

function draw() {
  background(0);

  b.mouseReleased(()=> {
    voice.speak(a.value());
  });
}