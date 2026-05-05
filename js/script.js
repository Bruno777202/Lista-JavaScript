const exercicio1 = () => {
    // capturar o elemento resposta
    let resposta = document.getElementById("resposta")
    // varialveç para amarzena o resultado do mue programa
    let resultado = "#"

    // um loop de laça for
      for (let i=1; i <=10; i++){
        resultado += i + '#'
      }
      // exibir meu resultado
resposta.innerhtml  = resultado
    }

//================================================
const exercicio2 = () => {
    let resultado = document.getElementById("resultado")
    let erro = document.getElementById("erro")
    let number = document.getElementById("num").value;
 
    for (let i=0; i <= 2; i++){
      resultado.innerHTML = i
    }
        
    }

//==================================================
const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro= document.getElementById("erro");
  let numero = document.getElementById("num").value;
 let primo = true
  if (numero <= 0){
    erro.innerHTML = "digite maior que zero"
    resultado.innerHTML = '';
    return; // interronpe a função
  }else{
    // loop para verificar se existe algum divisor
    // além de 1 e ele mesmo
    for (let i = 2; i < numero; i++){
       if (numero % i == 0){
        primo = false
       } 
    }
  }
    // verificação final
    if (primo){
        // se permacer true ao tentar validar 
        // ele será primo
        resultado.innerHTML = 'o numero $(numero) é primo'
        erro.innerHTML = ''
    }else{
        resultado.innerHTML = 'o numero $(numero) não primo'
        erro.innerHTML = ''
    }
  
}
//============================================
const exercicio4 = () => {
   let calculo = 1 * 10;
    let resultado = "#"
   let erro = document.getElementById("erro")
   let resposata = document.getElementById("resultado")

   for (let i=1; i < 10; i++){

   }
     
}


//==================================================
const exercicio5 = () => {
    let resposta = document.getElementById("resposta")
    let erro = document.getElementById("")
    let number = document.getElementById("num").value
    let resultado = document.getElementById("resposata")
   let num = 2
    while ( i <= 2){
     number += 2 + i
     resposta.innerHTML = num
    }

}


//======================================================
const exercicio6 = () =>{
 let resposta = document.getElementById("resposta")
    let number = document.getElementById("num")
    let resultado = "#"
    
   while (i<=0){
    num += 0 + i 
    resposta.innerHTML = i
   }

}
//=========================================================
const exercicio7 = () =>{
 let resposta = document.getElementById("resposta")
 let x = 10
 let y = 1

 while (i <=10){
    x -= y - i 
    resposta.innerHTML = i
 }
}
//========================================================
const exercicio8 = () =>{
    let resultado = document.getElementById("resultado")
    let erro = document.getElementById("erro")
    let reposta = document.getElementById("resposta")
    const palavra = document.getElementById("palavra")
    let ovo = palimdromo
    let pirâmide = antipalidromo
    
for (let i=ovo; i <= piramide;i++){
   resposta.innerHTML = i
 }
}
//========================================================
const exercicio9 = () =>{
    let resposta = document.getElementById("resposta")
    let a = 100
    let b = 1

    for (i=1;i <= 100; i++){
        resposta.innerHTML = i
    }
}     
//========================================================
const exercicio10 = () =>{
    let resposta = document.getElementById("resposta")
    let erro = document.getElementById("erro")
    let resultado = document.getElementById("resultado")
    let number = document.getElementById("num").value
    
    while (i <= 0){
    number += i + 
    resposta.innerHTML
    }
    
}
//======================================================
const exercicio11 = () =>{
    let reposta = document.getElementById("resposta")
    let 
    for(let i=3;i <= 100;i++){
        resposta.innerHTML = i
    }
}
//========================================================
/*const exercicio12 = () =>{
 let resposta = document.getElementById("resposta")
 let erro = document.getElementById("erro")
 let resultado = document.getElementById("resultado")
 let num = 5
 let number = ''
 for (number,num){
   
 }
}*/
//========================================================

//=========================================================
const exercicio13 = () =>{
    let resultado = document.getElementById("resultado")
    let erro = document.getElementById("erro")
    let numero = document.getElementById("num");
    let primo = true
    if (numero <= 0){
      erro.innerHTML = "digite um numero maior que zero ou esse numero não primo"
    resultado.innerHTML = '';
    return;    
    }else{
        for (let i=2; i < numero; i++){
            if (numero % i == 0)
                primo = false
        }
    }
    if (primo){
        resultado.innerHTML ='o numero &(numero) é primo'
        erro.innerHTML =''
    }else{
        resultado.innerHTML = 'o numero &(numero) não é primo'
        erro.innerHTML = ''
    }
const exercicio14 = () =>{
    let resposta = document.getElementById("resposta")
    let erro  = document.getElementById("erro")
    let resultado = document.getElementById("resultado")
    let number = document.getElementById("num1").value;
    let number = document.getElementById("num2").value;
    let valor = num1 + num2
    resposta.innerHTML = valor
}
const exercicio15 = () =>{
    let resposta = document.getElementById("resposta")
    let erro = document.getElementById("erro")
    let resultado = document.getElementById("resultado")
    let palavra = document.getElementById("palavra")
    let consoantes = true 
    if (palavra <= 0){
        erro.innerHTML = "essa lentra não uma consoante"
        resultado.innerHTML = ''
    }else{
        
    }
}

    
}

//=========================================================
const exercicio16 = () => {
 let resultado = document.getElementById("resultado");
let erro = document.getElementById("erro");
    let numero = document.getElementById("num1").value;

    if(numero <= 0){
        resultado.innerHTML = "resultado";
        erro.innerHTML = "digite um número maior que zero";
    }else{
        erro.innerHTML = "";
        let calcudo = 2 * parseFloat(numero) * Math.P1;
        resultado.innerHTML = calculo;
    }
}




/** Cria as funções para os 25 exercícios propostos. **/




const exercicio25 = () => {};