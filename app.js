// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Convert from dollars to yen
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

// Convert from euros to dollars
function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

// Convert from yen to pounds
function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}

// Ejemplos de uso
console.log(fromDollarToYen(10)); // Convert 10 dollars to yen
console.log(fromEuroToDollar(10)); // Convert 10 euros to dollars
console.log(fromYenToPound(1000)); // Convert 1000 yen to pounds

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };