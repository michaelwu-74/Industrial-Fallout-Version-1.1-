//List of Variables
var player
var backGround
var level
var startScreen
var trash
var skyBorder
var tick = 0
var tick2 = 0
var second1 = 1
var minute1 = 0
var orbsCollected = 0
var secondsLeft = 200
var ocram
var orb
var trash1
var orbTick = 0
var ocramTick = 0
let orbCollected;
let playerKilled;
let playerHit2;
let playerHit1;
let startenter
let boss5, soundLoop
let force;
let gravity;
let enemys=[];
let img
let img3
let rock
var d = 0
let death = false
var bigSmoke 
var bigSmokeTick = 500
var bigSmokeHit
let statText = '^^^ These are your stats, Oxygen will slowly deplete overtime.'

var bomb
var bombTick = 0
var groundBorder 
var hp = 100
var winScreen
var hpBar
//let img2 = loadImage("trash2.png");


function preload() {
  soundFormats('mp3', 'ogg');
  orbCollected = loadSound('orbscollect.mp3');
  playerHit1 = loadSound('playerhit1.mp3');
  playerHit2 = loadSound('playerhit2.mp3');
  playerKilled = loadSound('playerkilled.mp3');
  startenter = loadSound('start(Enter).mp3');
  boss5 = loadSound('Boss5.mp3');




}



//Setup
function setup(){
  boss5.play();
  createCanvas(800,500);
  level = 1
  let img3 = loadImage("trash2.png");
  phase = loadImage("Background.png")
//phase = loadImage("phase.gif")
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.10);
  rock = new ssmoke(img3);

      for(d=0;d<100; d++){
    enemys.push(new ssmoke(img3))











  }
//Screen on level 1-----------------------------------------
 startScreen = createSprite(width/2,height/2,10,100)
 startScreen.addAnimation("startScreen","StartScreen.png")
 startScreen.scale = 0.6
//Background of the game------------------------------------
  backGround = createSprite(width/2,height/2,10,100)
  backGround.scale = 1
  backGround.addAnimation("backGround","Background.png")
//The player code-------------------------------------------
  player = createSprite(70,440,10,10)
  player.setCollider('rectangle', 0, -3, 50, 100)
  player.scale = 0.3
//Naming the animations for the Player
  player.addAnimation("playerMoving","player1.png","player8.png")
  player.addAnimation("idle","player1.png")
  player.changeAnimation('idle')
//The invisible wall that keeps the player in the play zone--------------------------------------------------------
  skyBorder = createSprite(100,372,3000,10)
  skyBorder.setCollider('rectangle',0,0,3000,10)
//The boss--------------------------------------------------
  ocram = createSprite(width/2,100,100,100)
  ocram.addAnimation("ocramIdle","Ocram1.gif")
  ocram.scale = 0.5

//The orbs you collect to win-------------------------------
  orb = createSprite(width/2,500,100,100)
  orb.addAnimation("Orb","Orb.gif")
  orb.scale = 1
//The trash that falls on you-------------------------------
  trash1 = createSprite(ocram.y,ocram.x,100,100)
  trash1.addAnimation("Trash1","trash1.png")
  trash1.scale = 1
  trash1.setCollider('rectangle', 0, 0, 60, 60)
  trash1.visible = false
//----------------------------------------------------------
//---------------------------------------------------------
  bomb = createSprite(1,1,1,1)
  bomb.addAnimation("Bomb","Bomb.png")
  bomb.setCollider('circle',0,15,15,)
//----------------------------------------------------------
  groundBorder = createSprite(100,490,3000,10)
  groundBorder.setCollider('rectangle',0,0,3000,10)
//----------------------------------------------------------
  bigSmoke = createSprite(1,1,1,1)
  bigSmoke.addAnimation("bigSmoke","trash2.png")
  bigSmoke.scale = 1
  bigSmoke.setCollider('circle',0,45,15)
//----------------------------------------------------------
  loseScreen = createSprite(width/2,height/2,10,100)
  loseScreen.addAnimation("LoseScreen","Gameover.png")
  loseScreen.scale = 0.5
