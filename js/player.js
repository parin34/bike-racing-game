class Player{

    constructor(){
        this.name = null;
        this.distance = 0;
        this.rank = 0;
        this.index = null;
    }
 getCount(){
     database.ref("playerCount").on("value",(data)=>{
         playerCount=data.val()
     })
 }
 update(){
    var playerRef = "players/player"+ this.index
    database.ref(playerRef).set({

        name:this.name,
        distance:this.distance,
        rank:this.rank
    })

 }
 updateCount(count){
     database.ref("/").update({
         playerCount:count
     })
 }
 static getPlayerinfo(){
    
    database.ref("players").on("value",(data)=>{
        allPlayers = data.val()
    })
 }

}