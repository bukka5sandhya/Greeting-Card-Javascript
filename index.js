let greeting ='{"greetText":"Wishing that the new year will bring joy,love,peace,and happiness to you.","from":"Rahul","to":"VaraKumar"}';
let parsegreeting = JSON.parse(greeting);


let greetFromEle = document.getElementById("greetFrom");
let greetToEle = document.getElementById("greetTo");
let greetTextEle= document.getElementById("greetText");

greetTextEle.textContent = parsegreeting.greetText;
greetFromEle.textContent ="From: "+parsegreeting.from;
greetToEle.textContent = "To: "+parsegreeting.to;


