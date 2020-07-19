console.log("is working")
var queen = {

    position: {
        x = 4,
        y: 3
    }
};

function chnagedirection(number, direction) // 3 E
{
    var temp;
    var temp1;
    switch (direction) {
        case "E":
            temp = queen.position.y + number; //temp=0+3
            if (temp < 7 || temp < 0) {
                console.log("out of boundary E");
            } else {
                queen.position.y = temp; // y-3
            }
            break;
        case "N":
            temp = queen.position.x + number; //temp=0+3
            if (temp < 8 || temp < 0) {
                console.log("out of boundary E");
            } else {
                queen.position.y = temp; // y-3
            }
            case "S":
                temp = queen.position.x + number; //temp=0+3
                if (temp < 7 || temp < 0) {
                    console.log("out of boundary E");
                } else {
                    queen.position.y = temp; // y-3
                }
                case "W":
                    temp = queen.position.y - number; //temp=0+3
                    if (temp < 7 || temp < 0) {
                        console.log("out of boundary E");
                    } else {
                        queen.position.y = temp; // y-3
                    }
                    case "NE":
                        temp = queen.position.x - number;
                        temp1 = queen.position.y + number;
                        if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                            console.log("out of boundary");
                        } else {
                            queen.position.y = temp1;
                            queen.position.x = temp1;
                        }
                        case "NW":
                            temp = queen.position.x + number;
                            temp1 = queen.position.y - number;
                            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                                console.log("out of boundary");
                            } else {
                                queen.position.y = temp1;
                                queen.position.x = temp1;
                            }
                            case "SE":
                                temp = queen.position.x + number;
                                temp1 = queen.position.y + number;
                                if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                                    console.log("out of boundary");
                                } else {
                                    queen.position.y = temp1;
                                    queen.position.x = temp1;
                                }
                                case "SW":
                                    temp = queen.position.x + number;
                                    temp1 = queen.position.y - number;
                                    if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                                        console.log("out of boundary");
                                    } else {
                                        queen.position.y = temp1;
                                        queen.position.x = temp1;
                                    }


    }
}

function play(input) //N3 S4 SE4
{
    var value = input.split("");
    value.forEach(element => {
        let number = Number(element.slice(element.lenth - 1));
        let direction = element.slice(0, element.lenth - 1);
        //console.log("number =>"+number)
        //console.log("direction=>"+direction)
        chnagedirection(number, direction)
    });
    console.log("You positio=>" + broard[queen.position.x][queen.position.y])
}
var broard = [
    //N  (e8) 
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"], //x=0,y=0 x=0,y=1 0,2
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"], //E
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
]