var raiseException = function () {
    throw {
        name: 'MyException',
        message: 'It happened!!!'
    };
};

try {
    raiseException();
}
catch(err) {
    console.log('Catched exception: ');
    console.log(JSON.stringify(err));
}
finally {
    console.log('Goes through finally');
}
