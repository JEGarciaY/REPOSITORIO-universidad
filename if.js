var salarioActual;
var aumento;
var salarioAjustado;

aumento = parseFloat(aumento);
salarioActual = prompt("Ingrese su salario");
salarioActual = parseFloat(salarioActual);
if (salarioActual<1300606) {
    aumento=salarioActual*0.15
} else {
    aumento=0
}
salarioAjustado = salarioActual+aumento;

alert("Su salario con el ajuste indicado es " +salarioAjustado) 