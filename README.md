# 🪙Conversor de Moedas Símples🪙

## um pouco sobre o projeto 

Esse projeto de conversor de moeda conciste em inverter os valores que seleciona para o valor desejado. 

>### 📝1 passo 
- adiciona a entrada de valores 
- pesquisando os valores para o conversor de moedas e adicionando no codigo. 

>### 📝2 passo 
- converte para o valor desejado.
- logo após desejado o valor e convertido no campo embaixo.

# ``CÓDIGO``
![código](img/codigo%20conversor%201.0.png)


## ``🔧Funcionalidades``

Este código implementa um conversor de moedas com as seguintes funcionalidades:

  1. Formulário de Entrada: Permite que o usuário insira um valor e escolha duas moedas (moeda de origem e moeda de destino).

 2. Conversão de Moedas:

- Utiliza um objeto de taxas de câmbio fixas para calcular a conversão entre diferentes moedas (USD, EUR, BRL).
- Se a moeda de origem for a mesma que a moeda de destino, o valor é mantido inalterado.

3. Validação de Entrada:

- Verifica se o valor inserido é um número válido e maior que zero.
- Exibe uma mensagem de erro caso a validação falhe.

4. Exibição do Resultado: Após a conversão, o resultado é exibido na página, formatado com duas casas decimais.

Essas funcionalidades tornam o conversor de moedas interativo e fácil de usar, garantindo que o usuário tenha um feedback claro sobre suas entradas e resultados.

## 💹 Sobre as Moedas 

O código lida com três moedas: USD (dólar americano), EUR (euro) e BRL (real brasileiro). Aqui está um resumo sobre cada uma delas:

1. USD (Dólar Americano):

- Moeda oficial dos Estados Unidos.
- Uma das moedas mais amplamente usadas em transações internacionais.
- Considerada uma moeda de reserva global.

2. EUR (Euro):

- Moeda oficial da zona do euro, que é composta por 19 dos 27 países da União Europeia.
- Introduzido em 1999 e começou a circular em 2002.
- A segunda moeda mais negociada do mundo.

3. BRL (Real Brasileiro):

- Moeda oficial do Brasil.
- Introduzido em 1994 como parte de um plano para estabilizar a economia brasileira.
- O valor do real pode ser influenciado por fatores econômicos internos e externos, como a inflação e as taxas de juros.

Taxas de Câmbio no Código:
As taxas de câmbio fixas definidas no código permitem a conversão entre essas moedas:

- USD para EUR: 0.93
- USD para BRL: 5.78
- BRL para EUR: 0.16
- BRL para USD: 0.18
- EUR para BRL: 6.16
- EUR para USD: 1.08

Essas taxas são apenas exemplos e, na prática, as taxas de câmbio variam ao longo do tempo, dependendo de fatores econômicos e do mercado financeiro. Para um aplicativo real, você poderia usar uma API para obter taxas de câmbio atualizadas em tempo real.

![CAPA DO PROJETO](img/capa%20do%20conversor%20de%20moedas.png)