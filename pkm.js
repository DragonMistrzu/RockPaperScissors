let Thing =function(name,beat){
    this.name = name;
    this.beat = beat;
}
let kamien =new Thing("rock","scissors");
let scissors =new Thing("scissors","paper");
let paper =new Thing("paper","rock");
let opts=[kamien,scissors,paper];
function game(choice){
    AIchoice=opts[Math.floor(Math.random()*opts.length)];
    let p= document.getElementById("result");
    p.innerHTML="Wybrałeś/aś: " + choice.name + "<br>" + "Komputer wylosował: " + AIchoice.name + "<br>";
    if(choice.beat==AIchoice.name){
        p.innerHTML+="Wygrałeś/aś!";
    }
  else  if(AIchoice.beat==choice.name){
        p.innerHTML+="Przegrałeś/aś!";
    }
    else{
        p.innerHTML+="Remis!";
    }
}
function reset(){
    let p= document.getElementById("result");
    p.innerHTML=" ";
}