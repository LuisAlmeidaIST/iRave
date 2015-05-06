var estado=0;
var prev =0;
var voltar = 1;
var warning = 0;
var todos = 1;
var palco = 1;
var pessoas = 1;


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
		document.getElementById("mut-palcos").style.display = "none";
		document.getElementById("bandas").style.display = "none";
		document.getElementById("estilos").style.display = "none";
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
			if(todos==0){
				document.getElementById("silencio").style.display="inline";
			}else{
				document.getElementById("silencio").style.display="none";
			}
			if(warning > 0){
				document.getElementById("warning").style.display="inline";
			}else{
				document.getElementById("warning").style.display="none";
			}
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
		case 8:
			colapseAll();
			document.getElementById("mute").style.display = "inline";
			getsTime();
			prev = estado;
			estado = 8;
			voltar = 1;
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
		document.getElementById("estado").style.display="inline";
		prev= estado;
		estado=3;
		voltar=2;
		break;
	    case 8:
	        if(todos == 1){
	        	silence_this(1);
	        }else{
	        	mute_rest(1);
	        }
	        break;	
	    case 10:
	        mute_rest(3);
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
	        estado = 24;
	        voltar = 20;
	        break;
		case 9:
			mute_rest(2);
			break;
	    case 22:
	        notify_style(1);
	        break;
	    case 23:
	        notify_band(1);
	        break;
	    case 24:
	        notify_stage(1);
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
			document.getElementById("emergency").innerHTML= warning+" Casos de Emergência";
			prev= estado;
			estado=4;
			voltar=2;
			break;
		case 1:
			colapseAll();
			document.getElementById("mute").style.display="inline";
			getsTime();
			prev= estado;
			estado=8;
			voltar=1;
			break;
		case 5:
		colapseAll();
		warning ++;
		document.getElementById("emergencia-s").style.display="inline";
		getsTime();
		prev= estado;
		estado=0;
		voltar=0;
		break;
		case 8:
			if(palco == 0){
				snd1.volume = .5;
				if(pessoas == 1){
					todos = 1;
					document.getElementById("mute1").style.background = "#007dc1";
				}
				palco = 1;
				document.getElementById("palcos1").style.background = "#007dc1";
			}else{
				colapseAll();
				document.getElementById("mut-palcos").style.display = "inline";
				estado = 9;
				voltar = 8;
			}
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
            document.getElementById("bandas").style.display = "inline";
            prev = estado;
            estado = 23;
            voltar = 20;
            break;
        case 22:
            notify_style(2);
            break;
        case 23:
            notify_band(2);
            break;
        case 24:
            notify_stage(2);
            break;
    }
}

function mute_rest(h) {
	switch (h) {
		case 1:
				snd1.volume = 0.5;
				snd2.volume = 1;
				todos = 1;
				pessoas = 1;
				palco = 1;
				document.getElementById("mute1").style.background = "#007dc1";
				document.getElementById("pessoas1").style.background = "#007dc1";
				document.getElementById("palcos1").style.background = "#007dc1";
			break;
	    case 2:
	            document.getElementById("palcos1").style.background = "#007dc1";
	            document.getElementById("mute1").style.background = "#d0451b";
	            document.getElementById("pessoas1").style.background = "#d0451b";
	            snd2.volume = 0;
	            palco = 1;
	            todos = 0;
	            pessoas = 0;
	            snd1.volume = 0.5;
	            colapseCaixa(backs());
	        break;
            case 3:
	            document.getElementById("pessoas1").style.background = "#007dc1";
	            document.getElementById("mute1").style.background = "#d0451b";
	            document.getElementById("palcos1").style.background = "#d0451b";
	            snd1.volume = 0;
	            pessoas = 1;
	            todos = 0;
	            palco = 0;
	            snd2.volume = 1;
	            colapseCaixa(backs());
	        break;
	}
}

function silence_this(h) {
	switch (h) {
		case 1:
				document.getElementById("mute1").style.background = "#d0451b";
				document.getElementById("pessoas1").style.background = "#d0451b";
				document.getElementById("palcos1").style.background = "#d0451b";
				snd1.volume = 0;
				snd2.volume = 0;
				pessoas = 0;
				palco = 0;
				todos = 0;
			break;
	    case 2:
	            document.getElementById("palcos1").style.background = "#d0451b";
		    document.getElementById("mute1").style.background = "#d0451b";
	            snd1.volume = 0;
	            palco = 0;
	            todos = 0;
	            colapseCaixa(backs());
	        break;
        case 3:
	            document.getElementById("pessoas1").style.background = "#d0451b";
		    document.getElementById("mute1").style.background = "#d0451b";
	            snd2.volume = 0;
	            pessoas = 0;
	            todos = 0;
	            colapseCaixa(backs());
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
		case 8:
			if(pessoas == 0){
				snd2.volume = 1;
				if(palco == 1){
					todos = 1;
					document.getElementById("mute1").style.background = "#007dc1";
				}
				pessoas = 1;
				document.getElementById("pessoas1").style.background = "#007dc1";
			}else{
				colapseAll();
				document.getElementById("mut-palcos").style.display = "inline";
				estado = 10;
				voltar = 8;
			}
			break;
	    case 9:
	    silence_this(2);
	    break;
	    case 10:
	    silence_this(3);
	    break;
	    case 7:
	        colapseAll();
	        document.getElementById("historico").style.display = "inline";
	        get_historico();
	        prev = estado;
	        estado = 21;
	        voltar = 7;
	        break;
	    case 20:
	        colapseAll();
	        document.getElementById("estilos").style.display = "inline";
	        prev = estado;
	        estado = 22;
	        voltar = 20;
	        break;
	    case 22:
	        notify_style(3);
	        break;
	    case 23:
	        notify_band(3);
	        break;
	    case 24:
	        notify_stage(3);
	        break;
	}
}

