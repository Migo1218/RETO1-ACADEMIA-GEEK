var moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Dolar Canadiense', 'Euro', 'Libra Esterlina'];
let divisas = ['', 'USD', 'MXN', 'CAD', 'EUR', 'GBP'];

let select = document.getElementById("fromCurrency")

moneda.forEach(function monedas(valor, indice) {
    let option = document.createElement("option")
    option.setAttribute("value", divisas[indice])
    option.innerHTML = valor
    select.appendChild(option)
})


select = document.getElementById("toCurrency")

moneda.forEach(function monedas(valor, indice) {
    let option = document.createElement("option")
    option.setAttribute("value", divisas[indice])
    option.innerHTML = valor
    select.appendChild(option)
})


var danger = `
<div class="alert alert-danger" role="alert">
Inserte bien los datos
</div>`
function convertir() {
    var amount = document.getElementById('amount')
    var fromCurrency = document.getElementById('fromCurrency')
    var toCurrency = document.getElementById('toCurrency')
    console.log(amount.value)
    console.log(toCurrency.value)
    console.log(fromCurrency.value)
    fetch(`https://api.frankfurter.app/latest?amount=${amount.value}&from=${fromCurrency.value}&to=${toCurrency.value}`)
        .then(function obtenerRespuesta(response) {

            return response.json()
        })
        .then(function name(data) {
            console.log(data)
            var value = Object.values(data.rates)[0]
            console.log(value)
            alert(`${data.amount} ${data.base} = ${value} ${toCurrency.value}`)
        }).catch(function catchError(error) {
            document.body.innerHTML = document.body.innerHTML + danger
        })
}
