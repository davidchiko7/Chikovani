function luckySevens(){

var initialBet = document.getElementById("initialBet").value;
var money = 0;
var die1 = 0;
var die2 = 0;
var dice = 0;
var rollTotal = 0;
var unLuckyCounter = 0;
var money = initialBet;
var moneyHeld = [initialBet];
var win = 4;
var loss = 1;
var maxHeld = 0;	
	
		if (money <= 0) {
			console.log ("Bet has to be more than 0!");
		alert ("Bet has to be more than 0!");
		return;}
		
		do{
		rollTotal++;
		die1 = Math.floor(Math.random() * 6) + 1;
		die2 = Math.floor(Math.random() * 6) + 1;	
		dice = die1+die2;

			
			if (dice == 7){
			money = money+win; 
			var last_element = moneyHeld[moneyHeld.length -1]; 
			var last_updated = last_element + win; 
			moneyHeld.push(last_updated);

			
			}else {
			money--;
			unLuckyCounter++;
				
			var last_element = moneyHeld[moneyHeld.length -1];
			var last_updated = last_element - loss;
			moneyHeld.push(last_updated);
			rollTotal = rollTotal++;
			}


	}while(money>0);
	var totalMax = 0;

	totalMax = Math.max.apply(Math, moneyHeld);
	numRolls = moneyHeld.indexOf(totalMax);
	if(numRolls<1){
		numRolls = 0;
	}

	document.getElementById("p1").innerHTML=("<center><br><br><table style=\"width: 100% height: 100%;\" border = \"1\";><th colspan=\"2\"; class=\"th1\">Results</th><tr><td>Starting Bet</td><td>$" + initialBet + ".00</td></tr><tr><td>Total Rolls Before Going Broke</td><td>"+ rollTotal +"</td></tr><tr><td>Highes Amount Won</td><td>$"+totalMax+".00</td></tr><tr><td>Roll Count at Highest Amount Held</td><td>"+ numRolls + "</td></tr></table></center>");
	document.getElementById("p2").innerHTML="Play Again";
} 