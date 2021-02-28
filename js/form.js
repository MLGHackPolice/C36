class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(130,0);

        
        

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(() =>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.playerIndex = playerCount
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(130, 160);
        });
    }
}