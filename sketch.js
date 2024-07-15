
var path,pathImg;
var player1,player2,player3;
var mainPlayerImg,mainCyclist;
var ObstacleImg,Obstacle,ObstacleImg2,ObstacleImg3,ObstacleImg4,ObstacleImg5,ObstacleImg6;


function preload()
{
 pathImg = loadImage("Road.png")
 mainPlayerImg = loadAnimation("mainPlayer1.png","mainPlayer2.png")
 ObstacleImg= loadImage("obstacle1.png")
 ObstacleImg2= loadImage("obstacle2.png")
 ObstacleImg3= loadImage("obstacle3.png")
 ObstacleImg4= loadImage("opponent1.png")
 ObstacleImg5= loadImage("opponent5.png")
 ObstacleImg6= loadImage("opponent7.png")
 

}

function setup()
{
  createCanvas(1200,300)

  path = createSprite(100,150)
  path.addImage(pathImg)
  path.velocityX = -5
  

  mainCyclist = createSprite(70,150)
  mainCyclist.addAnimation("Running",mainPlayerImg)
  mainCyclist.scale = 0.08
  Obstacle= createSprite(300,80)
  Obstacle.addImage(ObstacleImg)
  Obstacle.scale=0.08
  Obstacle.velocityX=-4


  

 
}

function draw()
{
  background("white")
  if(path.x<0)
  {
    path.x = path.width/2
  }


  var count=Math.round(random(1,6));
  switch(random){
    case 1: Obstacle.addImage(ObstacleImg);
      break;
    case 2: Obstacle.addImage(ObstacleImg2);
      break;
    case 3: Obstacle.addImage(ObstacleImg3);
      break;
    case 4:Obstacle.addImage(ObstacleImg4);
      break;
    case 5: Obstacle.addImage(ObstacleImg5);
      break;
    case 6: Obstacle.addImage(ObstacleImg6);
      break;
    default: break;

  }
  Obstacle.scale=0.08;

  drawSprites()

}