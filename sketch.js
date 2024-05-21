function setup() {
    createCanvas(500, 500);
    background("white");
  }
  
  function draw() {
  
    stroke("black")
    fill("purple");
    
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 50);
    }
  }
  