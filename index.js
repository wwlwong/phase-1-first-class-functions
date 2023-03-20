function receivesAFunction (callBackFunction) {
    return callBackFunction();
}

function returnsANamedFunction(){
    return function namedFunction() {
        console.log('This is a named function')
    };
}

 


let returnsAnAnonymousFunction = () => function() {console.log('Hello');}
