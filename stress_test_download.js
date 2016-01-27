var http = require('http');

var downloader = function(url){
	//console.log('begin download');
	var req = http.request({
	    host: '172.0.0.1',
	    port: 8080,
	    method: 'GET',
	    path: url
	}, function (res) {
	    res.on('data', function (data) {
	        //console.log(data.toString());
	        //console.log(res.statusCode)
	        if(res.statusCode === 200){
	        	ok_code++;
	        }
	        else{
	        	error_code++;
	        }
	        test_run++;
	        display_result();
	    });
	});
	req.end(); 
};

var total_tests = 100000;
var test_run = 0;
var ok_code = 0;
var error_code = 0;
var url = 'http://ws.ifebyts.fr/pages/merci-rebooking-MRebookSRCH_A.json';
for(var i = 0; i < total_tests; i++){
	downloader(url);
}

var display_result = function(){
	if(test_run === total_tests){
		console.log('200: '+ok_code);
		console.log('error: '+error_code);
	}
};