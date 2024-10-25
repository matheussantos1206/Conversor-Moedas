document.getElementById('currency-form').addEventListener('submit', function(event){
 
    // Obter valores de entrada do formulario
    const valor = parseFloat(docment.getElementById('amount').value);
    const moeda1 = document.getElementById('moeda1').value;
    const moeda2 = document.getElementById('moeda2').value;
     
    // Definir taxa de cambio fixa com utilização de objeto
    const exchangeRates = {
        USD: {EUR: 0.93, BRL: 5.71 },
        BRL: {EUR: 0.16, USD: 0.18 },
        EUR: {BRL: 6.16, USD: 1.08 }
    };
    });