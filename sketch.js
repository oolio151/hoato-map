var thing
var bgimg,map1
var forest,pillar,mountain,ruins,desert,tower
var bronzet,ironage,tinchester,pearlen,portcity
var diamondi,drillbit,silverston,irontown,goldheart,emeraldite
var lakefront,victoryroad,league,frontier,safarizone
var texting
var west_island,east_island,emeraldite_island
var strait,sea1,sea2
function preload(){
  bgimg=loadImage("hoato.png");
}

function setup(){
  createCanvas(640,480);
  west_island=createSprite(120,280,150,250)
  west_island.shapeColor="blue"
  west_island.visible=false
  east_island=createSprite(380,190,240,320)
  east_island.shapeColor="blue"
  east_island.visible=false
  emeraldite_island=createSprite(435,375,100,50)
  emeraldite_island.shapeColor="blue"
  emeraldite_island.visible=false
  strait=createSprite(230,285,75,150)
  strait.shapeColor="blue"
  strait.visible=false
  pearlen=createSprite(155,250,11,11)
  forest=createSprite(87.5,251,11,11);
  tinchester=createSprite(87.5,325,11,11)
  ironage=createSprite(155,325,11,11)
  bronzet=createSprite(155,378,11,11)
  portcity=createSprite(187,250,11,11)
  diamondi=createSprite(272,250,11,11)
  drillbit=createSprite(325,205,11,11)
  ruins=createSprite(325,112,11,11)
  silverston=createSprite(362,112,11,11)
  mountain=createSprite(442,157,11,11)
  irontown=createSprite(387,220,11,11)
  safarizone=createSprite(370,182,11,11)
  goldheart=createSprite(442,341,11,11)
  pillar=createSprite(376,279,11,11)
  lakefront=createSprite(328,309,11,11)
  emeraldite=createSprite(442,377,11,11)
  desert=createSprite(423,366,11,11)
  frontier=createSprite(442,465,11,11)
  tower=createSprite(579,196,11,11)
  victoryroad=createSprite(404,78,11,11)
  league=createSprite(404,57,11,11)
}

function draw(){
  background(bgimg)

  if(onHover(forest)){
    drawWords("Tinchester Forest",0,153,0)
  }
  else if(mousePressedOver(pearlen)){
    drawWords("Pearlen Town",128,255,255)
  }
  else if (mousePressedOver(tinchester)){
    drawWords("Tinchester",204,230,255)
  }
  else if (mousePressedOver(ironage)){
    drawWords("Ironage Town",209,209,209)
  }
  else if(mousePressedOver(bronzet)){
    drawWords("Bronzet Town",255,191,0)
  }
  else if(mousePressedOver(portcity)){
    drawWords("Pearlen Port",128,255,255)
  }
  else if(mousePressedOver(diamondi)){
    drawWords("Diamondveil City",0,153,230)
  }
  else if(mousePressedOver(drillbit)){
    drawWords("Drillbit City",179,83,0)
  }
  else if(mousePressedOver(ruins)){
    drawWords("Hoenntown Ruins",255,230,102)
  }
  else if(mousePressedOver(silverston)){
    drawWords("Silverston",230,255,255)
  }
  else if(mousePressedOver(mountain)){
    drawWords("Mount Steelin",255,64,25)
  }
  else if (mousePressedOver(irontown)){
    drawWords("Irontown",106,117,117)
  }
  else if (mousePressedOver(safarizone)){
    drawWords("Marshlands",34,204,0)
  }
  else if (mousePressedOver(goldheart)){
    drawWords("Goldheart City",255,255,128)
  }
  else if (mousePressedOver(pillar)){
    drawWords("Sword Pillar",106,117,117)
  }
  else if (mousePressedOver(lakefront)){
    drawWords("Baltoy Lakefront",255,191,0)
  }
  else if (mousePressedOver(emeraldite)){
    drawWords("Emeraldite Town",0,204,0)
  }
  else if (mousePressedOver(desert)){
    drawWords("Grand Desert",255,255,179)
  }
  else if (mousePressedOver(frontier)){
    drawWords("Battle Frontier",204,102,255)
  }
  else if (mousePressedOver(tower)){
    drawWords("Spike Tower",230,242,255)
  }
  else if (mousePressedOver(victoryroad)){
    drawWords("Victory Road",255,191,0)
  }
  else if (mousePressedOver(league)){
    drawWords("Hoato Conference",255,191,0)
  }
  else if (mousePressedOver(west_island)){
    drawWords("Western Island",0,255,0)
  }
  else if (mousePressedOver(east_island)){
    drawWords("Eastern Island",0,255,0)
  }
  else if (mousePressedOver(emeraldite_island)){
    drawWords("Emeraldite Island",0,255,0)
  }
  else if (mousePressedOver(strait)){
    drawWords("Hoato Strait",51,187,255)
  }
  //drawSprites();
}



function drawWords(location,v1,v2,v3) {
  fill(rgb(v1,v2,v3))
  text(location,90,155)

}
