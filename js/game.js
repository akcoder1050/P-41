class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        console.log(allPlayers);
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index = 0;
        drawSprites();

         for(var plr in allPlayers){         
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
                     
            players[index - 1].x = x;
            players[index - 1].y = y;
            console.log(players[index - 1].x );


            /// code for displaying the score 

            var s1, s2;
            s1 = null;
            s2 = null;

            scr1 = database.ref("players/player1/score");
            scr1.on("value",(data) =>{
               
            s1 = data.val();
                       
            })

            scr2 = database.ref("players/player2/score");
            scr2.on("value",(data) =>{
               
                s2= data.val();
                       
            })

            /// Asigning the name of players 

            var plrName1,plrName2;
            if(allPlayers!== undefined){
                    
            var plr1 = database.ref("players/player1/name");
            plr1.on("value",(data) =>{
              plrName1 = data.val();
            })

            var plr2 = database.ref("players/player2/name");
            plr2.on("value",(data) =>{
               plrName2 = data.val();
            })

            textSize(20);
            fill("white");
            stroke(246, 171, 253);
            noStroke();
            text(plrName1+" : "+s1,100,50);
            text(plrName2+" : "+s2,100,80);
            }
                    
            //// destroy code is added here and score increment 

                if (player.index !== null) {
                  if(fruitGroup!== undefined){

                    if (fruitGroup.isTouching(players[index - 1])){
     
                      fruitGroup.destroyEach();
                      player.score = player.score+1;
                             
                             
                      database.ref("players/player"+player.index).update({
                      score:player.score
                        })
                    }}}


                    heading = createElement("h1");
                    heading.html("Fruit catcher ");
                    heading.position(550, 100);
                    heading.style("font-size","50px");
                    heading.style("color","skyblue");
                    

            console.log("this is the player "+players[index - 1]);
                       
                     if(index === player.index){
                         
                        stroke("white");
                        strokeWeight(5);
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
    
                 
                 }
                

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 30 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
   
         

    }

    end(){
       console.log("Game Ended");
    }
}