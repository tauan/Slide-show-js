window.onload = slide(1);
var bg = 1;

function slide(a) {
	var nBgs = 4;
	document.getElementById('imagemBg').style.backgroundImage = "url('imagens/"+a+".jpg')";
	icones(nBgs, a);
	bg=a;
}
function slideBack() {
	if(bg>1){
		bg--;
		slide(bg);
	}
}
function slideAfter() {
	if(bg<4){
		bg++;
		slide(bg);
	}
}
function icones(a, aa) { 
	document.getElementById('icones').innerHTML = "";
	for(b=1;b<=a;b++){
		if(b==aa){
			document.getElementById('icones').innerHTML += "<li class='selected' onclick='slide("+b+")'></li>";
		}else{
			document.getElementById('icones').innerHTML += "<li onclick='slide("+b+")'> </li>";
		}
	}
}