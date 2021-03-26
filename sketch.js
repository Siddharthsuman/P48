var BEGIN=0;
var PLAY=1;
var END=3;
var STORY=2;
var WIN=5;
var END2=4;
var gameState=BEGIN;
var BackgroundImg;
var MainBg,MainBgImg;
var PlayB,PlayBImg;
var GBG,GBGImg;
var Path1,Path2,Path3,Path4;
var Path1,Path2,Path3,Path4;
var Path5,Path6,Path7,Path8,Path9,Path10;
var Path11,Path12,Path13;
var Story,StoryImg;
var Gizmo,GizmoAnim,GizmoAnim2,Jinx,JinxAnim,Mehamed,MehamedAnim,Seemore,SeemoreAnim,OthereV,OtherVAnim;
var Trigon,TrigonAnim,TrigonAnim2;
var Robin,RobinAnim,RobinAnim1,RobinAnim3,RobinAnim4;
var Lbeam,LBeamImg,LBeamGroup;
var Score=0;
var B1,B2,B3,B4;
var Key,KeyImg,Key2,Key2Img,Key3,Key3Img,Key4,Key4Img;
var Wall1,Wall2,Wall3;
var Cage,CageImg;
var Lock1,Lock2,Lock3,Lock4;
var Blast,BlastAnim;
var Birdarang,BirdarangL,Birdarang1Img,Birdarang2Img,BirdarangGroup;
var Remover1,Remover2;
var Starfire,StarfireImg,Beastboy,BeastboyImg,Cyborg,CyborgImg,Raven,RavenImg;
var Guide1,Guide1Img,Guide2,Guide2Img,Guide3,Guide3Img;
var TheEnd,TheEndImg;
var HiveWin,HiveWinImage,TrigonWin,TrigonWinImage;
function preload(){
BackgroundImg=loadImage("Images/MTT.png");
MainBgImg=loadImage("Images/TTS.png");
PlayBImg=loadImage("Images/Play.png");
GBGImg=loadImage("Images/Bg.png");
StoryImg=loadImage("Images/STORY.png");
GizmoAnim=loadAnimation("Images/G1.png","Images/G2.png","Images/G3.png","Images/G4.png","Images/G5.png");
GizmoAnim2=loadAnimation("Images/GO1.png","Images/GO2.png","Images/GO3.png","Images/GO4.png","Images/GO5.png");
SeemoreAnim=loadAnimation("Images/SE1.png","Images/SE2.png","Images/SE3.png","Images/SE4.png");
OtherVAnim=loadAnimation("Images/R1.png","Images/R2.png","Images/R3.png","Images/R4.png");
TrigonAnim=loadAnimation("Images/T1.png","Images/T2.png","Images/T3.png","Images/T4.png","Images/T5.png","Images/T6.png","Images/T7.png","Images/T8.png","Images/T9.png","Images/T10.png","Images/T11.png","Images/T12.png","Images/T13.png","Images/T14.png","Images/T15.png","Images/T16.png","Images/T17.png","Images/T18.png","Images/T19.png")
RobinAnim=loadAnimation("Images/RO1.png","Images/RO2.png","Images/RO3.png","Images/RO4.png","Images/RO5.png","Images/RO6.png","Images/RO7.png");
RobinAnim1=loadAnimation("Images/Robin.png")
RobinAnim2=loadAnimation("Images/RO11.png","Images/RO12.png","Images/RO13.png","Images/RO14.png","Images/RO15.png","Images/RO16.png","Images/RO17.png");
LBeamImg=loadImage("Images/Lbeam2.png")  ;
JinxAnim=loadAnimation("Images/J1.png","Images/J2.png","Images/J3.png","Images/J4.png");
MehamedAnim=loadAnimation("Images/M1.png","Images/M2.png","Images/M3.png","Images/M4.png");
TrigonAnim2=loadAnimation("Images/TO1.png","Images/TO2.png","Images/TO3.png","Images/TO4.png","Images/TO5.png","Images/TO6.png","Images/TO7.png","Images/TO8.png","Images/TO9.png","Images/TO10.png","Images/TO11.png","Images/TO12.png","Images/TO13.png","Images/TO14.png","Images/TO15.png","Images/TO16.png","Images/TO17.png","Images/TO18.png","Images/TO19.png")
KeyImg=loadImage("Images/key.png");
Key2Img=loadImage("Images/Ykey.png");
Key3Img=loadImage("Images/Bkey.png");
Key4Img=loadImage("Images/Rkey.png");
CageImg=loadImage("Images/Jail.png");
RobinAnim3=loadAnimation("Images/RobinS.png");
RobinAnim4=loadAnimation("Images/RobinS2.png");
Birdarang1Img=loadImage("Images/Birdarang1.png"); 
Birdarang2Img=loadImage("Images/Birdarang2.png"); 
BlastAnim=loadAnimation("Bomb/B1.png","Bomb/B2.png","Bomb/B3.png","Bomb/B4.png","Bomb/B5.png","Bomb/B6.png","Bomb/B7.png","Bomb/B8.png","Bomb/B9.png","Bomb/B10.png","Bomb/B11.png","Bomb/B12.png","Bomb/B13.png","Bomb/B14.png","Bomb/B15.png","Bomb/B16.png","Bomb/B17.png","Bomb/B18.png","Bomb/B19.png","Bomb/B20.png","Bomb/B21.png","Bomb/B22.png");
StarfireImg=loadImage("Images/Starfire.png");
BeastboyImg=loadImage("Images/Beastboy.png");
RavenImg=loadImage("Images/Raven.png");
CyborgImg=loadImage("Images/Cyborg.png");
Guide1Img=loadImage("Images/ED1.png");
Guide2Img=loadImage("Images/ED2.png");
Guide3Img=loadImage("Images/ED3.png");
TheEndImg=loadImage("Images/TED.png");
HiveWinImage=loadImage("Images/HiveW.png");
TrigonWinImage=loadImage("Images/TrigonW.png")
}