function get_historico(){
    if (announcement_palco == 4 || announcement_palco == 1 || announcement_palco == 6 || announcement_palco == 9 || announcement_banda == 4 || announcement_banda == 1 || announcement_banda == 6 || announcement_banda == 9 || announcement_estilo == 4 || announcement_estilo == 3 || announcement_estilo == 8 || announcement_estilo == 9) {
        document.getElementById("historial").innerHTML = "Concerto de Steve Aoki no palco Mundo em 5 minutos!";
    }
    else {
        document.getElementById("historial").innerHTML = "Nao tem novidades";
    }
}

function notify_style(f) {
    switch (f) {
        case 1:
            if (announcement_estilo == 4 || announcement_estilo == 1 || announcement_estilo == 6 || announcement_estilo == 9) {
                announcement_estilo -= 1;
                document.getElementById("b_s_1").style.background = "#007dc1";
            }
            else {
                announcement_estilo += 1;
                document.getElementById("b_s_1").style.background = "#d0451b";
            }
            break;
        case 2:
            if (announcement_estilo == 4 || announcement_estilo == 3 || announcement_estilo == 8 || announcement_estilo == 9) {
                announcement_estilo -= 3;
                document.getElementById("b_s_2").style.background = "#007dc1";
            }
            else {
                announcement_estilo += 3;
                document.getElementById("b_s_2").style.background = "#d0451b";
            }
            break;
        case 3:
            if (announcement_estilo == 6 || announcement_estilo == 5 || announcement_estilo == 8 || announcement_estilo == 9) {
                announcement_estilo -= 5;
                document.getElementById("b_s_3").style.background = "#007dc1";
            }
            else {
                announcement_estilo += 5;
                document.getElementById("b_s_3").style.background = "#d0451b";
            }
            break;

    }
}

function notify_stage(f) {
    switch (f) {
        case 1:
            if (announcement_palco == 4 || announcement_palco == 1 || announcement_palco == 6 || announcement_palco == 9) {
                announcement_palco -= 1;
                document.getElementById("b_p_1").style.background = "#007dc1";
            }
            else {
                announcement_palco += 1;
                document.getElementById("b_p_1").style.background = "#d0451b";
            }
            break;
        case 2:
            if (announcement_palco == 4 || announcement_palco == 3 || announcement_palco == 8 || announcement_palco == 9) {
                announcement_palco -= 3;
                document.getElementById("b_p_2").style.background = "#007dc1";
            }
            else {
                announcement_palco += 3;
                document.getElementById("b_p_2").style.background = "#d0451b";
            }
            break;
        case 3:
            if (announcement_palco == 6 || announcement_palco == 5 || announcement_palco == 8 || announcement_palco == 9) {
                announcement_palco -= 5;
                document.getElementById("b_p_3").style.background = "#007dc1";
            }
            else {
                announcement_palco += 5;
                document.getElementById("b_p_3").style.background = "#d0451b";
            }
            break;

    }
}

function notify_band(f) {
    switch (f) {
        case 1:
            if (announcement_banda == 4 || announcement_banda == 1 || announcement_banda == 6 || announcement_banda == 9) {
                announcement_banda -= 1;
                document.getElementById("b_b_1").style.background = "#007dc1";
            }
            else {
                announcement_banda += 1;
                document.getElementById("b_b_1").style.background = "#d0451b";
            }
            break;
        case 2:
            if (announcement_banda == 4 || announcement_banda == 3 || announcement_banda == 8 || announcement_banda == 9) {
                announcement_banda -= 3;
                document.getElementById("b_b_2").style.background = "#007dc1";
            }
            else {
                announcement_banda += 3;
                document.getElementById("b_b_2").style.background = "#d0451b";
            }
            break;
        case 3:
            if (announcement_banda == 6 || announcement_banda == 5 || announcement_banda == 8 || announcement_banda == 9) {
                announcement_banda -= 5;
                document.getElementById("b_b_3").style.background = "#007dc1";
            }
            else {
                announcement_banda += 5;
                document.getElementById("b_b_3").style.background = "#d0451b";
            }
            break;

    }
}

