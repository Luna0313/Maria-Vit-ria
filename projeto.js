var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bff2868e-808a-4e76-b4b5-f44d2251cd87","ed6ce3e2-0479-49d8-94b7-38460d5a65d5","0edb2b3c-0405-4a65-ad0c-8b9736421c00"],"propsByKey":{"bff2868e-808a-4e76-b4b5-f44d2251cd87":{"name":"th (1).jpg_1","sourceUrl":null,"frameSize":{"x":230,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"GoHyKZRc_jiPHDFVJF1rsxZ2SdrAuDWd","loadedFromSource":true,"saved":true,"sourceSize":{"x":230,"y":300},"rootRelativePath":"assets/bff2868e-808a-4e76-b4b5-f44d2251cd87.png"},"ed6ce3e2-0479-49d8-94b7-38460d5a65d5":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"5S9Z63TaZB23_JwlTbCvgZsyQYf5SXtx","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/ed6ce3e2-0479-49d8-94b7-38460d5a65d5.png"},"0edb2b3c-0405-4a65-ad0c-8b9736421c00":{"name":"bunny2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/v_Ye2VA9vP2sIRl._9tYvQG3dJzmtQ4_/category_animals/bunny2.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"v_Ye2VA9vP2sIRl._9tYvQG3dJzmtQ4_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/v_Ye2VA9vP2sIRl._9tYvQG3dJzmtQ4_/category_animals/bunny2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Jogador = createSprite(393,222,10,100)
var computador = createSprite(5,225,10,100)
var bola = createSprite(200,200,10,10)

createEdgeSprites()

bola.velocityX = 2
bola.velocityY = 2
computador.velocityY = 5

function draw() {

background(220);

line(200,0,200,0+10);
line(200,20,200,0+30);
line(200,40,200,0+50);
line(200,60,200,0+70);
line(200,80,200,0+90);
line(200,100,200,0+110);
line(200,120,200,0+130);


for (var i = 0; i < 400; i=i+20) {
line(200,i,200,i+10);  
}





if(keyDown("UP_ARROW"))
Jogador.y = Jogador.y - 5
if(keyDown("DOWN_ARROW"))
Jogador.y = Jogador.y + 5
 
bola.bounceOff(Jogador) 
bola.bounceOff(bottomEdge) 
bola.bounceOff(topEdge)
computador.bounceOff(topEdge)
computador.bounceOff(bottomEdge)
bola.bounceOff(computador)
 
 
 
 
 drawSprites() 

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
