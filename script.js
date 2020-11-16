
const questions = document.querySelectorAll(".question");
console.log("allQuestions", questions);

questions.forEach(function(quest){
	const button = quest.querySelector(".button");
	const answer = quest.querySelector(".answer");

	console.log("button", button);
	console.log("answer", answer);

	button.addEventListener("click", function(){

		// answer.style.display ="block";
		answer.classList.toggle("show-text");
		button.classList.toggle("show-img");
		
		// questions.forEach(function(item){
		// 	if (item !== quest){
		// 		item.classList.remove("show-text");
		// 	}
		// });

		// quest.classList.toggle("show-text");
	});
});








// let button1 = document.getElementById ("test1");
// let button2 = document.getElementById ("test2");
// let button3 = document.getElementById ("test3");
// let button4 = document.getElementById ("test4");
// let button5 = document.getElementById ("test5");

// let p1 = document.getElementById("p1");
// let p2 = document.getElementById("p2");
// let p3 = document.getElementById("p3");
// let p4 = document.getElementById("p4");
// let p5 = document.getElementById("p5");

// function appearAnswer1 () {
// 	p1.style.display = "block";

// 	button1.addEventListener("click", disappearAnswer)
// 	function disappearAnswer(argument) {
// 		p1.style.display = "none";
// 	}
// };

// function appearAnswer2 () {
// 	p2.style.display = "block";
// 	setTimeout(function(){
// 	p2.style.display ="none";
// 	}, 6000);
// 	button2.addEventListener("click", disappearAnswer)
// 	function disappearAnswer(argument) {
// 		p2.style.display = "none";
// 	}
// };

// function appearAnswer3 () {
// 	p3.style.display = "block";
// 	setTimeout(function(){
// 	p3.style.display ="none";
// 	}, 6000);
// 	button3.addEventListener("click", disappearAnswer)
// 	function disappearAnswer(argument) {
// 		p3.style.display = "none";
// 	}
// };

// function appearAnswer4 () {
// 	p4.style.display = "block";
// 	setTimeout(function(){
// 	p4.style.display ="none";
// 	}, 6000);
// 	button4.addEventListener("click", disappearAnswer)
// 	function disappearAnswer(argument) {
// 		p4.style.display = "none";
// 	}
// };

// function appearAnswer5 () {
// 	p5.style.display = "block";
// 	setTimeout(function(){
// 	p5.style.display ="none";
// 	}, 6000);
// 	button5.addEventListener("click", disappearAnswer)
// 	function disappearAnswer(argument) {
// 		p5.style.display = "none";
// 	}
// };


// button1.addEventListener("click", appearAnswer1);
// button2.addEventListener("click", appearAnswer2);
// button3.addEventListener("click", appearAnswer3);
// button4.addEventListener("click", appearAnswer4);
// button5.addEventListener("click", appearAnswer5);


// const flattened = [[0,1],[2,3],[4,5]].reduce(
// 	(acc, array)=> {
// 		debugger;
// 		return accumulator.concat(array)
// 	},)


// const 
