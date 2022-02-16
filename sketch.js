var test
var edges

function preload(){
cat = loadImage('catpic.jpg')
dog = loadImage('dog image.png')
}

function setup() {
  createCanvas(400,400);
  test=createSprite(200,200,30,45)
  test2=createSprite(100,100,45,50)
  test.shapeColor='blue'
  test.addImage(cat)
  test.scale=0.1
  test2.addImage(dog)
  test2.scale=0.01
  
}

function draw() 
{
  background('red');
  edges=createEdgeSprites()
  test.bounceOff(edges)
  if (keyDown('LEFT')){
    //test.x=test.x-2
    test.velocityX=-2
  }
  if (keyDown('RIGHT')){
    //test.x=test.x+2
    test.velocityX=+2
  }
  if (keyDown('UP')){
    //test.y=test.y-2
    test.velocityY=-2
  }
  if (keyDown('DOWN')){
    //test.y=test.y+2
    test.velocityY=+2
  }
drawSprites()

}




