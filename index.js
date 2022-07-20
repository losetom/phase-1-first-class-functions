function receivesAFunction(receivedFunction) {
    receivedFunction();
}

function returnsANamedFunction() {
    return function foo() {}
}

function returnsAnAnonymousFunction() {
    return function () {}
}