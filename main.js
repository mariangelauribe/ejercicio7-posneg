function calcular()
{
    var a = document.getElementById("numero_a").value;
    var b = document.getElementById("numero_b").value;
    var neg = document.getElementById("neg").value;
    var salida = document.getElementById("salida");
    var salida2 = document.getElementById("salida2");
    
	if (a == "" || b == ""){
        salida2.innerHTML = "Falta llenar datos";
    } else {
        if (neg == "1") {
            if (a < 0 && b < 0) {
                salida.innerHTML = "1";
            } 
            else {
                salida.innerHTML = "0";
            }
        }   
        if (neg == "2") {
            if ( a < 0 || b < 0) {
               salida.innerHTML = "1";
            }
            else {
               salida.innerHTML = "0";
            } 
        }
    }
    }