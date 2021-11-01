window.onload = function(){
    document.getElementById("decorate").onclick = buttonFunctions;
    document.getElementById("checkbox").onclick = checkBoxFunctions;
    document.getElementById("igpayAtinlayBtn").onclick = igpayAtinlayFunctions;
    document.getElementById("malkovichBtn").onclick = malkovichBtnFunctions;
}
function igpayAtinlayFunctions(){
    var text = document.getElementById("textArea");
    text.style.color = "Blue";
    var text = document.getElementById("textArea").value;
    let str1 = text.split(" ");
    let newWords = " ";
    for(let i=0; i<str1.length; i++){
        if(str1[i].startsWith('a') || str1[i].startsWith('A') || 
        str1[i].startsWith('e') || str1[i].startsWith('E') ||
        str1[i].startsWith('o') || str1[i].startsWith('O') ||
        str1[i].startsWith('u') || str1[i].startsWith('U') ||
        str1[i].startsWith('i') || str1[i].startsWith('I')){
            str1[i] += "-ay";
        }
        else{
            str1[i] = "ay-"+str1[i];
        }
        newWords += (str1[i]+" ");
    }
    document.getElementById("textArea").value = newWords;
    
}
function malkovichBtnFunctions()
{
    var text = document.getElementById("textArea").value;
    let words = text.split(" ");
    let newWords = " ";
    
    for(let i=0; i<words.length; i++){
        if(words[i].length>=5){
            words[i] ="Malkovich";
        }
        newWords += (words[i]+" ");
    }
    document.getElementById("textArea").value = newWords;
   
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
 