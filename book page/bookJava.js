document.write("<h4>Last Modified on: "+document.lastModified+"</h4>")

function dynamicDate() {
    var rightNow = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var dynMonth = month[rightNow.getMonth()];
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var dynDay = weekday[rightNow.getDay()];
    var dynDate = rightNow.getDate();
    var dynYear = rightNow.getFullYear();
    var printDate = ("Order Date: "+dynDay+", "+dynMonth+" "+dynDate+", "+dynYear);

    var textdate = document.getElementById('orderDate');
    textdate.innerHTML = printDate;
}

function calculateEverthing() {
    var bookPrice1 = document.getElementById("unitPrice1").value
    var bookPrice1 = parseFloat(bookPrice1)

    var quanTity1 = document.getElementById("quantity1").value
    var quanTity1 = parseFloat(quanTity1)

    var bookTotal1 = bookPrice1 * quanTity1
    var bookTotal1 = parseFloat(bookTotal1)
    
    var textBookTotal1 = document.getElementById("totalUnitPrice1");
    textBookTotal1.value = bookTotal1.toFixed(2);

    var bookPrice2 = document.getElementById("unitPrice2").value
    var bookPrice2 = parseFloat(bookPrice2)

    var quanTity2 = document.getElementById("quantity2").value
    var quanTity2 = parseFloat(quanTity2)

    var bookTotal2 = bookPrice2 * quanTity2
    var bookTotal2 = parseFloat(bookTotal2)
    
    var textBookTotal2 = document.getElementById("totalUnitPrice2");
    textBookTotal2.value = bookTotal2.toFixed(2);

    var bookPrice3 = document.getElementById("unitPrice3").value
    var bookPrice3 = parseFloat(bookPrice3)

    var quanTity3 = document.getElementById("quantity3").value
    var quanTity3 = parseFloat(quanTity3)

    var bookTotal3 = bookPrice3 * quanTity3
    var bookTotal3 = parseFloat(bookTotal3)
    
    var textBookTotal3 = document.getElementById("totalUnitPrice3");
    textBookTotal3.value = bookTotal3.toFixed(2);

    var bookPrice4 = document.getElementById("unitPrice4").value
    var bookPrice4 = parseFloat(bookPrice4)

    var quanTity4 = document.getElementById("quantity4").value
    var quanTity4 = parseFloat(quanTity4)

    var bookTotal4 = bookPrice4 * quanTity4
    var bookTotal4 = parseFloat(bookTotal4)
    
    var textBookTotal4 = document.getElementById("totalUnitPrice4");
    textBookTotal4.value = bookTotal4.toFixed(2);

    var bookPrice5 = document.getElementById("unitPrice5").value
    var bookPrice5 = parseFloat(bookPrice5)

    var quanTity5 = document.getElementById("quantity5").value
    var quanTity5 = parseFloat(quanTity5)

    var bookTotal5 = bookPrice5 * quanTity5
    var bookTotal5 = parseFloat(bookTotal5)
    
    var textBookTotal5 = document.getElementById("totalUnitPrice5");
    textBookTotal5.value = bookTotal5.toFixed(2);

    var bookPrice6 = document.getElementById("unitPrice6").value
    var bookPrice6 = parseFloat(bookPrice6)

    var quanTity6 = document.getElementById("quantity6").value
    var quanTity6 = parseFloat(quanTity6)

    var bookTotal6 = bookPrice6 * quanTity6
    var bookTotal6 = parseFloat(bookTotal6)
    
    var textBookTotal6 = document.getElementById("totalUnitPrice6");
    textBookTotal6.value = bookTotal6.toFixed(2);

    var bookPrice7 = document.getElementById("unitPrice7").value
    var bookPrice7 = parseFloat(bookPrice7)

    var quanTity7 = document.getElementById("quantity7").value
    var quanTity7 = parseFloat(quanTity7)

    var bookTotal7 = bookPrice7 * quanTity7
    var bookTotal7 = parseFloat(bookTotal7)
    
    var textBookTotal7 = document.getElementById("totalUnitPrice7");
    textBookTotal7.value = bookTotal7.toFixed(2);

    if (isNaN(textBookTotal1.value)) {
        var bookTotal1 = parseFloat(0.00);
        textBookTotal1.value = bookTotal1.toFixed(2);
    }

    if (isNaN(textBookTotal2.value)) {
        var bookTotal2 = parseFloat(0.00);
        textBookTotal2.value = bookTotal2.toFixed(2);
    } 

    if (isNaN(textBookTotal3.value)) {
        var bookTotal3 = parseFloat(0.00);
        textBookTotal3.value = bookTotal3.toFixed(2);
    } 

    if (isNaN(textBookTotal4.value)) {
        var bookTotal4 = parseFloat(0.00);
        textBookTotal4.value = bookTotal4.toFixed(2);
    } 

    if (isNaN(textBookTotal5.value)) {
        var bookTotal5 = parseFloat(0.00);
        textBookTotal5.value = bookTotal5.toFixed(2);
    }

    if (isNaN(textBookTotal6.value)) {
        var bookTotal6 = parseFloat(0.00);
        textBookTotal6.value = bookTotal6.toFixed(2);
    }

    if (isNaN(textBookTotal7.value)) {
        var bookTotal7 = parseFloat(0.00);
        textBookTotal7.value = bookTotal7.toFixed(2);
    }

    var subTotal = bookTotal1 + bookTotal2 + bookTotal3 + bookTotal4 + bookTotal5 + bookTotal6 + bookTotal7
    var subTotal = parseFloat(subTotal)

    var textSubTotal = document.getElementById("subTotal");
    textSubTotal.value = subTotal.toFixed(2);
    
    if (subTotal <= 15) {
        var shipping = 5.50
    }

    if (subTotal >= 15) {
        var shipping = 5.50 + (subTotal / 100 * 4.5)
    }      

    var textShipping = document.getElementById("shipFee");
    textShipping.value = shipping.toFixed(2)

    var taxPercentage = document.getElementById("taxRate").value;
    var taxTotal = (subTotal / 100) * taxPercentage

    var textTax = document.getElementById("taxTotal");
    textTax.value = taxTotal.toFixed(2)

    var grandTotal = subTotal + taxTotal + shipping

    var textGrandTotal = document.getElementById("grandTotal");
    textGrandTotal.value = grandTotal.toFixed(2)
}
