$(document).ready(function(){

	var questions = [
		{
			title: 'What color is the sky?',
			answers: ['Blue','Red','Green','Purple'],
			correct: 0
		},
		{
			title: 'What color is the grass?',
			answers: ['Blue','Red','Green','Purple'],
			correct: 2
		},
		{
			title: 'What color is Barney?',
			answers: ['Blue','Red','Green','Purple'],
			correct: 3
		},
		{
			title: 'What color is blood?',
			answers: ['Blue','Red','Green','Purple'],
			correct: 1
		}
	];

	var currentQuestion = 0;
	var score = 0;

	showQuestion();

	$('body').on('click','.next',function(){
		var guess = $('input:checked').val();
		var question = questions[currentQuestion];
		if(guess == question.correct){
			score++;
		}
		currentQuestion++;
		showQuestion();
	});

	$('body').on('click','.restart',function(){
		currentQuestion = 0;
		score = 0;
		$('.restart').text('Next Question').removeClass('restart').addClass('next');
		showQuestion();
	});

	$('.answers').on('click','label',function(){
		$(this).toggleClass('highlight');
	});

	function showQuestion(){
		if(currentQuestion < questions.length){
			var question = questions[currentQuestion];
			$('.question h2').text(question.title);
			$('.answers').html('');
			for (var i = 0; i < question.answers.length; i++) {
				var html = "<li><input type='radio' name='answer' value='"+i+"' id='"+i+"'/><label for='"+i+"'>"+question.answers[i]+"</label></li>";
				$('.answers').append(html);
			}
		} else {
			displayResults();
		}
	}

	function displayResults(){
		$('.question h2').text('Quiz Complete');
		$('.answers').html('You got '+score+' out of '+questions.length+' correct');
		$('.next').text('Try Again?').removeClass('next').addClass('restart');
	}

});