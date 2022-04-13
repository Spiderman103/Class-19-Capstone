var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300);
  ghost.addImage("ghost", ghostImg);
  ghost.scale = 0.45;


  /*climber = createSprite(300,500);
  climber.addImage("climber", climberImg);*/
  climbersGroup = new Group()


  doorsGroup = new Group();
  ghost.debug = true;
 
}

function draw(){
  background(0);
  if (gameState === "play") {
    spawnDoors();
    if(keyDown("left_Arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_Arrow")){
      ghost.x = ghost.x + 3;
    }
    
    if(keyDown("UP_Arrow")){
        ghost.y = ghost.y - 3;
      }
    
   // ghost.velocityY = ghost.velocityY + 0.8
    
    if(tower.y > 400){
      tower.y = 300
    }
  

    
   
    if(doorsGroup.isTouching(ghost)){
      ghost.velocityY = 0;
      ghost.velocityX = 0;
      ghost.destroy();
      gameState = "end"
    }
   
    
    drawSprites();
  }
  
  if (gameState === "end"){
    
    text("Game Over", 230,250,50,50)
  }

}
/*function spawnDoor(){
 
  }
}


  }
  
  
}*/

  function spawnDoors() {
    //write code here to spawn the doors in the tower
    if (frameCount % 120 === 0) {
       door = createSprite(200, -50);
       climber = createSprite(200,10);
      
      
      door.x = Math.round(random(120,400));
      climber.x = door.x;
      
      
      door.addImage(doorImg);
      climber.addImage(climberImg);
      
      door.velocityY = 1;
      climber.velocityY = 1;
     
      
     
     
      
      //door.lifetime = 800;
      //climber.lifetime = 800;
     
  
      
     
      doorsGroup.add(door);
      
      climbersGroup.add(climber);
      
    }
  }
