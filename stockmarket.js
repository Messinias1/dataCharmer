var marketName = "nasdaq";
var stockSymbol = ["MSFT", "AAPL", "GOOG", "AMZN", "NFLX"];
var stockName = ["Microsoft", "Apple", "Google", "Amazon", "Netflix"];

var customerId = [001, 002, 003];
var customerName = ["Raul", "Daenerys", "Sora"];
var customerStocks = [
    ["MSFT", "GOOG", "AMZN"],
    ["AAPL", "NFLX"],
    ["AMZN"]
];
var customerShares = [
    [5, 10, 15],
    [8, 4],
    [20]
];
//var stockPrice = [105, 170, 1095, 1588, 347];
var stockPrice = [
    [105, 1095, 1588],
    [170, 347],
    [1588]
];

/*function displayCustomerInfo() {
    console.log("Here is the info for our customers:" + (customerId = customerId.concat(customerName + customerStocks)));
}*/

function totalsReport() {
    for (var i = 0; i < customerId.length; i++) {
        console.log("");
        console.log('Customer Id: ', customerId[i], "Customer Name: ", customerName[i]);
        
        for (var j = 0; j < customerStocks[i].length; j++) {
            console.log("Owns", customerShares[i][j], "shares of", customerStocks[i][j], "total value of:", stockPrice[i][j] * customerShares[i][j]);
        }
    }

}

function grandTotalsReport() {
    var grandTotal = 0;
    for (var i = 0; i < customerId.length; i++) {
        console.log("");
        console.log('Customer Id: ', customerId[i], "Customer Name: ", customerName[i]);
        
        
        for (var j = 0; j < customerStocks[i].length; j++) {
           var total = stockPrice[i][j] * customerShares[i][j];
            console.log("Owns", customerShares[i][j], "shares of", customerStocks[i][j], "total value of:", total);
            grandTotal += total;
        }
    }
    console.log("The grand total portfolio value is:", grandTotal);
}

//totalsReport();



/*for (var i = 0; i < customerId.length; i++) {
    console.log("");
    console.log('Customer Id: ', customerId[i], "Customer Name: ", customerName[i]);
    //console.log("Owns", customerShares[i]);
    for (var j = 0; j < customerStocks[i].length; j++) {
        console.log("Owns", customerShares[i][j], "shares of", customerStocks[i][j], "total value of:", stockPrice[i][j] * customerShares[i][j]);
    }
}*/

function subTotalsReport() {
    for (var i = 0; i < customerId.length; i++) {
        var subTotal = 0;
        console.log("");
        console.log('Customer Id: ', customerId[i], "Customer Name: ", customerName[i]);
        
        
        for (var j = 0; j < customerStocks[i].length; j++) {
           var total = stockPrice[i][j] * customerShares[i][j];
            console.log("Owns", customerShares[i][j], "shares of", customerStocks[i][j], "total value of:", total);
            subTotal += total;
        }
        console.log("The subtotal portfolio value is:", subTotal);
    } 
}