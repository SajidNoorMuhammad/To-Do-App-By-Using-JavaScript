var text= document.getElementById("text");
var list= document.getElementById("list");

function todoApp(event){
  var val= text.value;
  list.innerHTML += `<input class= 'userinput' type='text' value='${val}' disabled > 
  <button class='edit'>Edit</button class='delete'><button>Delete</button> <br>`
  text.value = "";
}