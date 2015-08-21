// This is a demo server 
// Created with help of zetta

var zetta   = require('zetta');  // use the zetta module
var led     = require('zetta-led-mock-driver'); // use the led driver running as mock 
var photocell = require('zetta-photocell-mock-driver'); //use the photocell driver 
var dusktodawnLight = require('./apps/dusk_to_dawn_light'); //use the first apps, communicating between led and photocell 


// use the functionality of zetta 
// aka: name and listen 

zetta()
    .name('Laszlo-Barabas')
    .use(led)
    .use(photocell)
    .use(dusktodawnLight)
    .link('http://zetta-myheroku-cloud-server.herokuapp.com/')
    .listen(1337, function() {
        console.log('zetta is running at http://127.0.0.1:1337'); 
    }); 