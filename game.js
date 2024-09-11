let num = prompt("enter any no. btw 1 to 10");

let rand = Math.floor(Math.random()*10) + 1;

while(true){
    if (num == "quit") {
        console.log("you quit");
        break;
    }
    if (rand == num) {
        console.log("congratulation! You found the no.",rand);
        break;
    }else if (rand<num) {
        num=prompt("no. is smaller");
    }else{
        num = prompt("no. is greater");
    }
}

