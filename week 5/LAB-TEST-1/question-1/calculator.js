/*module.exports = {
    multiplyTwoNumbers: function(x, y){
        if(Number.isInteger(x) && Number.isInteger(y)){
            product = x * y;
            console.log("The product of " + x + " and " + y + " is " + product);
        }
        else{
            console.log("ERROR, parameters 1 or 2 are not integers");
        }
        
    },
    evenDoubler: function(x){
        if(x %2 == 0){
            console.log("Even double " + x + " equals " +x*x);
        }
        else if(x % 2 == 1){
            console.log("Number provided is odd, returning:" + 0);
        }
        else{
            console.log("Error, number provided is not an integer");
        }
    }
}*/

var multiplyTwoNumbers = function(x,y){
    if(Number.isInteger(x) && Number.isInteger(y)){
        let product = x * y;
            console.log("The product of " + x + " and " + y + " is " + product);
    }
    else{
        let z = x*y;
        console.log('multiply '+x+' * '+y+' equals: '+z);
    }
}

var evenDoubler = function(x){
    if(x % 2 == 0){
        let z = x*x;
        console.log('even doubler '+x+' equals: '+z);
    }
    else
    {
        let z = 0;
        console.log("Not even number");
        consoel.log(z);
    }
}

module.exports= {
    multiplyTwoNumbers: multiplyTwoNumbers,  
    evenDoubler: evenDoubler,
}