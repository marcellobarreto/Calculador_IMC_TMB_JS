function calcular() {
  var idade = document.getElementById('txtidade')
  var peso = document.getElementById('txtpeso')
  var altura = document.getElementById('txtaltura')
  var atividade = document.getElementById('atividade')
  var imcc = altura.value * altura.value
  var imc = (peso.value / imcc) * 10000
  var mas = document.getElementById('mas')
  var conta

  if (mas.checked) {
    conta =
      atividade.value *
      (66 + (13.7 * peso.value + 5 * altura.value - 6.8 * idade.value))
  } else {
    conta =
      atividade.value *
      (665 + (9.56 * peso.value + 1.8 * altura.value - 4.7 * idade.value))
  }

  if (conta < 80) {
    alert('DADOS INVALIDOS ! ')
  } else {
    var amp = conta + 300
    var abp = conta - 300
    res.innerHTML = `Taxa Basal ${conta.toFixed()} Kcal, Para manter seu peso !`
    amkcal.innerHTML = `Para aumentar de peso consuma: ${amp.toFixed()} Kcal`
    rekcal.innerHTML = `Para reduzir o peso consuma: ${abp.toFixed()} Kcal`
    rimcr.innerHTML = `IMC ${imc.toFixed(2)}`
  }

  if (imc < 18) {
    alerta.innerHTML = 'Você está abaixo do peso ideal ! '
  } else if (imc > 18.5 && imc < 24.99) {
    alerta.innerHTML = 'Você está no peso ideal ! '
  } else if (imc > 25 && imc < 29.99) {
    alerta.innerHTML = ' Atenção ! Você está com sobre peso ! '
  } else if (imc > 30 && imc < 34.99) {
    alerta.innerHTML = 'Atenção ! Você está com obesidade I ! '
  } else if (imc > 35 && imc < 39.99) {
    alerta.innerHTML = 'Atenção ! Você está com obesidade II ! '
  } else if (imc > 40) {
    alerta.innerHTML = 'Atenção ! Você está com obesidade III ! '
  }
}
