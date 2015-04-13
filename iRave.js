var estado=0;
var prev =0;
var voltar = 1;

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
    items[i].innerHTML =h+":"+m+":"+s;;
	}
	//document.getElementById("txt").innerHTML= h+":"+m+":"+s;
	//document.getElementById("txts").innerHTML = h+":"+m+":"+s;
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
		case 2:
		colapseAll();
		document.getElementById("estado").style.display="inline";
		prev= estado;
		estado=3;
		voltar=2;
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
		case 5:
		colapseAll();
		document.getElementById("emergencia-s").style.display="inline";
		prev= estado;
		estado=0;
		voltar=0;
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
	
	}
}
