class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }


    deupdate_name(){

        database.ref("players/player1").update({

            name: "",
            distance:0,
            score:0


        })

        database.ref("players/player2").update({

            name: "",
            distance:0,
            score:0


        })
    
    }

    
}


////https://console.dialogflow.com/api-client/demo/embedded/bc20844e-cfb0-4b45-b6a0-277e9c470e78


