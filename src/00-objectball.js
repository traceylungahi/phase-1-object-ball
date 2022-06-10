function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                },
                }
            },
            away: {
                teamName: "Charlotte Hornets",
                colors: ["Turquoise, Purple"],
                players: {
                    "Jeff Adrien": {
                        "number": 4,
                        "shoe": 18,
                        "points": 10,
                        "rebounds": 1,
                        "assists": 1,
                        "steals": 2,
                        "blocks": 7,
                        "slamDunks": 2
                    },
                    "Bismak Biyombo": {
                        "number": 0,
                        "shoe": 16,
                        "points": 12,
                        "rebounds": 4,
                        "assists": 7,
                        "steals": 7,
                        "blocks": 15,
                        "slamDunks": 10
                    },
                    "DeSagna Diop": {
                        "number": 2,
                        "shoe": 14,
                        "points": 24,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 4,
                        "blocks": 5,
                        "slamDunks": 5
                    },
                    "Ben Gordon": {
                        "number": 8,
                        "shoe": 15,
                        "points": 33,
                        "rebounds": 3,
                        "assists": 2,
                        "steals": 1,
                        "blocks": 1,
                        "slamDunks": 0
                    }, 
                    "Brendan Haywood": {
                        "number": 33,
                        "shoe": 15,
                        "points": 6,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 22,
                        "blocks": 5,
                        "slamDunks": 12
                    },
                }
            }
        }
    }

function numPointsScored (names) {
    let game = gameObject();
    for(let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;

        for(let key in data){
            let player = key;
            if(player === names){
                let points = data[key].points
                return `${names} has scored ${points}` 
            }
        }
    }
};
numPointsScored(); 


function shoeSize (names) {
    let game = gameObject();
    for(let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;

        for(let key in data){
            let player = key;
            if(player === names){
                let shoeSize = data[key].shoe
                return `${names} shoe size is ${shoeSize}`
            }
        } 
    }
};
shoeSize();


function teamColors (name) {
    let game = gameObject();
    for(let gameKey in game) {
        let teamObj = game[gameKey];
        let teamName = teamObj.teamName;
        let teamColors = teamObj.colors;
        if(teamName === name){
            return `${name} team colors are = [${teamColors}]`
        }
    }
}
teamColors();


function teamNames () {
    let game = gameObject();
    let colors = [];
    for(let gameKey in game) {
        let teamObj = game[gameKey];
        let teamName = teamObj.teamName;
        colors.push(`The teamname is ${teamName}`)
    }
    return colors
}
teamNames();


function playerNumbers (name) {
    let game = gameObject();
    let teamPlayerNumbers = [];
    for(let gameKey in game) {
        let teamObj = game[gameKey];
        let teamName = teamObj.teamName;
        let data = teamObj.players;
        if(teamName === name) {
            for(let key in data) {
                let number = data[key].number;
                teamPlayerNumbers.push(`${number}`)
            }
        }
    }
    return `Jersey numbers for ${name} are [${teamPlayerNumbers}]`;
}
playerNumbers();


function playerStats (names) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]; 
        let data = teamObj.players;

        for(let key in data) {
            let player = key;
            if(player === names){
                return data[key]
            }
        }
    }
}
playerStats();


function bigShoeRebounds () {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;

        for(let key in data) {
            console.log(data[key])
            let player = key;
            let shoeSize = data[key].shoe;
        }
    }
}
bigShoeRebounds();