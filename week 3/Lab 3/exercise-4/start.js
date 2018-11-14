var handleCounter = function (result){
    console.log('The callback count is ' + result);
}

var callbackLoop = function(counter, callback){
    for(var i=1; i<counter; i++){
        callback(i);
    }
    console.log("exiting callback loop");
}

callbackLoop(5, handleCounter);