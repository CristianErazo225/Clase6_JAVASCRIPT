function operacion(){
    let num1,num2,sum,div;
    //busca en el archivo idenx la etiqueta id= numero1
    num1 = parseInt(document.getElementById('numero1').value) 

    // obtiene el valor y lo convierte a entero
    num2 = parseInt(document.getElementById('numero2').value)
    
    //sum = num1 + num2
    //alert("La suma de "+num1+" + "+num2+" = "+sum);

    if(num2==0){
        alert("La divicion no puede ser entre 0 ")
    }else{
        div = num1 / num2;
        alert("La Divicion de "+num1+" / "+num2+" = "+div);
    }

    
}