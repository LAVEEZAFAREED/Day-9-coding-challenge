//DAY 9 coding challenge:
//Question 1:Alien Colours:Imagine an alien was just shot down in a game.
//Assign 'green', 'yellow',or 'red' to a variable called alien colour.
let alienColour = "yellow";
if (alienColour == "yellow")  {
    console.log("You owned 10 points!");
}
alienColour = "red";
if (alienColour == "yellow") {
    //no out put because the condition is false
}
 //Question 2:Alien Colour 2:Choose a colour for an alien,then  write if-else chain allow you to handlr multiplr condition.
 alienColour ="yellow";
 if (alienColour == "yellow")  {
    console.log("You just earned 10 points!");
 }
 else{
    console.log("you just lost 5 points!");
 }

 //Question 3:Aliens Colour:Convert your if else chain to handle three colours: green, yellow, red.
 alienColour = "yellow";
 if(alienColour == "green")   {
    console.log("you just earned 5 points");

}else if(alienColour == "yellow")   { 
    console.log("You just earned 10 points.");

}else if(alienColour == "red")   {
    console.log("you just owned 15 points.")
}
 