var text = document.getElementById("text");
var list = document.getElementById("list");

function todoApp(event) {
  var val = event.target;
  if (event.keyCode == 13) {
    list.innerHTML += `<li><input class= 'userinput textjs' type='text' value='${val.value}' disabled > 
  <button class='edit'>Edit</button class='delete'><button class='delete'>Delete</button> <br>`
    text.value = "";
  }
}
function onclicking() {
  list.innerHTML += `<li><input class= 'userinput textjs' type='text' value='${text.value}' disabled > 
  <button class='edit'>Edit</button class='delete'><button class='delete' onclick= "delet()">Delete</button> <br>`
  text.value = "";
}

// function deleteAll() {
//   list.innerHTML = "";
// }

// function edit(){
// }

// function delet(){
// }
