var chosenId;
var aiId;
var p1score = 0;
var p2score = 0;
var notfirsttime = false;
var countP1 = 0;
var countP2 = 0;
function begin(){
	document.getElementById("paper2").style.display = "none";
	document.getElementById("stone2").style.display = "none";
	document.getElementById("scissor2").style.display = "none";
}

function gamemodechosen(){
	document.getElementById("modeButton").style.display = "none";
	startGame();

}
function paper1clicked(){
		chosenId = 0;
		document.getElementById("chosenName1").innerHTML = "Paper";
		document.getElementById("stone1").style.display = "none";
		document.getElementById("scissor1").style.display = "none";
		gameLogic();
}

function stone1clicked(){
	chosenId = 1;
		document.getElementById("chosenName1").innerHTML = "Stone";
		document.getElementById("paper1").style.display = "none";
		document.getElementById("scissor1").style.display = "none";
		gameLogic();
}

function scissor1clicked(){
	chosenId = 2;
		document.getElementById("chosenName1").innerHTML = "Scissor";
		document.getElementById("paper1").style.display = "none";
		document.getElementById("stone1").style.display = "none";
		gameLogic();
}

function startGame(){
	document.getElementById("score2").innerHTML = "Score - " + 0;
	document.getElementById("score1").innerHTML = "Score - " + 0;
	document.getElementById("chosenName1").innerHTML = "Choose";
	document.getElementById("chosenName2").innerHTML = "choosing...";
	document.getElementById("vsAI").style.display = "flex";
	if(notfirsttime){
		document.getElementById("paper1").style.display = "inline-flex";
		document.getElementById("stone1").style.display = "inline-flex";
		document.getElementById("scissor1").style.display = "inline-flex";
	}
	begin();
}

function gameLogic(){
	notfirsttime = true;
	aiId = Math.floor(Math.random() * 3);
	//aiId = 0;
	if(aiId === 0){
		document.getElementById("chosenName2").innerHTML = "Paper";
		document.getElementById("paper2").style.display = "inline-flex";
	}
	if(aiId === 1){
		document.getElementById("chosenName2").innerHTML = "Stone";
		document.getElementById("stone2").style.display = "inline-flex";
	}
	if(aiId === 2){
		document.getElementById("chosenName2").innerHTML = "Scissor";
		document.getElementById("scissor2").style.display = "inline-flex";
	}
	document.getElementById("modalBody").style.display = "none";
	document.getElementById("modalBodywin").style.display = "none";
	document.getElementById("modalBodyloss").style.display = "none";
	//console.log(aiId);
	//console.log(chosenId);
	if(chosenId === 0){
		if(aiId === 0){
			//document.getElementById("modalBody").style.display = "flex";
			//document.getElementById("modalBody").innerHTML = "Draw !!";
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
		}
		if(aiId === 1){
			p1score++;
			document.getElementById("score1").innerHTML = "Score - " + p1score;
			//document.getElementById("modalBodywin").style.display = "flex";
			//document.getElementById("modalBodywin").innerHTML = "You Win !!!";
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
				//
		}
		if(aiId === 2){
			p2score++;
			document.getElementById("score2").innerHTML = "Score - " + p2score;
			//document.getElementById("modalBodyloss").style.display = "flex";
			//document.getElementById("modalBodyloss").innerHTML = "You lost !";
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
		}
		//document.getElementById("playagain").style.display = "flex";
	}
	if(chosenId === 1){
		if(aiId === 0){
			p2score++;
			document.getElementById("score2").innerHTML = "Score - " + p2score;
			//document.getElementById("modalBodyloss").style.display = "flex";
			//document.getElementById("modalBodyloss").innerHTML = "You Lost !";
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
		}
		if(aiId === 1){
			//document.getElementById("modalBody").style.display = "flex";
			//document.getElementById("modalBody").innerHTML = "Draw !!";
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
				//
		}
		if(aiId === 2){
			p1score++;
			document.getElementById("score1").innerHTML = "Score - " + p1score;
			//document.getElementById("modalBodywin").style.display = "flex";
			//document.getElementById("modalBodywin").innerHTML = "You Win !!!";
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
		}
		//document.getElementById("playagain").style.display = "flex";
	}
	if(chosenId === 2){
		if(aiId === 0){
			p1score++;
			document.getElementById("score1").innerHTML = "Score - " + p1score;
			//document.getElementById("modalBodywin").style.display = "flex";
			//document.getElementById("modalBodywin").innerHTML = "You Win !!!";
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
		}
		if(aiId === 1){
			p2score++;
			document.getElementById("score2").innerHTML = "Score - " + p2score;
			//document.getElementById("modalBodyloss").style.display = "flex";
			//document.getElementById("modalBodyloss").innerHTML = "You Lost !";
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
				//
		}
		if(aiId === 2){
			//document.getElementById("modalBody").style.display = "flex";
			//document.getElementById("modalBody").innerHTML = "Draw !!";
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			//setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
		}
		
	}
	if(p2score === 5 || p1score === 5)
	{
		document.getElementById("playagain").style.display = "flex";
		if(p1score === 5){
			document.getElementById("modalBodywin").style.display = "flex";
			document.getElementById("modalBodywin").innerHTML = "You Win !!!";
			setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
		}
		else
		{
			document.getElementById("modalBodyloss").style.display = "flex";
			document.getElementById("modalBodyloss").innerHTML = "You Lost !";
			setTimeout(function(){$('#endgameModal').modal('toggle')}, 500);
			setTimeout(function(){$('#endgameModal').modal('toggle')}, 2000);
		}
	}
	else
	{
		setTimeout(function(){
			document.getElementById("chosenName1").innerHTML = "Choose";
			document.getElementById("chosenName2").innerHTML = "choosing...";
			document.getElementById("vsAI").style.display = "flex";
			if(notfirsttime){
				document.getElementById("paper1").style.display = "inline-flex";
				document.getElementById("stone1").style.display = "inline-flex";
				document.getElementById("scissor1").style.display = "inline-flex";
			}
			begin();
		},2000);
	}
}