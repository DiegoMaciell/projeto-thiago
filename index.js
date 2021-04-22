var parar = 0;
while(parar == 0){
console.log("")
console.log("Bem vindo á expresso boys")
console.log("")
console.log("Serviços oferecidos:")
console.log("")
console.log("Retirada e entrega")
console.log("")
console.log("Pagamentos")
console.log("")
console.log("Serviços de cartorio")
console.log("")

var re = 50;
var pa = 80;
var sdc = 30;

var expr = prompt("Como podemos ajudar?")


  if (expr == 'Retirada e entrega'){
  console.log("")
  console.log("o serviço custa R$:50,00")
  console.log("")

  var expu = prompt("O pagamento será feito em Dinheiro ou Cartão?")
  console.log("")

  switch(expu){

    case 'Cartão' :
    console.log("Forma de pagamento cartão")
    console.log("")
    console.log("Digite as informações")
    console.log("")
    var z  = prompt("Débito ou Crédito?")
    console.log("")
    var z  =  prompt("Insira o numero do cartão:")
    console.log("")
    var z  = prompt("Insira o CVV:")
    console.log("")
    var z  = prompt("Insira a senha:")
    console.log("")
    console.log("Um moto boy será enviado a seu endereço para fazer o serviço desejado")
    console.log("")
    console.log("Sua ID: 6430")
    console.log("")
     for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}

     var expz = prompt("confirme a ID")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 6430)


    break

    case 'Dinheiro' :
    console.log("")
    console.log("Forma de pagamento dinheiro")
    console.log("")
    console.log("Você deve pagar o moto boy que será enviado a seu endereço para fazer o serviço desejado")
    console.log("")
      console.log("Sua ID: 6430")
    console.log("")
     for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expf)}
       console.log("")
    
     var expz = prompt("confirme a ID")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 6430)


  }

  break}

else if (expr == 'Pagamentos'){
console.log("")
console.log("o serviço custa R$:80,00")
console.log("")

  var expu = prompt("O pagamento será feito em Dinheiro ou Cartão?")
  console.log("")

  switch(expu){

    case 'Cartão' :
    console.log("Forma de pagamento cartão")
    console.log("")
    console.log("Digite as informações")
    console.log("")
    var z  = prompt("Débito ou Crédito?")
    console.log("")
    var z  =  prompt("Insira o numero do cartão:")
    console.log("")
    var z  = prompt("Insira o CVV:")
    console.log("")
    var z  = prompt("Insira a senha:")
    console.log("")
    console.log("Um moto boy será enviado a seu endereço para fazer o serviço desejado")
    console.log("")
    console.log("Sua ID: 6430")
    console.log("")
     for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expf)}

     var expz = prompt("confirme a ID")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 6430)


    break

    case 'Dinheiro' : {
    console.log("")
    console.log("Forma de pagamento dinheiro")
    console.log("")
    console.log("Você deve pagar o moto boy que será enviado a seu endereço para fazer o serviço desejado")
    console.log("")
      console.log("Sua ID: 6430")
    console.log("")
     for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expf)}
       console.log("")
     

     var expz = prompt("confirme a ID")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 6430)

    }
  }

  break}
  
else if (expr == 'Serviços de cartorio'){
console.log("")
console.log("o serviço custa R$:30,00")
console.log("")

  var expu = prompt("O pagamento será feito em Dinheiro ou Cartão?")
  console.log("")

  switch(expu){

    case 'Cartão' :
    console.log("Forma de pagamento cartão")
    console.log("")
    console.log("Digite as informações")
    console.log("")
    var z  = prompt("Débito ou Crédito?")
    console.log("")
    var z  =  prompt("Insira o numero do cartão:")
    console.log("")
    var z  = prompt("Insira o CVV:")
    console.log("")
    var z  = prompt("Insira a senha:")
    console.log("")
    console.log("Um moto boy será enviado a seu endereço para fazer o serviço desejado")
    console.log("")
    console.log("Sua ID: 6430")
    console.log("")
     for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expf)}

     var expz = prompt("confirme a ID")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 6430)


    break

    case 'Dinheiro' :
    console.log("")
    console.log("Forma de pagamento dinheiro")
    console.log("")
    console.log("Você deve pagar o moto boy que será enviado a seu endereço para fazer o serviço desejado")
    console.log("")
      console.log("Sua ID: 6430")
    console.log("")
    
     for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expf)}

     var expz = prompt("confirme a ID")

     do {
  console.log("obrigado por confia em nossos serviços!")
} while(expz === 6430)


  }

  break}
  
else if (expr != 'Pagamentos' && expr != ' Serviços de cartorio'  && expr != "Retirada e entrega"){
  console.log("tente novamente")
}
}

console.log("podemos te adicionar a uma pesquisa?")
var m = prompt("Sim ou não?")

if (m = 'Sim'){
  console.log("temos 564232 serviços feitos com sucesso")
  console.log("com o seu temos:")
  console.log(564232 + 1)
  console.log("Obrigado mais uma vez por confiar em nossos moto boys até a proxima")
}
else {console.log("okay, obrigado mais uma vez por confiar em nossos moto boys até a proxima")}