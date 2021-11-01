window.onload = function(){
    document.getElementById("decorate").onclick = buttonFunctions;
    document.getElementById("checkbox").onclick = checkBoxFunctions;
    document.getElementById("igpayAtinlayBtn").onclick = igpayAtinlayFunctions;
    document.getElementById("malkovichBtn").onclick = malkovichBtnFunctions;
}
function igpayAtinlayFunctions(){
    var text = document.getElementById("textArea");
    text.style.color = "Blue";

}
function malkovichBtnFunctions()
{
    var text = document.getElementById("textArea");
   
} 

function buttonFunctions(){
    setInterval(buttonFunctions, 500);
    var x =  document.getElementById("textArea");
    var style = window.getComputedStyle(x, null).getPropertyValue('font-size');
    var fontSize = parseInt(style); 
    fontSize += 2;
    x.style.fontSize = fontSize+"pt";
 }
 function checkBoxFunctions(){

    let bing = document.getElementById("checkbox");
    var textField = document.getElementById("textField");
    var  textArea = document.getElementById("textArea");

    if (bing.checked) {
        textArea.style.color = "green";
        textArea.style.fontWeight = "bold";
        textArea.style.textDecoration = "underline";
        textField.style.backgroundImage = "url('hundred.jpg')";
    } else {
        textArea.style.color = "black";
        textArea.style.fontWeight = "400";
        textArea.textDecoration = "none";
        textField.style.backgroundImage = "none";
    }
 }
 