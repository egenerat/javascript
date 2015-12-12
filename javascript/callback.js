function doSomething(message, callbackFunction){
     callbackFunction(message);
}

doSomething('hello !', function (message) {
	console.log('callback: ' + message);
});
