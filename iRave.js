var estado=0;
var prev =0;
var voltar = 1;
var todos = 0;
var palco = 0;
var pessoas = 0;


var snd1 = new Audio();
var src1 = document.createElement("source");
src1.type = "audio/ogg";
src1.src = 'resources/sound1.ogg';
snd1.appendChild(src1);

var snd2 = new Audio();
var src2 = document.createElement("source");
src2.type = "audio/ogg";
src2.src = 'resources/sound2.ogg';
snd2.appendChild(src2);


snd1.loop = true;
snd1.play();
snd1.volume = 0.5;

snd2.loop = true;
snd2.play();
snd2.volume = 1;


function getsTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("ajuda-horas").innerHTML=h+":"+m+":"+s;
}
function startTime() {
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	var items = document.getElementsByClassName("txt");
	var len,i;
	for (i = 0, len = items.length; i < len; i++) {
	items[i].innerHTML =h+":"+m+":"+s;
	}
	var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
	if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

function colapseAll(){
		document.getElementById("menu").style.display="none";
		document.getElementById("caixa1").style.display="none";
		document.getElementById("humor").style.display="none";
		document.getElementById("estado").style.display="none";
		document.getElementById("estatisticas").style.display="none";
		document.getElementById("emergencia").style.display="none";
		document.getElementById("emergencia-s").style.display="none";
		document.getElementById("mute").style.display="none";
		document.getElementById("noti").style.display="none";
}
function backs(){
	if(voltar==0){
		prev= estado;
		estado++;
		return voltar;
	}
	else
		return voltar;
}

function getEstado(){
	return estado;
}

var scrolled = 0;

$(document).ready(function () {


	$("#downClick").on("click", function () {
		scrolled = scrolled + 20;

		$(".cover").animate({
			scrollTop: scrolled
		});

	});


	$("#upClick").on("click", function () {
		scrolled = scrolled - 20;

		$(".cover").animate({
			scrollTop: scrolled
		});

	});


	$(".clearValue").on("click", function () {
		scrolled = 0;
	});


});

var clicked = false, clickY;
$(document).on({
	'mousemove': function(e) {
		clicked && updateScrollPos(e);
	},
	'mousedown': function(e) {
		clicked = true;
		clickY = e.pageY;
	},
	'mouseup': function() {
		clicked = false;
		$('html').css('cursor', 'auto');
	}
});

var updateScrollPos = function(e) {
	$('html').css('cursor', 'row-resize');
	$(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}

function colapseCaixa(i){
	colapseAll();
	prev = estado;
	switch (i){
		case 0:
		document.getElementById("caixa1").style.display="inline";
		prev= estado;
		estado=0;
		voltar=1;
		break;
		case 1:
		document.getElementById("menu").style.display="inline";
		prev= estado;
		estado=1;
		voltar=0;
		break;
		case 2:
		document.getElementById("humor").style.display="inline";
		prev= estado;
		estado=2;
		voltar=1;
		break;
		case 3:
		document.getElementById("estado").style.display="inline";
		prev= estado;
		estado=3;
		voltar=2;
		break;
		case 4:
		document.getElementById("estatisticas").style.display="inline";
		prev= estado;
		estado=3;
		voltar=2;
		break;
		case 5:
		document.getElementById("emergencia").style.display="inline";
		prev= estado;
		estado=3;
		voltar=2;
		break;
		case 6:
		document.getElementById("emergencia-s").style.display="inline";
		prev= estado;
		estado=0;
		voltar=0;
		break;
	}
}

function colapseCaixaBut1(i){
	prev= estado;
	switch (i){
		case 0:
		colapseAll();
		document.getElementById("caixa1").style.display="inline";
		prev= estado;
		estado=0;
		voltar=1;
		break;
		case 1:
		colapseAll();
		document.getElementById("noti").style.display="inline";
		getsTime();
		prev= estado;
		estado=7;
		voltar=1;
		break;
		case 2:
		colapseAll();
		document.getElementById("estado").style.display="inline";
		prev= estado;
		estado=3;
		voltar=2;
		break;
	    case 6:
	        snd1.volume = 0;
	        snd2.volume = 0;
	        break;
	}
}

function colapseCaixaBut2(i){
	prev= estado;
	switch (i){
		case 0:
		colapseAll();
		document.getElementById("caixa1").style.display="inline";
		prev= estado;
		estado=0;
		voltar=1;
		break;
		case 2:
		colapseAll();
		document.getElementById("estatisticas").style.display="inline";
		prev= estado;
		estado=4;
		voltar=2;
		break;
		case 1:
		colapseAll();
		document.getElementById("mute").style.display="inline";
		getsTime();
		prev= estado;
		estado=6;
		voltar=1;
		break;
		case 5:
		colapseAll();
		document.getElementById("emergencia-s").style.display="inline";
		getsTime();
		prev= estado;
		estado=0;
		voltar=0;
		break;
	    case 6:
	        snd1.volume = 0.5;
	        snd2.volume = 0;
	        break;
	}
}

function colapseCaixaBut3(i){
	
	switch (i){
		case 0:
		colapseAll();
		document.getElementById("caixa1").style.display="inline";
		prev= estado;
		estado=0;
		voltar=1;
		break;
		case 1:
		colapseAll();
		document.getElementById("humor").style.display="inline";
		prev= estado;
		estado=2;
		voltar=1;
		break;
		case 2:
		colapseAll();
		document.getElementById("emergencia").style.display="inline";
		prev = estado;
		estado=5;
		voltar=prev;
		break;
		case 5:
		colapseCaixa(prev);
		break;
	    case 6:
	        snd1.volume = 0;
	        snd2.volume = 1;
	        break;
	
	}
}
