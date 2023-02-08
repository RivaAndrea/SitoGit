var codprod= [];

var maglia1 =  22.39

var maglia2 =  18.00

var maglia3 = 19.50

var pantaloni1 = 30.00

var pantaloni2 =  30.00

var pantaloni3 =33.50

var felpa1 =  35.50

var felpa2 =  32.00

function modifica (soldi)
{
    if(sessionStorage.counter)
{
    var c = parseInt(sessionStorage.counter)
    c=c+soldi
    sessionStorage.counter = c

}else
{
    sessionStorage.counter = 0 
}
var e = document.getElementById("prezzototale")
e.innerHTML = sessionStorage.counter



}

function color()
{
    document.getElementById("nascondi").style.color="white"
    document.getElementById("change").style.color="black"
    modifica(0)
}
function colorw()
{
    document.getElementById("change").style.color="white"
    document.getElementById("nascondi").style.color="currentcolor"

}

// function somma()
// {
//     if(localStorage.counter)
// {
//     var c = parseInt(localStorage.counter)
//     c=c+1
//     localStorage.counter = c

// }else
// {
//     localStorage.counter = 0 
// }
// var e = document.getElementById("numeroprodotti")
// e.innerHTML = localStorage.counter
// }

//  function sommah(elemento)
//  {
//      codprod.push(elemento);
//      codprod.push(elemento)
//   document.getElementById("numeroprodotti").innerHTML= codprod.length - 1;
//  }



            
//     function maglia1h() {
       
//     }
//     function maglia2h() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.open("GET", "file.json", true);
//         xhttp.send();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 var prezzo = JSON.parse(xhttp.responseText);
//                 document.getElementById("dati-file").innerHTML = prezzo.maglia2;
//             }
//         };
//     }
//     function maglia3h() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.open("GET", "file.json", true);
//         xhttp.send();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 var prezzo = JSON.parse(xhttp.responseText);
//                 document.getElementById("dati-file").innerHTML = prezzo.maglia3;
//             }
//         };
//     }
//     function pantaloni1h() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.open("GET", "file.json", true);
//         xhttp.send();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 var prezzo = JSON.parse(xhttp.responseText);
//                 document.getElementById("dati-file").innerHTML = prezzo.pantaloni2;
//             }
//         };
//     }

//     var xhttp = new XMLHttpRequest();
//         xhttp.open("GET", "file.json", true);
//         xhttp.send();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 var prezzo = JSON.parse(xhttp.responseText);
//                document.getElementById("prezzoprodotti").innerHTML = prezzo.prezzototale;
         
                
//             }
//         };


// function incrementatore(prezzo)
// {
    
//     if(localStorage.counter)
//     {
//         var c = parseInt(localStorage.counter)
//         c=c+1
//         localStorage.counter = c

//     }else
//     {
//         localStorage.counter = 0 
//     }
//     var e = document.getElementById("test")
//     e.innerHTML = localStorage.counter
// }

// function felpe1h(elemento)
// {

//     codprod.push(elemento);
//   document.getElementById("numeroprodotti").innerHTML= codprod.length;
//   var soldi = felpa1.prezzo;
// sommazione(soldi);

//   var xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "file.json", true);
//   xhttp.send();
//   xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//           var prezzo = JSON.parse(xhttp.responseText);
//           document.getElementById("prezzoprodotti").innerHTML = prezzo.prezzototale;
//       }
//   };
// }
// function felpe2h(soldi)
// {
//     sommazione(soldi);
//   var xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "file.json", true);
//   xhttp.send();
//   xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//           var prezzo = JSON.parse(xhttp.responseText);
//           document.getElementById("prezzoprodotti").innerHTML = prezzo.prezzototale;
//       }
//   };
// }
// function sommazione(soldi)
// {

//     var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
// var theUrl = "file.json";
// xmlhttp.open("POST", theUrl, true);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(JSON.stringify({ "prezzototale": soldi}));

// xmlhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));
// let content = json.parse(fs.reafilesync("file.json","utf8"))
// content.prezzototale = soldi+ content.prezzototale
// fs.writefilesyc("file.json", JSON.stringify(content))

//}


 

