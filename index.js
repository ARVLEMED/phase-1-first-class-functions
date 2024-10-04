function receivesAFunction (spy){
    return spy()
        
    }
function returnsANamedFunction() {
    const fn = function namedFunction() {
        console.log("namedFunction")
    };
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {
    console.log (beforeAll)
    };
}
