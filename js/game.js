class Game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function(data){
        gameState = data.val(); 
        });
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if (gameState === 0){
            player = new Player();
            var playercountref = await database.ref("playercount").once("value")
            if (playercountref.exists()){
                playerCount = playercountref.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();

        }
    }

    play(){
        form.hide();
        textSize(30)
        text("Game Start" , 120, 100)
        Player.getplayerinfo();
        if (allplayers !== undefined){
            var displayposition = 130;
            for(var plr in allplayers){
                if (plr === "player"+player.playerIndex){
                    fill(255,0,0);
                }
                else{
                    fill(0,0,0)
                };
                displayposition += 20;
                textSize(15);
                text(allplayers[plr].name + "  :  " + allplayers[plr].distance, 120, displayposition);
            }
        }
        if (keyIsDown(UP_ARROW) && player.playerIndex !== null){
            player.distance += 50;
            player.update();
        }
    }
}