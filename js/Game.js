class Game{

getState(){
 database.ref("gameState").on("value",(data)=>{
    gameState = data.val()
})

}
update(state){
    database.ref("/").update({
        gameState:state
})}
start(){

    if (gameState === 0){
        player = new Player()
        player.getCount();
        form = new Form()
        form.display();
    }
    b1 = new Bikes(440, 3250);
    b2 = new Bikes(300,3290);
    b3 = new Bikes(450, 3290);
    bike = [b1,b2,b3]
}

    play()
    {
        form.Hide();
       
        Player.getPlayerinfo();

        if (allPlayers != undefined) {
            var index = 0;
            image(backimage,  196,-displayHeight*2, displayWidth / 2, displayHeight*6);
          
            var index = 0;
            var x = 175;
            var y;

            for (var plr in allPlayers) {

                index = index + 1;
                x = x + 80;
                y = displayHeight - allPlayers[plr].distance;
                bike[index - 1].x = x;
                bike[index - 1].y = y;
                
                if (index === player.index) {
                   fill("red");
                    camera.position.x = bike[index-1].x;
                    camera.position.y = bike[index-1].y;       
                }
                else {
                    fill("blue")
                }
               textAlign(CENTER);
               textSize(20);
               text(allPlayers[plr].name,  bike[index - 1].x+10,bike[index - 1].y-100);
                         
            }
        }
     if(keyIsDown(UP_ARROW) && player.index !== null){
        Matter.Body.setPosition(b1.body, { x: 0, y: -20 })
        Matter.Body.setPosition(b2.body, { x: 0, y: -20 })
        Matter.Body.setPosition(b3.body, { x: 0, y: -20 })
     }

    }
}