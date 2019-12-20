	//If there is time left:
			//yes: continue game
			//no: gameover
		//change the button to reset 
		//generate new Q&Anchor
	
	//If we click on answer box
		//if we are playing
			//correct?
				//increase score by 1second
				//show correctbox for 1second
				
			//wrong?
				//show try again for 1second
	
	var playingGame = false; //This indicates that the user is not playing the game
	var score;
	var initialTimeLeft; //This is the initial time
	var timeRemainingCounter;
	var correctAnswer;
	
	function changestartreset(){
		var changeResetStart
		 changeResetStart = document.getElementById("startreset");
			//if we are playing:
			if (playingGame == true){
				//If we click on the startreset button:
				location.reload(); //then reload thepage
			}
			else{
				//If we are not playing:  
				 
				 //TO RELAOD PAGE ONCE WE START PLAYING
				 playingGame = true;
				 
				//SETTING SCORE
				score = 0;//Set score to zero
				
				var scoreValue = document.getElementById("scorevalue");
				
				scoreValue.innerHTML = score;//Set score to zero
				
				//DISPLAY TIME
				show("timeremaining");
				//document.getElementById("timeremaining").style.display = "initial"; //Show countdown box
				
				initialTimeLeft = 60;
				var timeRemainingValue = document.getElementById("timeremainingvalue");		 
				
				//CHANGE START TO RESET
					changeResetStart.innerHTML = "Reset Game";
				
				generateQA();
				startCountDown();
					
						
						
						
						
				
				
					
				
				
				
				
					
				
				
				//generate new Q&A
				
				
				
				   
			}
		//
		
		/* SETS THE TIME*/
		
		
		
		
	}
	
	for (i=1; i<5; i++) {
		//WHEN THE CORRECT ANSWER OR WRONG ANSWER IS CLICKED
		document.getElementById("box" + i).onclick = function() {
			
			//If we are playing
			if (playingGame == true){
				
				//checks if answer chosen is thesame as correct answer
				if(this.innerHTML == correctAnswer){
					
					//increase the score by 1
					score++;
					
					document.getElementById("scorevalue").innerHTML = score;
					
					//show correct message and hide try again message
					show("correct");
					hide("wrong");
					
					setTimeout(function() 
							{hide("correct");},
							1000
						);
					generateQA();
				}
					//checks if answer chosen is not the correct answer
					else{
						show("wrong");
						hide("correct");
					
						setTimeout(function() 
							{hide("wrong");},
							1000
						);
					}
				if (initialTimeLeft == 0) {
					playingGame = false;
				}
			}
			
		}
	}
	
	
	//FUNCTIONS
	// NOTE- ALWAYS USE FUNCTIONS TO CARRY OUT COMPLEX STUFFS
	
	function generateQA() {
		//Create two variables that would hold two numbers
		
			var x = 1+ Math.round(9 * Math.random());
			var y = 1+ Math.round(9 * Math.random());
			
			correctAnswer = x * y; //variable thst holds the correct answer
			
			//display the correct answer
			
			document.getElementById("questions").innerHTML = x + "x" + y;
			
			//Generating wrong answers
			//Fill other divs with wrong answers
			
			var correctAnswerPosition = 1 + Math.round(3 * Math.random());
			
			document.getElementById("box" + correctAnswerPosition).innerHTML = correctAnswer;
			
			
			var answers =[correctAnswer]; //to make sure that the wrong answers are different
			for (i=1;i<5;i++) {
				
				//To check that the correct box is not filled with wrong answers
				if (i != correctAnswerPosition){
					
					var wrongAnswer;
					
					//TO CHECK IF THE WRONG ANSWER IS WEQUALTO THE CORRECT ANSWER
					do {
						wrongAnswer = (1+ Math.round(9 * Math.random())) + (1+ Math.round(9 * Math.random()));

					}
					while (answers.indexOf(wrongAnswer) > -1)//This checks if the variable wrongAnswer already exists in the array//(correctAnswer == wrongAnswer)			
					document.getElementById("box" + i).innerHTML = wrongAnswer; //This adds the wrongAnswer to a particular div
				
					answers.push(wrongAnswer);//Adds wrongAnswer to the array. So every instance there are three wrongAnswer pushed into the array
				}
				
				
				
			}
			
	}
	
	function  startCountDown() {
		var timeRemainingValue = document.getElementById("timeremainingvalue");
		var timeRemainingCounter = setInterval(function(){
			initialTimeLeft-=1;//CHECK HERE --
			timeRemainingValue.innerHTML=initialTimeLeft;
			
			if (initialTimeLeft == 0) {
				
				
				stopCountDown();
		
				//SHOW GAMEOVER ONCE THE TIME IS AT ZERO SECONDS
				show("gameover");
				var showGameOver = document.getElementById("gameover");
				
				showGameOver.innerHTML = "<p>Game Over!</p><p>Your score is " + score + "</p>";
				
				//HIDE THE COUNTDOWNBOX ONCE THE TIME IS AT ZERO SECONDS
				hide("timeremaining");
				
				//HIDE THE CORRECT MESSAGE ONCE THE TIME IS ZERO SECONDS
				hide("correct");
				//HIDE THE WRONG MESSAGE ONCE THE TIME IS ZERO SECONDS
				hide("wrong");
				
				
				
				//CHANGE RESET TO START
				changeResetStart.innerHTML = "Start Game";
				
				//CHANGE THE GAMEMODE TO NO PLAY MODE
				playingGame = false; 
			}
			
		}, 1000);
	}
					
	
	function stopCountDown() {
		clearInterval(timeRemainingCounter);
	}
				
	function hide(id) {
		document.getElementById(id).style.display="none";
	}
	
	function show(id) {
		document.getElementById(id).style.display="block";
	}
	
	