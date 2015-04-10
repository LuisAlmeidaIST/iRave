var estado=1;
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

function colapseCaixa(){
	if(estado==0){
		document.getElementById("caixa1").style.visibility='visible';
		document.getElementById("menu").style.visibility='hidden';
		estado++;
	}
	else{
		if(estado==1) {
			document.getElementById("caixa1").style.visibility='hidden';
			document.getElementById("menu").style.visibility='visible';
			estado--;
		}
	}
}