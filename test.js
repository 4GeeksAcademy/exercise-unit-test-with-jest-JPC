describe("Probando Funciones Conversoras de Dinero", () => {

test("Probando convertir Euro a Dollar", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});
test("Probando convertir Dollar a Yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen} = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBe(1462.6168224299065);
});
test("Probando convertir YEN a Pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1000)).toBe(5.559105431309905);
});
});