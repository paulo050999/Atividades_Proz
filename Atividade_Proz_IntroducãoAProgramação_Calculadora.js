function calculadora (num1, num2, operacao){
    if (operacao == 1){
        return num1 + num2
    }
    else if (operacao == 2){
        return num1 - num2;
    }
    else if (operacao == 3){
        return num1 * num2;
    }
    else if (operacao == 4){
        return num1 / num2
    }
    else {
        return 0
    }
}

    resultado = calculadora (10, 5, 4)
    print (resultado)



