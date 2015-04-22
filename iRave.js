var estado=0;
var prev =0;
var voltar = 1;
var announcement_palco = 0;
var announcement_banda = 0;
var announcement_estilo = 0;

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
		document.getElementById("noti").style.display = "none";
		document.getElementById("historico").style.display = "none";
		document.getElementById("noti-add").style.display = "none";
		document.getElementById("palco").style.display = "none";
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
	    case 7:
	        colapseAll();
	        document.getElementById("noti").style.display = "inline";
	        getsTime();
	        prev = estado;
	        estado = 7;
	        voltar = 1;
	    break;
        case 20:
	        colapseAll();
	        document.getElementById("noti-add").style.display = "inline";
	        prev = estado;
	        estado = 20;
	        voltar = 7;
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
	        document.getElementById("estado").style.display = "inline";
	        prev = estado;
	        estado = 3;
	        voltar = 2;
	        break;
	    case 7:
	        colapseAll();
	        document.getElementById("noti-add").style.display = "inline";
	        prev = estado;
	        estado = 20;
	        voltar = 7;
	        break;
	    case 20:
	        colapseAll();
	        document.getElementById("palco").style.display = "inline";
	        prev = estado;
	        estado = 22;
	        voltar = 20;
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
	    case 7:
	        colapseAll();
	        document.getElementById("noti-add").style.display = "inline";
	        prev = estado;
	        estado = 20;
	        voltar = 7;
	        break;
	}
}

function notify_stage(f) {
    switch(f){
        case 1:
            if(announcement_palco == 4 || announcement_palco == 1 || announcement_palco == 6 || announcement_palco == 9){
                announcement_palco -= 1;
                document.getElementById("b_p_1").style.background = "-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #007dc1), color-stop(1, #0061a7))";
                document.getElementById("b_p_1").style.background = "-moz-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_1").style.background = "-webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_1").style.background = "-o-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_1").style.background = "-ms-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_1").style.background = "linear-gradient(to bottom, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_1").style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0)";
                document.getElementById("b_p_1").style.background = "#007dc1";
            }
            else {
                announcement_palco += 1;
                document.getElementById("b_p_1").style.background = "-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #d0451b), color-stop(1, #bc3315))";
                document.getElementById("b_p_1").style.background = "-moz-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_1").style.background = "-webkit-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_1").style.background = "-o-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_1").style.background = "-ms-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_1").style.background = "linear-gradient(to bottom, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_1").style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#d0451b', endColorstr='#bc3315',GradientType=0)";
                document.getElementById("b_p_1").style.background = "#d0451b";
            }
            break;
        case 2:
            if (announcement_palco == 4 || announcement_palco == 3 || announcement_palco == 8 || announcement_palco == 9) {
                announcement_palco -= 3;
                document.getElementById("b_p_2").style.background = "-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #007dc1), color-stop(1, #0061a7))";
                document.getElementById("b_p_2").style.background = "-moz-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_2").style.background = "-webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_2").style.background = "-o-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_2").style.background = "-ms-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_2").style.background = "linear-gradient(to bottom, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_2").style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0)";
                document.getElementById("b_p_2").style.background = "#007dc1";
            }
            else {
                announcement_palco += 3;
                document.getElementById("b_p_2").style.background = "-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #d0451b), color-stop(1, #bc3315))";
                document.getElementById("b_p_2").style.background = "-moz-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_2").style.background = "-webkit-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_2").style.background = "-o-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_2").style.background = "-ms-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_2").style.background = "linear-gradient(to bottom, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_2").style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#d0451b', endColorstr='#bc3315',GradientType=0)";
                document.getElementById("b_p_2").style.background = "#d0451b";
            }
            break;
        case 3:
            if (announcement_palco == 6 || announcement_palco == 5 || announcement_palco == 8 || announcement_palco == 9) {
                announcement_palco -= 5;
                document.getElementById("b_p_3").style.background = "-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #007dc1), color-stop(1, #0061a7))";
                document.getElementById("b_p_3").style.background = "-moz-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_3").style.background = "-webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_3").style.background = "-o-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_3").style.background = "-ms-linear-gradient(top, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_3").style.background = "linear-gradient(to bottom, #007dc1 5%, #0061a7 100%)";
                document.getElementById("b_p_3").style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0)";
                document.getElementById("b_p_3").style.background = "#007dc1";
            }
            else {
                announcement_palco += 5;
                document.getElementById("b_p_3").style.background = "-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #d0451b), color-stop(1, #bc3315))";
                document.getElementById("b_p_3").style.background = "-moz-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_3").style.background = "-webkit-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_3").style.background = "-o-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_3").style.background = "-ms-linear-gradient(top, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_3").style.background = "linear-gradient(to bottom, #d0451b 5%, #bc3315 100%)";
                document.getElementById("b_p_3").style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#d0451b', endColorstr='#bc3315',GradientType=0)";
                document.getElementById("b_p_3").style.background = "#d0451b";
            }
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
	    case 7:
	        colapseAll();
	        document.getElementById("historico").style.display = "inline";
	        prev = estado;
	        estado = 21;
	        voltar = 7;
	        break;

	
	}
}
