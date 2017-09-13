'use strict';

const rp = require('request-promise-native');
const cheerio = require('cheerio');
 
var options = {
    uri: 'http://www.google.com',
    transform: function (body) {
        return cheerio.load(body);
    },
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0'
    }
};
 
rp(options)
    .then(function ($) {
        console.log("Success");
        // Process html like you would with jQuery... 
    })
    .catch(function (err) {
        console.log("Failure");
        console.log(err);
        // Crawling failed or Cheerio choked... 
    });


const URL_LIST = ['A', 'B', 'C', 'D'];
for (var i of URL_LIST) {
    options.uri = i;
    rp(options).then(function ($) {
        console.log("Success");
        // Process html like you would with jQuery... 
    })
    .catch(function (err) {
        console.log(err.message);
        resolve('Resolving');
        // Crawling failed or Cheerio choked... 
    }).then(function (param) {
        console.log(`do something else: ${param}`);
    })
    ;
}