function setup() {
  createCanvas(1140,625);

  MainBg=createSprite(570,305,2,2);
  MainBg.addImage(MainBgImg);
  MainBg.scale=1.2;

PlayB=createSprite(600,460,1,1);
PlayB.addImage(PlayBImg);

  GBG=createSprite(570,305,2,2);
GBG.addImage(GBGImg);
GBG.visible=false;

Path1=createSprite(570,615,1140,20);
Path1.visible=false;
Path1.shapeColor="cyan";
Path2=createSprite(400,500,840,20);
Path2.visible=false;
Path2.shapeColor="aqua";
Path3=createSprite(900,370,540,20);
Path3.visible=false;
Path3.shapeColor="aqua";
Path4=createSprite(250,370,500,20);
Path4.visible=false;
Path4.shapeColor="aqua";
Path5=createSprite(100,240,300,20);
Path5.visible=false;
Path5.shapeColor="orange";
Path6=createSprite(50,240,250,20);
Path6.visible=false;
Path6.shapeColor="orange";
Path7=createSprite(750,240,780,20);
Path7.visible=false;
Path7.shapeColor="orange";
Path8=createSprite(850,60,20,140);
Path8.visible=false;
Path8.shapeColor="blue";
Path9=createSprite(950,500,100,20);
Path9.visible=false;
Path9.shapeColor="yellow";
Path10=createSprite(1010,445,20,130);
Path10.visible=false;
Path10.shapeColor="yellow";
Path11=createSprite(1070,130,140,20);
Path11.visible=false;
Path11.shapeColor="blue";
Path12=createSprite(565,130,590,10);
Path12.visible=false;
Path12.shapeColor="brown";
Path13=createSprite(150,60,20,120);
Path13.visible=false;
Path13.shapeColor="brown";


Story=createSprite(570,315,1,1);
Story.addImage(StoryImg);
Story.scale=0.89 
Story.visible=false;


Gizmo=createSprite(100,420,101,101)
Gizmo.addAnimation("Gizmo",GizmoAnim);
Gizmo.addAnimation("Gizmo2",GizmoAnim2);
Gizmo.scale=0.17;
Gizmo.visible=false;

Seemore=createSprite(800,316,101,101)
Seemore.addAnimation("Seemore",SeemoreAnim);
Seemore.scale=0.4;
Seemore.visible=false;

OtherV=createSprite(1000,560,101,101)
OtherV.addAnimation("Other",OtherVAnim);
OtherV.scale=0.4;
OtherV.visible=false;

Jinx=createSprite(100,185,101,101)
Jinx.addAnimation("Jinx",JinxAnim);
Jinx.scale=0.4;
Jinx.visible=false;

Mehamed=createSprite(650,80,101,101)
Mehamed.addAnimation("Mehamed",MehamedAnim);
Mehamed.scale=0.3;
Mehamed.visible=false;


Trigon=createSprite(1100,190,101,101)
Trigon.addAnimation("Trigon",TrigonAnim);
Trigon.addAnimation("Trigon2",TrigonAnim2);
Trigon.scale=0.07;
Trigon.visible=false;

Robin=createSprite(50,559,101,101);
Robin.addAnimation("Robin2",RobinAnim1);
Robin.addAnimation("Robin3",RobinAnim2);
Robin.addAnimation("Robin4",RobinAnim3);
Robin.addAnimation("Robin5",RobinAnim4);
Robin.addAnimation("Robin",RobinAnim);
Robin.scale=0.38;
Robin.visible=false;

Blast=createSprite(Gizmo.x,Gizmo.y,1,1);
Blast.addAnimation("Blast",BlastAnim);
Blast.scale=0.1;
Blast.visible=false;


B1=createSprite(100,440,20,110);
B1.visible=false;
B2=createSprite(900,440,20,110);
B2.visible=false;

B3=createSprite(375,190,20,110);
B3.visible=false;
B4=createSprite(1100,190,20,110);
B4.visible=false;

Wall1=createSprite(570,-10,1140,20);
Wall2=createSprite(-10,312.5,20,625);
Wall3=createSprite(1150,312.5,20,625);

Key=createSprite(1000,300,1,1);
Key.addImage(KeyImg);
Key.scale=0.07;
Key.visible=false;


Key2=createSprite(750,60,1,1);
Key2.addImage(Key2Img);
Key2.scale=0.07;
Key2.visible=false;

Key3=createSprite(50,50,1,1);
Key3.addImage(Key3Img);
Key3.scale=0.07;
Key3.visible=false;


Key4=createSprite(1000,50,1,1);
Key4.addImage(Key4Img);
Key4.scale=0.07;
Key4.visible=false;



Lock1=createSprite(910,558,10,95);
Lock1.shapeColor="Red";
Lock1.visible=false;
Lock2=createSprite(930,558,10,95);
Lock2.shapeColor="Yellow";
Lock2.visible=false;
Lock3=createSprite(950,558,10,95);
Lock3.shapeColor="Blue";
Lock3.visible=false;
Lock4=createSprite(1085,558,115,10);
Lock4.shapeColor="Green";
Lock4.visible=false;



Raven=createSprite(1080,440,1,1);
Raven.addImage(RavenImg);
Raven.scale=0.45;
Raven.visible=false;

Starfire=createSprite(1120,440,1,1);
Starfire.addImage(StarfireImg);
Starfire.scale=0.25;
Starfire.visible=false;

Cyborg=createSprite(1090,470,1,1);
Cyborg.addImage(CyborgImg);
Cyborg.scale=0.15;
Cyborg.visible=false;

Beastboy=createSprite(1060,455,1,1);
Beastboy.addImage(BeastboyImg);
Beastboy.scale=0.1;
Beastboy.visible=false;

Cage=createSprite(1080,440,1,1);
Cage.addImage(CageImg);
Cage.scale=0.2;
Cage.visible=false;

Guide1=createSprite(300,50,1,1);
Guide1.addImage(Guide1Img);
Guide1.scale=1.2;
Guide1.visible=false;

TheEnd=createSprite(600,320,1,1);
TheEnd.addImage(TheEndImg);
TheEnd.scale=0.7;
TheEnd.visible=false;

Guide2=createSprite(300,50,1,1);
Guide2.addImage(Guide2Img);
Guide2.scale=1.2;
Guide2.visible=false;

Guide3=createSprite(300,50,1,1);
Guide3.addImage(Guide3Img);
Guide3.scale=1.2;
Guide3.visible=false;

Remover1=createSprite(1000,100,100,100);
Remover1.visible=false;

Remover2=createSprite(1000,100,100,100);
Remover2.visible=false;

TrigonWin=createSprite(550,300,1,1);
TrigonWin.addImage(TrigonWinImage);
TrigonWin.scale=1.5;
TrigonWin.visible=false;

HiveWin=createSprite(600,300,1,1);
HiveWin.addImage(HiveWinImage);
  HiveWin.scale=4;
  HiveWin.visible=false;

LBeamGroup= new Group();
Birdarang1Group=new Group();
Birdarang2Group=new Group();


}

