class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd(){
    var playerCarsAtEnd = database.ref('CarsAtEnd');
    playerCarsAtEnd.on("value", (data)=>{
      this.rank = data.val();
    })
  }
// static functions are invoked using Class name
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      'CarsAtEnd': rank
    })
  }
 
  }

  /*  */
