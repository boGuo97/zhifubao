var HB = document.getElementById("HB-T");
var HBdingwei = document.getElementsByClassName("HB-dingwei")[0]
// 让银行栏出现
HB.onfocus = function(){
	HBdingwei.style.display = "block"
}
var HBSpan = document.getElementById("xianshi").getElementsByTagName("span")
// 选择输入银行/  
for(var i = 0;i<HBSpan.length;i++){
	HBSpan[i].onclick = function(){
		 n = this.innerHTML;
		HBdingwei.style.display = "none"
		HB.value = n
	}
}
var HBN = document.getElementById("HB-N")
var HBNn = document.getElementById("HB-Nn") 
var arr = []
var kaHao = document.getElementById("kahao")
// 验证长度是否为16-19
HBN.onkeyup = function(event){
	arr.push(event.keyCode)
	HBNn.innerHTML = ""
	kaHao.innerHTML = HBN.value
	kaHao.style.height = "35px";
}
HBN.onfocus = function(){

}
HBN.onblur = function(){
	if(arr.length<16||arr.length>19){
		HBNn.innerHTML = "请输入小于19位大于16位的数字"

	}
	kaHao.style.height = 0;
}
var HBM = document.getElementById("HB-m")
var HBL = document.getElementById("HB-l")
var HBS = document.getElementById("HB-S")
var HBU = document.getElementById("HB-U")
var HBR = document.getElementById("HB-R")

HBM.onfocus = function(){
	
}
HBM.onblur = function(){
	if(HBM.value > 50000){
		HBL.innerHTML = "单次金额不能超过50000元"
	}
}
HBM.onkeyup = function(){
	HBS.innerHTML = (HBM.value)/1000;
	HBU.innerHTML = Number(HBM.value) + Number(HBS.innerHTML);
	HBR.innerHTML = 50000 - Number(HBM.value)
}
var Qi = document.getElementById("Qi")
Qi.onclick = function(){
	HBdingwei.style.display = "none"
}
