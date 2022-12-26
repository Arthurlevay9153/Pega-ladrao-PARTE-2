const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var chao; //chao pequeno do jogo
var chao2; //chao onde vai ficar a bandeira do jogo
var fundo; //fundo do jogo

var bandeira // 
var bandeira1 // bandeira normal (caida)
var bandeira2 // sprite da bandeira levantando
var bandeira3 // sprite da bandeira onde explode

var corda; //corda onde carrega o boneco
var boneco; //boneco de palito do jogo
var link;
var botao; //botao para cortar a corda

function preload(){

fundo = loadImage("images/background.png") 

bandeira1 = loadImage("images/Bandeira.png") // dowload da imagem da bandeira caida/normal

bandeira2 = loadImage("images/Bandeira2.png") // dowload da imagem da bandeira em pé

bandeira3 = loadImage("images/Bandeira3.png") //dowload da imagem da bandeira explodindo

}

function setup(){
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)


  chao = Bodies.rectangle(250,690,500,20,{isStatic: true});
  World.add(world,chao);

  chao2 = Bodies.rectangle(250,650,150,150,{isStatic: true});
  World.add(world,chao2);

  //sprite da bandeira e suas animacoes

  bandeira = createSprite(250,500,150,150); //tamanho de x e y da bandeira

  bandeira.addImage("bandeiranormal",bandeira1); //adicionar a imagem da bandeira normal/caida

  bandeira.addImage("bandeiralevantando",bandeira2);

  bandeira.addImage("bandeiraexplodindo",bandeira3);

  bandeira.scale = 0.15; //mudar o tamanho da bandeira

  //

  corda = new Rope(5,{x:250,y:50});
  
  boneco = Bodies.circle(250,250,20);

  Composite.add(corda.body,boneco);

  link = new Link(corda,boneco);


  botao = createImg("images/botao(corte rapido).png");

  //comandos specificos do botao (seus comnados sao diferentes)

  botao.size(120,120); //tamanho do botao

  botao.position(350,100); //posicao x e y do botao

  botao.mouseClicked(drop); //comando para o mouse clicar no botao


}

function draw(){
  background("#f1f1f1"); // comando para mudar a cor do fundo, #f1f1f1 = cor do fundo é branco com cinza
  Engine.update(engine);

  image(fundo,250,350,500,700);

  corda.show()

  fill("#141414"); // comando para mudar a cor do chão, #141414 = cor do chão é preto com cinza
  rect(chao.position.x,chao.position.y,500,20);

  fill("#141414");
  rect(chao2.position.x,chao2.position.y,150,150);

  if(boneco!=null&&boneco.position.y>550){

  bandeira.changeImage("bandeiralevantando")
  
  }
  
  ellipse(boneco.position.x,boneco.position.y,30)

  drawSprites();
}

function drop(){ //drop = drop a fruta da corda

  corda.break()
  
  link.cortar()
  
    
  }
  



