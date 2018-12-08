

var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
var url = "http://google.com http://pxlshot.ro blabalbalbalba";
console.log(url.match(regex));
//Match -> Used to retrieve the matches when matching a string against a regular expression. Returns an array with the matches or null if there are none.
console.log(expression.test(url));
//Executes the search for a match between a regular expression and a specified string. Returns true or false.

//JSON -> Java Script Object Notation
// convert JSON to string
var json = {
    "students":['Antoine','Soline'], // keys must be wrapped in "" or '' for a valid JSON
    "classes":['Programming', 'WebDev'],// as with JS objects you can put anything you want inside a JSON
    "year":2018
}



function checkGDPR(){
    //alert("You must agree. COMPLY!!!");
    // we check in LS if the user already agreed
    // if he agreed .. do nada
    // otherwise show agree box
    var count = 1;
    setTimeout(function(){
        
        document.getElementById('counter').innerHTML="Set";
        
    },3000)
    setInterval(function(){
        count++;
        document.getElementById('counter').innerHTML=count;
        
    },1000)
    
    
}

var jsonString = JSON.stringify(json);
console.log(jsonString);

localStorage.setItem("myJson", jsonString); // localStorage is a variable provided by JS
// setItem('key of item we store', 'serialized data')

var fromStorage = localStorage.getItem("myJson");

var convertBack = JSON.parse(fromStorage);
console.log(convertBack);
