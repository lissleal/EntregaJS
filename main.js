//Lista de Compras

alert("Bienvenido a tu lista de compras");

//Declaracion de variables
let lista = "";
let items;
let x = 0;
let producto;
let precioTotal = 0;

//Funciones
function hacerLista (){
    lista = lista + producto + ", ";
    precioTotal = precioTotal + costo;
}

function validar(mensaje){
   let valor = parseInt(prompt(mensaje));
   if (valor < 0 || isNaN(valor)){
        do{
        valor = parseInt(prompt("No ingresaste un número válido, " + mensaje) );
        } while (valor < 0 || isNaN(valor));
   }
   return valor;
}

//Algoritmo
items = validar("¿Cuántos productos quieres comprar?");

for(let i=1; i<=items; i++){
    x=x+1;
    producto = prompt("Ingresa item numero: " + x);
    costo = validar("Ingresa valor item numero: " + x);
    
    hacerLista();
    if (i==items){
        do{
            cierre = prompt ("Deseas Ingresar otro item? Ingresa si o no");
            
            switch (cierre){
                case "no":
                    alert("Recuerda que debes comprar " + x + " cosas: "+ lista + "lleva al menos " + precioTotal + "$ para comprarlas");
                    break;
                case "si":
                    items = validar("¿Cuántos productos quieres comprar?");
                    i=0;
                    break;
                default:
                    alert("Respuesta no válida");
                    break;
                }
        }while (cierre != "si" && cierre != "no")
    }
}

