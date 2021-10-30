function calcTip() {

// Enter your code here to make Tip Calculator work

		var subTotal = document.getElementById("subtotal").value;
        var percent = document.getElementById("tip").value;
        var percentage = percent/100;
        var tip = percentage*subTotal;
        var final = tip+parseInt(subTotal);
        document.getElementById("tipAmonut").innerHTML = tip;
        document.getElementById("total").innerHTML = final;

}