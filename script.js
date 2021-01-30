const firstClassPrice = 150, economyPrice = 100;
function getDetails(inputId, stepsize) {
    const quantity = parseInt(document.getElementById(inputId).value);
    const quantitytotal = quantity + stepsize;
    //checking: if qunaity is 0,it will set all necessary value
    if (quantitytotal >= 0) {
        document.getElementById(inputId).value = quantitytotal;
        var prices = getexpression(inputId, quantitytotal);
        document.getElementById('subtotal').innerText = prices;
        const tax = (prices * 0.10).toFixed(2);
        document.getElementById('tax').innerText = tax;
        const bestanswer = parseFloat(prices) + parseFloat(tax);
        document.getElementById('total').innerText = bestanswer;
    }
     //checking: if qunaity is not 0,it will set value to 0.so ticketnumber will be 0
    if (quantitytotal < 0) {
        document.getElementById(inputId).value = 0;
        console.log('you are entering wrong input');
    }
}
function getexpression(inputId, quantity) {
    //for firstclass ,per ticket price is 150 and for economy class ticket price is 100
    if (inputId == 'inputFirstClass') {
        var price1 = quantity * 150;
        var price2 = restproduct('inputEconomy', 100);
    }
    if (inputId == 'inputEconomy') {
        var price1 = quantity * 100;
        var price2 = restproduct('inputFirstClass', 150);
    }
    var answer = price1 + price2;
    return answer;
}
function restproduct(id, price) {
    const value1 = document.getElementById(id).value;
    var values1 = value1 * price;
    return values1;
}
function bookNowBtn() {
    document.getElementById('booking-form').style.display = "none";
    document.getElementById('booking-formoptional').style.display = "block";
    document.getElementById('flyingFromhidden').innerText = document.getElementById('flyingFrom').value;
    document.getElementById('flyingTohidden').innerText = document.getElementById('flyingTo').value;
    document.getElementById('depratureDatehidden').innerText = document.getElementById('depratureDate').value;
    document.getElementById('returnDatehidden').innerText = document.getElementById('returnDate').value;
    document.getElementById('inputFirstClasshidden').innerText = document.getElementById('inputFirstClass').value;
    document.getElementById('inputEconomyhidden').innerText = document.getElementById('inputEconomy').value;
    document.getElementById('subtotalhidden').innerText = document.getElementById('subtotal').innerText;
    document.getElementById('taxhidden').innerText = document.getElementById('tax').innerText;
    document.getElementById('totalhidden').innerText = document.getElementById('total').innerText;
}