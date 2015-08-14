/*
 * Este ejemplo lista los usuarios al conectarse mediante el evento "added"
 * y al desconectarse con el evento "removed".
 *
 * Pasando como parametro para funciones el objeto "obj" recibido con el evento,
 * podemos extraer datos del objeto como la direccion IP, id del canal y valores
 * customizables con el metodo .advertise
 *
 */
 
var Discover = require("./lib/discover.js");
 
var d = new Discover({ key : process.argv[2], helloInterval : 1000, checkInterval : 3000, nodeTimeout : 12000, masterTimeout : 15000});
 
d.advertise("Laura"); //este valor deberia variar por usuario listado
 
d.on("added", function (obj) {
                console.log("nuevo usuario conectado: " + obj.address + "(" + obj.advertisement + ")");    
                console.log("lista actual de usuarios disponibles");   
                d.eachNode( function (node) {
                        console.log (node.address + "(" + node.advertisement + ")");
                });
});
 
d.on("removed", function (obj) {
                console.log("usuario desconectado " + obj.address + "(" + obj.advertisement + ")"); 
                console.log("lista actual de usuarios disponibles");   
                d.eachNode( function (node) {
                        console.log (node.address + "(" + node.advertisement + ")");
                });
});
