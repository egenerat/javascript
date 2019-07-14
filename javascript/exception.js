const raiseException = () => {
    throw Error('It went wrong!');
};

const raiseComplexException = () => {
    throw {
        name: 'MyException',
        message: 'It happened!!!'
    };
};

try {
    raiseException();
//     raiseComplexException();
}
catch(err) {
    console.log('Catched exception:');
    console.log(err);
}
finally {
    console.log('Goes through finally');
}
