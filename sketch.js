var dog, happyDog, database, foodS, foodStock

function preload()
{
this.image = loadImage("images/dogImg.png")
this.image = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  background(46,139,87)

}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
dog.display();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({

  })
}

