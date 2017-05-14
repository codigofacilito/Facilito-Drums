$(function(){
	playSound();
});
var HiHat = document.getElementById('HiHat');
var Kick = document.getElementById('Kick');
var P1 = document.getElementById('P1');
var P2 = document.getElementById('P2');
var Tarola = document.getElementById('Tarola');
var Tom1 = document.getElementById('Tom1');
var Tom2 = document.getElementById('Tom2');


function playSound(){
	$('.hihat').click(hihat);
	$('.kick').click(kick);
	$('.p1').click(p1);
	$('.p2').click(p2);
	$('.tarola').click(tarola);
	$('.tom1').click(tom1);
	$('.tom2').click(tom2);

	$('body').keydown(function(event){
		if (event.keyCode == 81) {
			hihat();
		}
		else if(event.keyCode == 87){
			kick();
		}
		else if(event.keyCode == 69){
			p1();
		}
		else if(event.keyCode == 82){
			p2();
		}
		else if(event.keyCode == 84){
			tarola();
		}
		else if(event.keyCode == 89){
			tom1();
		}
		else if(event.keyCode == 68){
			tom2();
		}
	})
}

function hihat(){
	$('.hihat').focus();
	$('#HiHat').attr('src','drumkit/HiHat.wav');
	HiHat.play();
}
function kick(){
	$('.kick').focus();
	$('#Kick').attr('src','drumkit/Kick.wav');
	Kick.play();
}
function p1(){
	$('.p1').focus();
	$('#P1').attr('src','drumkit/P1.wav');
	P1.play();
}
function p2(){
	$('.p2').focus();
	$('#P2').attr('src','drumkit/P2.wav');
	P2.play();
}
function tarola(){
	$('.tarola').focus();
	$('#Tarola').attr('src','drumkit/Tarola.wav');
	Tarola.play();
}
function tom1(){
	$('.tom1').focus();
	$('#Tom1').attr('src','drumkit/Tom1.wav');
	Tom1.play();
}
function tom2(){
	$('.tom2').focus();
	$('#Tom2').attr('src','drumkit/Tom2.wav');
	Tom2.play();
}