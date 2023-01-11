function calculoSubida() {

    var salarioAnual = parseInt(document.getElementById('salarioAnual').value);
    var sexo = document.getElementById('sexo').value;
    var subida = 0;
    var hijos = document.getElementById('hijos').value;


    if (salarioAnual <= 15000) {
        subida = (salarioAnual * 1.5) / 100; 
    } else {
        subida = (salarioAnual * 0.5) / 100;
    }
    if(sexo === 'mujer'){
        subida = subida + (salarioAnual * 0.1) /100;
    } 
    if (hijos > 0) {
        subida = subida + (salarioAnual * (hijos * 0.2) / 100);
    }
    
    var salarioTotal= (salarioAnual + subida);  
    document.getElementById('resultado').innerHTML= 
    'Tu sueldo Anual será de: ' +  (salarioTotal).toFixed(2) + '<br>' + 
    'Tu sueldo al mes será de: ' + (salarioTotal / 12).toFixed(2);      
}
