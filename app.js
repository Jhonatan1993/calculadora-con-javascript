
let tablero = document.getElementById('tablero');
let row = document.getElementById('botones');
// let botones = document.getElementById("number");
let operaActual='';
let primernum='';
let a, b, c;



let calculadora = () =>{
   
    row.addEventListener("click", (e)=>{
        let aux = e.path[0].textContent;
        let row = e.path[0].className;
        console.log(e.path[0].className)

     agregarnumero(aux, row);
       
      if(aux == '+'){
        sumar();
      }
      if(aux == '-'){
        restar();
      }
      if(aux == '*'){
        multiplicar();
      }
      if(aux == '/'){
        dividir();
      }

      if(aux == 'CE'){
          limpiar();
      }
        
      if(aux == '='){
          igual();
      }
      
    });


}

calculadora();


function agregarnumero(num, row){

    if(num == 'CE' || num == '+' || num == '-' || num == '*' || num == '/' || num == '=' || row == 'row' || row == 'botones'){
        let t = tablero.innerHTML='';
    }else{

        operaActual = operaActual + num;
        primernum = tablero.innerHTML=operaActual;
        console.log(primernum);
    }
}

function sumar(){
    
    a = operaActual;
    b = '+';
     operaActual='';
     tablero.innerHTML='';

}

function restar(){
    a = operaActual;
    b = '-';
    operaActual='';
    tablero.innerHTML='';
}

function multiplicar(){
    a = operaActual;
    b = '*';
    operaActual='';
    tablero.innerHTML='';
}
function dividir(){
    a = operaActual;
    b = '/';
    operaActual='';
    tablero.innerHTML='';
}

function limpiar(){
    let c = operaActual='';
    console.log(tablero.innerHTML='' + c)
}

function igual(){
    c = operaActual;
    operaActual='';
    resolver();
}

function resolver(){
    let result;
    switch(b){
        case "+": result = parseFloat(a) + parseFloat(c);
                  tablero.innerHTML=result;
                  break;
        case "-": result = parseFloat(a) - parseFloat(c);
                  tablero.innerHTML=result;
                  break;
        case "*": result = parseFloat(a) * parseFloat(c);
                  tablero.innerHTML=result;
                  break;
        case "/": result = parseFloat(a) / parseFloat(c);
                  tablero.innerHTML=result;
                  break;

    }

}







// uno.onclick = (e)=>{

//     let aux = tablero.innerHTML="1"

//     aux += tablero.innerHTML="1";

//     console.log(e.path[0].textContent)
// }
// dos.onclick = function(e){

//     let aux = tablero.innerHTML="2"

//     aux += tablero.innerHTML="2"

//     console.log(e.path[0].textContent)
// }
// function detectarNumero(dato){

//     let tablero = document.getElementById('tablero').innerHTML=dato 
//     // tablero = tablero + "1";   
    
// }



// function sumar(num1, num2){
//     let resul = num1 + num2;
  
//     let tablero = document.getElementById('tablero').innerHTML=resul
// }on