function draw() {
  background(BackgroundImg);  

  if(mousePressedOver(PlayB)){
    gameState=STORY;
    }  
   
    if(gameState===STORY){
      MainBg.visible=false;
      PlayB.visible=false;
      GBG.visible=true;
Story.visible=true;
if(keyDown("S")|| keyDown("s")){
gameState=PLAY
}
    }
    if(gameState===PLAY){
   

      Beastboy.visible=true;
      Starfire.visible=true;
      Raven.visible=true;
      Cyborg.visible=true;
      text("Score: "+ Score, 50,30);  
      if(Birdarang1Group.isTouching(Lock1)|| Birdarang1Group.isTouching(Lock2)|| Birdarang1Group.isTouching(Lock3)|| Birdarang1Group.isTouching(Lock4)){
        Birdarang1Group.destroyEach();
      }
      if(Birdarang2Group.isTouching(Lock1)|| Birdarang2Group.isTouching(Lock2)|| Birdarang2Group.isTouching(Lock3)|| Birdarang2Group.isTouching(Lock4)){
        Birdarang2Group.destroyEach();
      }
      Story.visible=false;
      Path1.visible=true;
      Path2.visible=true;
      Path3.visible=true;
      Path4.visible=true;
      Path5.visible=true;
      Path6.visible=true;
      Path7.visible=true;
      Path8.visible=true;
      Path9.visible=true;
      Path10.visible=true;
      Path11.visible=true;
      Path12.visible=true;
      Path13.visible=true;
      Robin.visible=true;
      OtherV.visible=true;
      Gizmo.visible=true;
      Jinx.visible=true;
    Mehamed.visible=true;
    Trigon.visible=true;
    Seemore.visible=true;
    Key.visible=true;
    Key2.visible=true;
    Key3.visible=true;
    Key4.visible=true;
    Lock1.visible=true;
    Lock2.visible=true;
    Lock3.visible=true;
    Lock4.visible=true;
    Cage.visible=true;
    Score = Score + Math.round(getFrameRate()/60);
   if(Score>0){
     Guide1.visible=true;
   }
   if(Score>120){
     Guide2.visible=true;
Guide1.visible=false;
   }

   if(Score>230){
     Guide3.visible=true;
     Guide2.visible=false;
   }
   
   if(Score>290){
     Guide3.visible=false;
   }
   
    // Path9.velocityX=5;
     Robin.velocityX=0;
     Robin.velocityY=0;
     if(Robin.isTouching(Key)){
       Lock4.velocityX=1;
       Key.visible=false;
       Key.remove();
     }
     if(Robin.isTouching(Key2)){
      Lock2.velocityY=1;
      Key2.visible=false;
      Key2.remove();
    }
    if(Robin.isTouching(Key3)){
      Lock3.velocityY=1;
      Key3.visible=false;
      Key3.remove();
    }
    if(Robin.isTouching(Key4)){
      Lock1.velocityY=1;
      Key4.visible=false;
      Key4.remove();
    }
     if(keyDown(UP_ARROW)){
       Robin.velocityY=-6;
      }
     if(keyDown(DOWN_ARROW)){
      Robin.velocityY=6;
    }
     else if(keyDown(LEFT_ARROW)){
      Robin.velocityX=-6;
      Robin.changeAnimation("Robin",RobinAnim);
      Robin.scale=0.2;
    }
    else if (keyDown(RIGHT_ARROW)){
      Robin.velocityX=6;
      Robin.changeAnimation("Robin3",RobinAnim2);
      Robin.scale=0.2;
    }
    else if(keyDown("Z")|| keyDown("z")){
     Robin.changeAnimation("Robin4",RobinAnim3);
     Robin.scale=0.16;
     Birdarang1();
    }
    else if(keyDown("X")|| keyDown("x")){
      Robin.changeAnimation("Robin5",RobinAnim4);
      Robin.scale=0.16;
      Birdarang2();
    }
   else{
     Robin.changeAnimation("Robin2",RobinAnim1);
     Robin.scale=0.38;
   }
    LBeamF();
   
  if(Gizmo.isTouching(B1)){
    Gizmo.changeAnimation("Gizmo2",GizmoAnim2);
    Gizmo.velocityX=5;
    B1.x=20;
  }
  if(Gizmo.isTouching(B2)){
    Gizmo.changeAnimation("Gizmo",GizmoAnim);
    Gizmo.velocityX=-5;
  }
  if(Trigon.isTouching(B4)){
    Trigon.changeAnimation("Trigon",TrigonAnim);
    Trigon.velocityX=-5;
  }

  if(Trigon.isTouching(B3)){
    Trigon.changeAnimation("Trigon2",TrigonAnim2);
    Trigon.velocityX=5;
  }

   if(Birdarang1Group.isTouching(Gizmo)){
   Blast.x=Gizmo.x;
   Blast.visible=true;
   Birdarang1Group.destroyEach();
   }
   else if(Birdarang2Group.isTouching(Gizmo)){
    Blast.x=Gizmo.x;
    Blast.visible=true;
    Birdarang2Group.destroyEach();
   }
   else{
     Blast.visible=false;
   }

   if(Birdarang1Group.isTouching(Seemore)){
    Blast.x=Seemore.x;
    Blast.y=Seemore.y;
    Remover2.x=Seemore.x;
    Remover2.y=Seemore.y;
    Blast.visible=true;
    Seemore.visible=false;
    LBeamGroup.destroyEach();
    Birdarang1Group.destroyEach();
    }
    else if(Birdarang2Group.isTouching(Seemore)){
      Blast.x=Seemore.x;
      Blast.y=Seemore.y;
      Blast.visible=true;
      Remover2.x=Seemore.x;
      Remover2.y=Seemore.y;
      Seemore.visible=false;
      LBeamGroup.destroyEach();
     Birdarang2Group.destroyEach();
    }
    else{
      Blast.visible=false;
    }

  if(Remover2.isTouching(Seemore)){
    Seemore.visible=false;
    LBeamGroup.destroyEach();
    Remover2.x=Seemore.x;
    Remover2.y=Seemore.y;
    Seemore.x=10000;
    LBeamGroup.x=20000000;
  }

    if(Birdarang1Group.isTouching(Jinx)){
      Blast.x=Jinx.x;
      Blast.y=Jinx.y;
      Blast.visible=true;
    Jinx.visible=false;
     Remover1.x=Jinx.x;
    Remover1.y=Jinx.y;
      Birdarang1Group.destroyEach();
      }
      else if(Birdarang2Group.isTouching(Jinx)){
        Blast.x=Jinx.x;
        Blast.y=Jinx.y;
        Blast.visible=true;
      Jinx.visible=false;
       Remover1.x=Jinx.x;
      Remover1.y=Jinx.y;
        Birdarang2Group.destroyEach();
        }
      else{
        Blast.visible=false;
      }
   
      if(Remover1.isTouching(Jinx)){
        Jinx.visible=false;
        Jinx.x=10000;
      }

      if(Birdarang1Group.isTouching(Mehamed)){
        Blast.x=Mehamed.x;
        Blast.y=Mehamed.y;
        Blast.visible=true;
      Mehamed.visible=false;
       Remover1.x=Mehamed.x;
      Remover1.y=Mehamed.y;
        Birdarang1Group.destroyEach();
        }
        else if(Birdarang2Group.isTouching(Mehamed)){
          Blast.x=Mehamed.x;
          Blast.y=Mehamed.y;
          Blast.visible=true;
          Mehamed.visible=false;
         Remover1.x=Mehamed.x;
        Remover1.y=Mehamed.y;
          Birdarang2Group.destroyEach();
          }
        else{
          Blast.visible=false;
        }
     
        if(Remover1.isTouching(Mehamed)){
          Mehamed.visible=false;
         Mehamed.x=10000;
        }

        if(Birdarang1Group.isTouching(OtherV)){
          Blast.x=OtherV.x;
          Blast.y=OtherV.y;
          Blast.visible=true;
        OtherV.visible=false;
         Remover2.x=OtherV.x;
        Remover2.y=OtherV.y;
          Birdarang1Group.destroyEach();
          }
          else if(Birdarang2Group.isTouching(OtherV)){
            Blast.x=OtherV.x;
            Blast.y=OtherV.y;
            Blast.visible=true;
            OtherV.visible=false;
            Remover2.x=OtherV.x;
            Remover2.y=OtherV.y;
            Birdarang2Group.destroyEach();
            }
          else{
            Blast.visible=false;
          }
       
          if(Remover2.isTouching(OtherV)){
            OtherV.visible=false;
           OtherV.x=10000;
          }
 
          if(Trigon.isTouching(Robin)||LBeamGroup.isTouching(Robin)||Jinx.isTouching(Robin)||Seemore.isTouching(Robin)||Mehamed.isTouching(Robin)||OtherV.isTouching(Robin)|| Gizmo.isTouching(Robin)){
            gameState=END;
          }
          if(Trigon.isTouching(Robin)){
            gameState=END2;
          }
  TrigonWin.visible=false;
HiveWin.visible=false;
     if(Robin.isTouching(Cage)){
  gameState=WIN;
}
    }

if(gameState===END){
HiveWin.visible=true;
LBeamGroup.destroyEach();
Cage.visible=false;
 
if(keyDown("R")|| keyDown("r")){
  gameState=PLAY;
  HiveWin.visible=false;
  Robin.x=100;
  Robin.y=559;
  Trigon.x=1100;
  Gizmo.x=100;
  Lock1.x=910;
    Lock1.y=558;
    Lock2.x=920;
    Lock2.y=558;
    Lock3.x=950;
    Lock3.y=558;
    Lock4.x=1805;
    Lock4.y=558;
}
}

  
if(gameState===WIN){
  Cage.visible=false;
  TheEnd.visible=true;
  Cyborg.visible=false;
  Beastboy.visible=false;
  Robin.visible=false;
  Raven.visible=false;
  Starfire.visible=false;
  Path1.visible=false;
  Gizmo.visible=false;
  Trigon.visible=false;
  Seemore.visible=false;
  OtherV.visible=false;
  Jinx.visible=false;
  Mehamed.visible=false;
  Key.visible=false;
  Key2.visible=false;
  Key3.visible=false;
  Key4.visible=false;
  MainBg.visible=false;
  GBG.visible=false;
}
  
    
    edges=createEdgeSprites();
    if(Path9.isTouching(Path2)){
      Path9.velocityX=-5;
    }
   Path9.bounceOff(edges)
if(Path9.isTouching(edges)){
  Path9.velocityX=-5;
}

Robin.bounceOff(Path1);
Robin.bounceOff(Path2);
Robin.bounceOff(Path3);
Robin.bounceOff(Path4);
Robin.bounceOff(Path5);
Robin.bounceOff(Path6);
Robin.bounceOff(Path7);
Robin.bounceOff(Path8);
Robin.bounceOff(Path9);
Robin.bounceOff(Path10);
Robin.bounceOff(Path11);
Robin.bounceOff(Path12);
Robin.bounceOff(Path13);
Robin.bounceOff(Wall1);
Robin.bounceOff(Wall2);
Robin.bounceOff(Wall3);
Robin.bounceOff(Lock1);
Robin.bounceOff(Lock2);
Robin.bounceOff(Lock3);
Robin.bounceOff(Lock4);
    drawSprites();
}
function LBeamF(){
if(frameCount%80===0){
  var LBeam=createSprite(Seemore.x,1,1,1);
  LBeam.y=Math.round(random(Seemore.y,Seemore.y));
  LBeam.addAnimation("Lbeam",LBeamImg);
  LBeam.velocityX=-8;
 LBeam.lifetime=100;
 LBeam.scale=0.1;
  LBeamGroup.add(LBeam);
    }
  }

  function Birdarang1(){
    Birdarang=createSprite(Robin.x,Robin.y,10,10);
    Birdarang.addImage(Birdarang1Img);
    Birdarang.velocityX=-8;
    Birdarang.scale=0.04;
    Birdarang.lifetime=150;
    Birdarang1Group.add(Birdarang);
  }

  function Birdarang2(){
    BirdarangL=createSprite(Robin.x,Robin.y,10,10);
    BirdarangL.addImage(Birdarang2Img);
    BirdarangL.velocityX=8;
    BirdarangL.scale=0.04;
    BirdarangL.lifetime=150;
    Birdarang2Group.add(BirdarangL);
  }