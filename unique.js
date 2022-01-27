//remove the dupliicate itme in the string 

var items=["A","D","B","C","A","D","F","s","s"];
var details={};



for(var i=0;i<items.length;i++){
  details[items[i]]="";
  console.log(details);
}
console.log(Object.keys(details));