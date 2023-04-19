// Get a reference to the drop target element6
var dropTarget = document.getElementById('box2');
dropTarget.classList.add("SpecialElem");

// Add the drop event listener to the drop target element
dropTarget.addEventListener('drop', function (event) {
  event.preventDefault();
  // Get the id of the draggable element from the data transfer object
  var data = event.dataTransfer.getData('application/my-app');  
  
  // Get a reference to the draggable element
  var draggableElement = document.getElementById(data);
  
    console.log(findParent(event.target))
    Shalina(data, findParent(event.target));
    
// Initialize variable to store the new HTML content
var newHTMLContent = '';
});

function findParent(node){
  if (node.classList.contains("SpecialElem"))return node;
  else return findParent(node.parentNode);
}

function Shalina(data, parent){
  // Switch statement to handle different cases
  switch(data) {

  // Case for variable declaration
  case 'Var':
    newHTMLContent = '<input size="25" type="text" placeholder="Variable name"> <span>=</span> <input size="25" type="text" placeholder="Variable value">';
    break;

  // Case for loop creation
  case 'Loop':
    newHTMLContent = '<h5>For</h5>'+'<input type="text" placeholder="Variable name">'+
    '<span> </span>'+
    '<input type="text" placeholder="Start value">'+
    '<span> </span>'+
    '<input type="text" placeholder="End value">'+
    '<span> </span>'+
    '<select name="operation"><option value="increment">++</option>'+
    '<option value="decrement">--</option>'; 
    break;

  // Case for conditional statement
  case 'Condition':
    newHTMLContent = '<h5>If</h5>'+
    '<input type="text" placeholder="Variable Name">'+
    '<span> </span>'+
    '<select name="operation"><option value="equal">==</option>'+
    '<option value="not equal">!=</option>'+
    '<option value="greater than">></option>'+
    '<option value="less than"><</option>'+
    '<option value="greater than or equal to">>=</option>'+
    '<option value="less than or equal to"><=</option>'+
    '<span> </span>'+
    '<input type="text" placeholder="Variable OR Value">'+
    '<h5>Else</h5>';
    break;

  // Case for function declaration
  case 'Function':
    newHTMLContent = '<input size="25" type="text" placeholder="Function name">'+
    '<span> </span>'+
    '<input size="25" type="text" placeholder="Parameter">';
    break;

  // Case for arithmetic operation
  case 'Arithmetic':
    newHTMLContent = '<input size="23"type="text" placeholder="Variable">'+
    '<span> = </span>'+
    '<input size="23"type="text" placeholder="Variable 1">'+
    '<span> </span>'+
    '<select name="symbol"><option value="add">+</option>'+
    '<option value="subtract">-</option>'+
    '<option value="multiply">*</option>'+
    '<option value="divide">/</option>'+
    '<input size="23" type="text" placeholder="Variable 2">';
    break;

  // Case for file read operation
  case 'FileRead':
    newHTMLContent = '<input size="25" type="text" placeholder="Variable Name">'+
    '<span> </span>'+
    '<input size="25" type="text" placeholder="File name">';
    break;

  // Case for file write operation
  case 'FileWrite':
    newHTMLContent = '<input type="text" placeholder="Variable Name">'+
    '<span> </span>'+
    '<input type="text" placeholder="File name">'+
    '<p></p>'+
    '<input size="46" type="text" placeholder="Write your Promt here">';
    break;

  // Case for node creation
  case 'Echo':
    //
    newHTMLContent = '<input size="60" type="text" placeholder="Variable or text to be displayed">';
    break;

  // Default case for invalid input
  default:
    console.log('Invalid input');
}
  
  // Create a new element with the same id as the draggable element
  var newElement = document.createElement('div');
  // Set the style of the new element
  newElement.innerHTML = newHTMLContent;
  newElement.id = data;

  if(data == 'Condition' || data == 'Loop' || data == 'Function'){
  newElement.classList.add("SpecialElem");
  }
  // Set the style of the new element
  newElement.style.background = 'linear-gradient(to right, #56356d, #1f2466)';
  newElement.style.color = 'white';
  newElement.style.padding = '12px';
  newElement.style.margin = '10px';
  newElement.style.borderRadius = '5px';
  newElement.style.boxShadow = '0 0 5px 0 #1f2466';
 
  // Append the new element to the drop target element
  parent.appendChild(newElement);

  }
// Add the dragover event listener to the drop target element
  dropTarget.addEventListener('dragover', function(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
});
