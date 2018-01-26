var HB = document.getElementById("HB-T");
var HBdingwei = document.getElementsByClassName("HB-dingwei")[0]
var xiaoshi = document.getElementById("xiaoshi")
HB.onfocus = function(){
	HBdingwei.style.display = "block"

}
xiaoshi.onclick = function(){
	HBdingwei.style.height = 0;
}