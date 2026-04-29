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


const exercicio2 = () => {
    let resultado = document.getElementById("resultado")
    let erro = document.getElementById("erro")
    let numero = document.getElementById("num").value;
 
    for (let i=1; i < numero; i++){
      erro.innerHTML
    }
        
    }


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

const exercicio4 = () => {
   let resultado = document.getElementById("resultado")
   let erro = document.getElementById("erro")
   

    
  
}



const exercicio5 = () => {
    let resposta = document.getElementById("resposta")
    let numero = document.getElementById("num")
    while ( i <= 2){
     text += "num" + i
     i++
     resposta = num
    }
}
const exercicio8 = () =>{
    let resultado = document.getElementById("resultado")
    let erro = document.getElementById("erro")
    let polimedro  = quadrado, traingulo, retangulo = true


        }
     



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