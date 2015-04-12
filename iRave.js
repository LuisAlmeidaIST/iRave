var estado=0;
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
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
}
function backs(){
	if(estado==0){
		estado++;
		return estado;
	}
	else
		return estado-1;
}
function colapseCaixa(i){
	colapseAll();
	switch (i){
		case 0:
		document.getElementById("caixa1").style.display="inline";
		estado=0;
		break;
		case 1:
		document.getElementById("menu").style.display="inline";
		estado=1;
		break;
		case 2:
		document.getElementById("humor").style.display="inline";
		estado=2;
		break;
		case 3:
		document.getElementById("estado").style.display="inline";
		estado=3;
		break;
	}
}