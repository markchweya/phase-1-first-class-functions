function receivesAFunction(fn){
    fn();
}

function returnsANamedFunction(){
    return function fn(){
        console.log('good')
    }
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log('I am anonymous')
    }
}