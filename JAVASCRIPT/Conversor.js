function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorDolarHoje = 5.23;
  
    console.log(valorEmDolarNumerico / valorDolarHoje);
  }
  