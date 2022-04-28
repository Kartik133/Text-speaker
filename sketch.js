var voice,a,b;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  voice = new p5.Speech();
  voice.setLang("hindi");
  a = createInput("");
  a.position(width/2-30,height/2);
  b = createButton("Speak");
  b.position(width/2-30,height/2+30);
}

function draw() {
  background(0);
  b.mouseReleased(()=> {
    voice.speak(a.value());
  });
}
