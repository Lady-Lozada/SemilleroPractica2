var num1;
var num2;
var result;

function operacion(ope){
    document.getElementById("symbol").innerHTML = ope;
}

function oper(ope){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)){
        limpiar();
    }else{
        switch (ope) {
            case 1:
                adicion(num1, num2);
                break;
            case 2:
                sustraccion(num1, num2);
                break;
            case 3:
                multiplicacion(num1, num2);
                break;
            case 4:
                num2 == 0 ? (limpiar(),
                document.getElementById("val").innerHTML = "La división por cero no es permitida"
                ) : (division(num1, num2));
                break;
            case 5:
                potencia(num1, num2);
                break;
            case 6:
                menorQue(num1, num2);
                break;
            case 7:
                mayorQue(num1, num2);
                break;
            case 8:
                modulo(num1, num2);
                break;
            default:
                break;
        }
    }
}

function adicion(x, y){
    operacion('&nbsp;&#43');
    result = String(x + y);
    let val = valResult(result);
    document.getElementById("result").innerHTML = val;
}

function sustraccion(x, y){
    result = String(x - y);
    let val = valResult(result);
    operacion('&nbsp;&#45');
    document.getElementById("result").innerHTML = val;
}

function multiplicacion(x, y){
    result = String(x * y);
    let val = valResult(result);
    operacion('&nbsp;&#42');
    document.getElementById("result").innerHTML = val;
}

function division(x, y){
    result = String(x / y);
    let val = valResult(result);
    operacion('&nbsp;&#47');
    document.getElementById("result").innerHTML = val;
    
}

function potencia(x, y){
    result = String(Math.pow(x, y));
    let val = valResult(result);
    operacion('x'+'&nbsp;&#9643;');
    document.getElementById("result").innerHTML = val;
}
function menorQue(x, y){
    let val
    if(x < y){
        val = "Verdadero";
        operacion('&nbsp;&#60;');
        document.getElementById("result").innerHTML = val;
    }else{
        val = "Falso";
        operacion('&nbsp;&#60;');
        document.getElementById("result").innerHTML = val;
    }
}

function mayorQue(x, y){
    let val
    if(x > y){
        val = "Verdadero";
        operacion('&nbsp;&#62;');
        document.getElementById("result").innerHTML = val;
    }else{
        val = "Falso";
        operacion('&nbsp;&#62;');
        document.getElementById("result").innerHTML = val;
    }
}
function modulo(x, y){
    result = String(x%y);
    operacion('&nbsp;&#37;');
    document.getElementById("result").innerHTML = result;
}

function limpiar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("symbol").innerHTML = "&nbsp;?";
    document.getElementById("result").innerHTML = '&nbsp;0';
}

function validate(string){
    var out = '';
    var filtro = '1234567890.';
    var input1 =  document.querySelector('#num1');
    var input2 =  document.querySelector('#num2');

    input1.addEventListener('input',function(){
    if (this.value.length > 15) 
        this.value = this.value.slice(0,15); 
    })

    input2.addEventListener('input',function(){
    if (this.value.length > 15) 
        this.value = this.value.slice(0,15); 
    })

    for (var i=0; i<string.length; i++){
        if ((filtro.indexOf(string.charAt(i)) != -1)){
            out += string.charAt(i);
        }
    }
    return out;
} 

function valResult(x){
    
    if( result.length > 10 ){
        result = result.substring(0,16);
        console.log("2: "+ result);
    }
    return result;
} 

