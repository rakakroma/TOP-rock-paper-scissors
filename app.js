
function computerPlay(){
    let num = Math.floor(Math.random()*3)+1;
    switch(num){
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        case 3:
            return "Stone";
            break;
    }
}