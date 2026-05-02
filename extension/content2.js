// content.js

//var btn=document.getElementById('popup-button');

function anotherFunction(url) {
    console.log(`The URL is: ${url}`);
    // do something with the URL value here
    const scriptPath = '/path/to/your/script.py';
    var res = document.getElementById('dmurl').textContent = "Domain: "+url.split('/')[2];
//    modify
//let ipAddress;
//
//fetch(`https://api.ipify.org?format=json`)
//  .then(response => response.json())
//  .then(data => {
//    ipAddress = data.ip;
//    console.log(`${url}: ${ipAddress}`);
//  })
//  .catch(error => console.log('Error:', error));
///////////////////////


fetch(`http://ip-api.com/json/${url.split('/')[2]}`)
  .then(resp => resp.json())
  .then(data1 => document.getElementById('myip').textContent ="IPv4: "+(`${data1.query}`))
  .catch(error => console.log('Error:', error));
//        end
    fetch(`http://127.0.0.1:8000/api/${url}`, {

       method: 'GET',

      // headers: {
      //'Content-Type': 'application/json'
       //},
       //body: JSON.stringify({ script_path: scriptPath })
    })
    .then(response => response.json())
    .then(data => {
      
      console.log(data);
     var res = document.getElementById('result').textContent = data;
    if(res!=""){
      setTimeout(function(){
        const myimg = document.getElementById("myimg");
        myimg.style.display="none";
        },1);
        if(res=="Website is Phising"){
        document.getElementById('result1').textContent = data
        const alert = document.getElementById("alert");
        alert.style.display="block";}
        else{
        document.getElementById('result2').textContent = data
        const safe = document.getElementById("safe");
        safe.style.display="block";}
        }

    })
    .catch(error => {
      console.log(error);
    });

  }


function runScript() {

    chrome.tabs.query({ active: true }, tabs => {
        const url = tabs[0].url;
        anotherFunction(url);

      });

      

   
  }

///////////////////////
   const Button = document.getElementById('popup-button');
   const myimg = document.getElementById("myimg");
   Button.addEventListener("click", () => {
   myimg.style.display="block";
   console.log("hello")
   runScript()
});



///////////////////
//document.getElementById('popup-button').addEventListener("click", () => {
//    console.log("hello")
//    runScript(); });
