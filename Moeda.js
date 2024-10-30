document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault();

    // Obter valores de entrada do formulario
    const  valor = parseFloat(document.getElementById('valor').value);
    const moeda1 = document.getElementById('moeda1').value;
    const moeda2 = document.getElementById('moeda2').value;
     
    // Definir taxa de cambio fixa com utilização de objeto
    const exchangeRates = {
        USD: {EUR: 0.93, BRL: 5.78 },
        BRL: {EUR: 0.16, USD: 0.18 },
        EUR: {BRL: 6.16, USD: 1.08 },
    };

    let valorConvertido;
    if(moeda1 === moeda2){
        valorConvertido = valor ;

    } else{
        valorConvertido = valor * exchangeRates[moeda1][moeda2];
    }

    let conversao = document.getElementById('conversao');
    conversao.textContent = `Resultado ${valorConvertido.toFixed(2)} ${moeda2}`;

    });