//----------------------------------------------------------
  winScreen = createSprite(width/2,height/2,10,100)
  winScreen.addAnimation("Winscreen","Winscreen.png")
  winScreen.scale = 0.5
//----------------------------------------------------------
//----------------------------------------------------------
}

function draw(){
  
  background(255,255,255);  

  skyBorder.visible = false;
  groundBorder.visible = false;
//----------------------------------------------------------
  bigSmoke.debug = mouseIsPressed;
  player.debug = mouseIsPressed;
  rock.debug = mouseIsPressed;
  skyBorder.debug = mouseIsPressed;
  bomb.debug = mouseIsPressed;
  trash1.debug = mouseIsPressed;
  player.collide(skyBorder)
  player.collide(groundBorder)
//----------------------------------------------------------
// Key 13 is the Enter key.

  //----------------------------------------------------------
  //Level 1 (The start screen)
 if (level === 1) {
    background("black")
    textSize(15)
    fill("White")
    text(statText,160,10,200)
     fill("White")
    text("Collect 5 orbs to win the \ngame!",15,200)
    text("Move in all directions with \narrow keys",15,300)
text("The earth has slowly been corrupted by the increasing amounts of pollution and industrialization, caused by the \nuncontrolled production of toxic chemicals and waste. This has led to the creation of a monster, named Ocram.\nIn this game, you must collect 5 life orbs to restore the world to its natural state, while avoiding the perils of\nhuman corruption.",25,425)
    fill("white")
    text("Press [Enter] to start!", width/2 - 60, 100)
    player.visible = false
    backGround.visible = false
    ocram.visible = false
    orb.visible = false
    trash1.visible = false
    bomb.visible = false
    loseScreen.visible = false
    winScreen.visible = false
    // Key 13 is the Enter key.
    if (keyIsDown(13)){
    level = 2
    startenter.play();
  }

  //Level 2 The main course of the game
  } else if (level === 2) {
    clear()
    tick = tick + 1
    tick2 = tick2 + 1
    bigSmokeTick = bigSmokeTick + 1
    ocramTick = ocramTick + 1
    bombTick = bombTick + 1
    orbTick = orbTick + 1
    player.visible = true
    backGround.visible = false
    ocram.visible = true
    bomb.visible = true
  
    //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//
    game()
    //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//
    fill("white")
  //Level 3 the loss screen
  } else if (level === 3) {
    clear()

    fill(0, 0, 0)
    textSize(35);
    fill("Black")
    text("Boo, You Lost!", width/2 - 60, 100)
    player.visible = false
    backGround.visible = false
    ocram.visible = false
    orb.visible = false
    trash1.visible = false
    startScreen.visible = false
    bomb.visible = false
    bigSmoke.visible = false
    loseScreen.visible = true
  //Level 4 the win screen
  } else if (level === 4){
    clear()
    fill(0, 0, 0)
    textSize(100);
    fill("white")
    text("Yay, You Won!", width/2 - 60, 100)
    player.visible = false
    backGround.visible = false
    ocram.visible = false
    orb.visible = false
    trash1.visible = false
    startScreen.visible = false
    bomb.visible = false
    winScreen.visible = true
  }
//----------------------------------------------------------
   drawSprites();
//Player movement
  player.velocity.x = 0;
  player.velocity.y = 0;
   if (keyIsDown(LEFT_ARROW)) {
    player.changeAnimation('playerMoving')
    player.velocity.x = -5;
    player.mirrorX(-1);
  }
  else {
    player.changeAnimation('idle')
    player.mirrorY(1)
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.mirrorX(1);
    player.changeAnimation('playerMoving')
    player.velocity.x = 5;
  }
  else {
    player.mirrorY(1)
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.velocity.y = 5;
    player.changeAnimation('playerMoving')
  }
  if (keyIsDown(UP_ARROW)) {
    player.velocity.y = -5;
    player.changeAnimation('playerMoving')  
  }
  //if (player.pos.y = ssmoke.pos.y){
  //  hp++
  //}
//----------------------------------------------------------

  player.collide(bomb, bombHit)
  player.collide(trash1, trashHit)
  player.overlap(bigSmoke, bigSmokeHit)
 




  if (bigSmokeTick === 1000) {
    bigSmoke.draw
    bigSmoke.scale = 5
    bigSmoke.position.y = -100
    bigSmoke.position.x = random(50,780)
    bigSmoke.visible = true
    bigSmoke.velocity.y = 1;
    bigSmokeTick = 0
  }









  function bigSmokeHit(){
    hp = hp -1

  }



  function bombHit(){
    hp = hp -20
    bombTick = 0
    playerHit2.play();
  }

  function trashHit(){
    hp = hp -30
    ocramTick = 0
    playerHit1.play();


  }


  if (hp < 1) {
    level = 3
    hp = 1
    death =  true
    playerKilled.play();
  
  }














//----------------------------------------------------------
  //Borders
  fill(0, 0, 0)
  border1 = rect(1, 1, 798, 10)
  border2 = rect(1, 1, 10, 623)
  border3 = rect(1, 614, 798, 10)
  border4 = rect(789, 1, 10, 623)
  //for all sprites (so that they cant leave the premise)
  for (var i = 0; i < allSprites.length; i++) {

    var s = allSprites[i];
    if (s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }
    if (s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if (s.position.x > width) {
      s.position.x = width - 1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if (s.position.y < 0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

   // if (s.position.y > height) {
    //  s.position.y = height - 1;
    //  s.velocity.y = -abs(s.velocity.y);
    //}
  }
  // This is the win screen, so that when you collect 5 orbs, it will bring you to it.
  if (orbsCollected === 5){
    level = 4
  }

//Timers'n'stuff
   if (bombTick === 0){
    bomb.position.y = 1
    bomb.position.x = 0
    bomb.velocity.y = 0
  }

    if (ocramTick === 0){
    trash1.position.y = 1
    trash1.position.x = 0
    trash1.velocity.y = 0
  }

  if (bombTick === 200){
    bombTick = 0
  }


  if (tick === 70) {
    secondsLeft = secondsLeft - second1
    tick = 0
  }

  if (tick === 35) {
    secondsLeft = secondsLeft - second1
  }


  if (secondsLeft === 0) {
    level = 3

  }
//--------------HP BAR--------------------
  fill("Black")  
  rect(15,70,100,20);
  fill("Red")
  rect(15,70,hp,20);

  if (orbTick === 700) {
    orb.position.x = random(10,780)
    orb.position.y = random(400,475)
    orb.visible = true
  }

  if (orbTick === 840) {
    orb.visible = false
    orb.position.x = 1
    orb.position.y = 1
    orbTick = 140
  }

// the code that makes ocram start to move
  if (tick2 === 1) {
    ocram.velocity.x = 5;
  }

//Orb collection code
 if (orb.collide(player)) {
    orbCollected.play();
    orb.visible = false
    orb.position.x = 1
    orb.position.y = 1
    orbsCollected = orbsCollected + 1
  }
 
  //-------------------------------------------------------


  if (ocramTick === 80) {
    trash1.draw()
    trash1.scale = 1
    trash1.visible = false
    trash1.position.x = ocram.position.x
    trash1.position.y = ocram.position.y
    trash1.visible = true
    trash1.velocity.y = 5;
    ocramTick = 0
  }





  if (bombTick === 100){
    bomb.position.y = 1
    bomb.draw()
    bomb.position.x = player.position.x

    bomb.velocity.y = random(4,9);
  }


//Stats (Top left corner info)
  fill(255,255,255)
  rect(0,0,150,65)
    fill(0, 0, 0)
    textSize(15);
    text(orbsCollected + " Orbs Collected", 23, 40);
    textSize(15);
    text("Oxygen: " + secondsLeft + "%",23,20);
    text("HP:"+ hp,23,60)





} 


//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//
function game() {
  background(phase)
  for(let i=0; i<enemys.length; i++){
    enemys[i].show();
    enemys[i].update();
  }
//backGround.visible = true
startScreen.visible = false
}
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//
