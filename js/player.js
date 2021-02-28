class Player{
    constructor(){
        this.playerIndex = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var playercountref = database.ref("playercount");
        playercountref.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref("/").update({
            playercount:count
        });
    }

    update(){
        var playerIndex = "Players/player" + this.playerIndex
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
            
        });
    }

    static getplayerinfo(){
        var playerinforef = database.ref("Players");
        playerinforef.on("value", (data) =>{
            allplayers = data.val();
        });
    }
}