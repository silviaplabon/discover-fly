const firstClassPrice = 150, economyPrice = 100;
function getDetails(inputId, stepsize) {
    const quantity = parseInt(document.getElementById(inputId).value);
    const quantitytotal = quantity + stepsize;
    document.getElementById(inputId).value = quantitytotal;
    //checking: if quanity is 0,it will set all necessary value
    if (quantitytotal >= 0) {
        //reading quantitynumber form firstClass and economyclass
        var firstClassQuantity = document.getElementById('inputFirstClass').value;
        var economyQuantity = document.getElementById('inputEconomy').value; 
        //getting price from quantitynumber
        var prices=(firstClassQuantity*firstClassPrice)+(economyQuantity*economyPrice);
        document.getElementById('subtotal').innerText = prices;
        const tax = (prices * 0.10).toFixed(2);
        document.getElementById('tax').innerText = tax;
        const bestanswer = parseFloat(prices) + parseFloat(tax);
        document.getElementById('total').innerText = bestanswer;
    }
    //checking: if quanity is not 0,it will set value to 0.so ticketnumber will be 0
    if (quantitytotal < 0) {
        document.getElementById(inputId).value = 0;
        alert('Sorry you are trying to negative a quantity,which never happens.')
    }
}

function bookNowBtn() {
    //after clicking booknow button necesaary handling 
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