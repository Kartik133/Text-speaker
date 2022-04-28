var speech,a,b;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  speech = new p5.Speech(voiceReady);
  a = createInput("");
  a.position(width/2-30,height/2);
  b = createButton("Speak");
  b.position(width/2-30,height/2+30);
  function voiceReady(){
    console.log(speech.voices);
  }
}

function draw() {
  background(0);
  b.mouseReleased(()=> {
    speech.speak(a.value());
  });
}
