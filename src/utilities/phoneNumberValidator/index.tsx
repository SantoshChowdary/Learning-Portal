export const PhoneNumberValidator = (number = "" ) : boolean => {
    if ( typeof(number) === "string" &&  number.length === 10){
        const firstDigit = parseInt(number[0]);
        if ( firstDigit >= 5 && firstDigit<=9){
            for (let i=1; i<number.length; i++){
                const char = number.charAt(i);
                if (isNaN(parseInt(char))){
                    return false
                }
            }
            return true
        }
    }
    return false
}