	var opc1 = parseInt(prompt(" OPERADORES ARITMETICOS \n 1) Suma  \n 2) Resta \n 3) Multiplicación \n 4) division \n 5) Modulo  \n 6) Comparacion "));
	if (opc1>0 && opc1<=6){
	var num1=parseInt(prompt("Ingrese el primer numero:"));
	var num2=parseInt(prompt("Ingrese el segundo numero:")); 
	switch (opc1){
		case 1:
		document.write("La suma es "+(num1+num2));
		break;
		case 2:
		document.write("La resta es "+(num1-num2));
		break;
		case 3:
		document.write("La Multiplicación es "+(num1*num2));
		break;
		case 4:
		document.write("La division es "+(num1/num2));
		break;
		case 5:
		document.write("El modulo es "+(num1%num2));
		break;
		case 6:
			{if (num1>num2){
				document.write(num1 + "es > que " + num2);
			}else if (num1<num2){
				document.write(num1 + "es < que " + num2);
			}else {
				document.write(num1 + "es = que " + num2);
			}}
		break;
		default:
		document.write("error");
		break;
	}
}else
{
	document.write("error");
}