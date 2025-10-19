//A number system is a way to represent numbers

//unary
//first number system, one of the ensian number system
//symblos are used here is 0
//ex: 2apples - 00
//3items -000
//number of symbls used here are just 1 , so base is 1
//each item is represented with 0 , its representation is (0)1 ex: (000)1


//decimal number system
//



function hexToDecimal(hex){
    let decimal = 0;
    const hexDigits = "0123456789ABCDEF";
    hex = hex.toUpperCase();

    for(let i = 0; i < hex.length; i++){
        let digit = hex[hex.length - 1 - i];
        let value = hexDigits.indexOf(digit);
        decimal += value * (16 ** i);
    }
    return decimal;
}
console.log(hexToDecimal("CE9A"));