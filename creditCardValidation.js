function creditCardValidation(creditCardNo){
    cardNo=creditCardNo
    // credit card starts with the numbers 3,4,5,6,9
    let startNumberCardKind=["3","4","5","6","9"]
    let bool=startNumberCardKind.includes(cardNo[0])
    control=false
    
    function cardControl(cardNo=this.cardNo){

        if(cardNo.length==16 && bool==true){
    
            let nDigits = cardNo.length
     
            let nSum = 0
            let isSecond = false
            for (let i = nDigits - 1; i >= 0; i--)
            {
     
                let d = cardNo[i].charCodeAt() - '0'.charCodeAt();
     
                if (isSecond == true)
                    d = d * 2
     
             
                nSum += parseInt(d / 10, 10)
                nSum += d % 10;
     
                isSecond = !isSecond
            }
            const result=nSum % 10 == 0  
            return result;
                                                    
        }
        else{
               
            return control
        }
    }

        if (cardControl(cardNo)==true){
            console.log("This is a valid card")
            return cardControl(cardNo)
        }     
        else{
            console.log("This is not a valid card")
            return cardControl(cardNo)
        }
        
       
}

module.exports.creditCardValidation=creditCardValidation;
