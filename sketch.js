// paredes invisiveis/fundo do jogo

var parede1; //parede que fica no canto esquerdo do mapa

var parede2; //parede que fica no canto direito do mapa

// paredes de cima/topo e de baixo do jogo

var parede3; //parede que fica no canto de cima do mapa

var parede4; //parede que fica no canto de baixo do mapa

//paredes da cela do jogo

var parede5; // parede da direita da cela

var parede6; // parede da esquerda da porta

var parede7; // parede da direita da porta

// cenario/fundo do jogo
var cenario;

// personagem ladrao do jogo
var ladrao;

//imagens do ladrao parado

var ladraoparado1; //imagem do ladrao parado olhando pra baixo

var ladraoparado2; //imagem do ladrao parado olhando pra cima

var ladraoparado3; //imagem do ladrao parado olhando pra esquerda

var ladraoparado4; //imagem do ladrao parado olhando pra direita

// animacoes do ladrao quando andar

var ladraoBaixo; //animacao do ladrao andando pra baixo

var ladraoCima; //animacao do ladrao andando pra cima

var ladraoEsquerda; //animacao do ladrao andando pra esquerda/LEFT_ARROW

var ladraoDireita; //animacao do ladrao andando pra direita/RIGHT_ARROW

//------------------------------------------------------------

function preload() {
  // carregar a imagem do ladrao parado
  ladraoparado1 = loadImage("assets/ladrao_baixo.png");

  ladraoparado2 = loadImage("assets/ladrao_cima.png");

  ladraoparado3 = loadImage("assets/ladrao_esquerda.png");

  ladraoparado4 = loadImage("assets/ladrao_direita.png");

  //carregar as animacoes do ladrao andando

  ladraoBaixo = loadAnimation("assets/ladrao_baixo.gif");

  ladraoCima = loadAnimation("assets/ladrao_cima.gif");

  ladraoEsquerda = loadAnimation("assets/ladrao_esquerda.gif");

  ladraoDireita = loadAnimation("assets/ladrao_direita.gif");

  //carregar a imagem do cenario
  cenario = loadImage("assets/cenario_prisao.png");
}

//-----------------------------------------------------------

function setup() {
  //criar o tamanho do jogo(tamnho do comprimento e largura)
  createCanvas(1000, 700);

  //criar os sprites das parede1 e parede2/ paredes invisiveis/ canto do jogo

  parede1 = createSprite(50, 350, 180, 700);
  parede1.shapeColor = "yellow"; //mudar a cor do sprite para certa cor
  parede1.visible = false; // fazer com que o sprite fique invisvel ser for false, se for visivel entao é true

  parede2 = createSprite(950, 350, 180, 700);
  parede2.shapeColor = "yellow";
  parede2.visible = false;

  //criar os sprites das parede3 e parede4/ paredes de cima e baixo do jogo

  parede3 = createSprite(500, 0, 800, 10);
  parede3.shapeColor = "yellow"; //mudar a cor do sprite para certa cor
  parede3.visible = false; // fazer com que o sprite fique invisvel ser for false, se for visivel entao é true

  parede4 = createSprite(500, 700, 800, 150);
  parede4.shapeColor = "yellow";
  parede4.visible = false;

  //criar os sprites das parede3 e parede4/ paredes de cima e baixo do jogo

  parede5 = createSprite(620, 500, 1, 200);
  parede5.shapeColor = "yellow"; //mudar a cor do sprite para certa cor
  parede5.visible = false; // fazer com que o sprite fique invisvel ser for false, se for visivel entao é true

  parede6 = createSprite(657, 395, 50, 1);
  parede6.shapeColor = "yellow";
  parede6.visible = false;

  parede7 = createSprite(815, 395, 50, 1);
  parede7.shapeColor = "yellow";
  parede7.visible = false;

  //criar o sprite ladrao (posicao X, posicao Y, tamanho, tamnho)
  // o tamanho nao importa muito pois a imagem do ladrao ja diz qual é o tamanho
  ladrao = createSprite(500, 100, 1, 1);

  //adicionar a imagem do ladrao parado para o sprite ladrao
  ladrao.addImage("ladraoparado1", ladraoparado1);

  ladrao.addImage("ladraoparado2", ladraoparado2);

  ladrao.addImage("ladraoparado3", ladraoparado3);

  ladrao.addImage("ladraoparado4", ladraoparado4);

  //adicionar a animacao do ladrao andando pra baixo para o sprite ladrao
  ladrao.addAnimation("ladraoBaixo", ladraoBaixo);

  ladrao.addAnimation("ladraoCima", ladraoCima);

  ladrao.addAnimation("ladraoEsquerda", ladraoEsquerda);

  ladrao.addAnimation("ladraoDireita", ladraoDireita);

  //mudar o tamnho da imagem do ladrao
  ladrao.scale = 0.4;
}

//------------------------------------------------------------------

function draw() {
  //mudar a cor de fundo do jogo
  background("black"); //#3b736b = cor meio cinza com azul e verde

  //fazer com que a imagem do cenario fique no centro do jogo
  imageMode(CENTER);

  //imagem do cenario nas posicoes apresentadas abixo
  image(cenario, 500, 350, 700, 700);

  //fazer com que o ladrao ande para "cima/up", "baixo/down", "direita/right", "esquerda/left"
  if (keyDown("DOWN_ARROW")) {
    ladrao.y = ladrao.y + 5;

    ladrao.changeAnimation("ladraoBaixo");
  } else {
    ladrao.changeAnimation("ladraoparado1");
  }

  if (keyDown("UP_ARROW")) {
    ladrao.y = ladrao.y - 5;

    ladrao.changeAnimation("ladraoCima");
  } //else {
  //ladrao.changeAnimation("ladraoparado2");
  //}

  if (keyDown("LEFT_ARROW")) {
    ladrao.x = ladrao.x - 5;

    ladrao.changeAnimation("ladraoEsquerda");
  } //else {
  //ladrao.changeAnimation("ladraoparado3");
  //}

  if (keyDown("RIGHT_ARROW")) {
    ladrao.x = ladrao.x + 5;

    ladrao.changeAnimation("ladraoDireita");
  } //else {
  //ladrao.changeAnimation("ladraoparado4");
  //}

  //fazer com que o ladrao bate nas paredes invisiveis/fundo do jogo
  ladrao.bounceOff(parede1);
  ladrao.bounceOff(parede2);

  //fazer com que o ladrao bate nas paredes de cima/topo e baixo do jogo

  ladrao.bounceOff(parede3);
  ladrao.bounceOff(parede4);

  //fazer com que o ladrao bate nas paredes da cela do jogo

  ladrao.bounceOff(parede5);
  ladrao.bounceOff(parede6);
  ladrao.bounceOff(parede7);

  //desenhar os sprites no jogo
  drawSprites();
}
