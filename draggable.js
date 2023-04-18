// Get a reference to the drop target element
var dropTarget = document.getElementById('box2');


// Add the drop event listener to the drop target element
dropTarget.addEventListener('drop', function (event) {
  event.preventDefault();
  // Get the id of the draggable element from the data transfer object
  var data = event.dataTransfer.getData('text/plain');
  
  
  // Get a reference to the draggable element
  var draggableElement = document.getElementById(data);
  console.log(data.id)
  if (data.id == 'Condition' || data.id == 'Loop' || data.id == 'Function') {
    Shalina(data, event.target);
  }
  else{
    Shalina(data, dropTarget)
  }
// Initialize variable to store the new HTML content
var newHTMLContent = '';
});

function Shalina(data, parent){
  // Switch statement to handle different cases
  switch(data) {

  // Case for variable declaration
  case 'Var':
    newHTMLContent = '<input type="text" placeholder="Variable name"> <span>=</span> <input type="text" placeholder="Variable value">';
    break;

  // Case for loop creation
  case 'Loop':
    newHTMLContent = '<select name="loop-type"><option value="for">for</option><option value="while">while</option></select>'; 

    // Get the dropdown element
    var loopDropdown = document.querySelector('select[name="loop-type"]');
    
    // Get the selected option value
    var loopType = loopDropdown.value;

    // Nested switch statement to handle different loop types
    switch(loopType) {
      
      // Case for 'for' loop
      case 'for':
        newHTMLContent = '<div><input type="text" placeholder="Variable name"></div>' +
        '<div><input type="text" placeholder="From"></div>' +
        '<div><input type="text" placeholder="To"></div>' +
        '<div><input type="text" placeholder="Increment"></div>';
        break;

      // Case for 'while' loop
      case 'while':
        newHTMLContent = '<div><input type="text" placeholder="Variable name"></div>' +
        '<select name="symbol"><option value="less"><</option>'+
        '<option value="greater">></option>'+
        '<option value="equal">=</option>'+
        '<option value="lessorequal"><=</option>'+
        '<option value="greaterorequal">>=</option></select>'+
        '<div><input type="text" placeholder="Condition"></div>';
        break;

      // Default case for loop type
      default:
        console.log('Invalid loop type');
    }
    break;

  // Case for conditional statement
  case 'Condition':
    newHTMLContent = '<select name ="condition-type"><option value="If">if</option>'+
    '<option value="If-else">if else</option>'+
    '<option value="Else">else</option>'+
    '<div> <input type="text" placeholder="Condition"></div>';
    break;

  // Case for function declaration
  case 'Function':
    newHTMLContent = '<input type="text" placeholder="Function name">'+
    '<input type="text" placeholder="Parameter">';
    break;

  // Case for arithmetic operation
  case 'Arithmetic':
    newHTMLContent = '<input type="text" placeholder="Variable 1">'+
    '<select name="symbol"><option value="add">+</option>'+
    '<option value="subtract">-</option>'+
    '<option value="multiply">*</option>'+
    '<option value="divide">/</option>'+
    '<input type="text" placeholder="Variable 2">';
    break;

  // Case for file read operation
  case 'File Read':
    newHTMLContent = '<input type="text" placeholder="File name">';
    break;

  // Case for file write operation
  case 'File Write':
    newHTMLContent = '<input type="text" placeholder="File name">'+
    '<input type="text" placeholder="Write your Promt here">';
    break;

  // Case for node creation
  case 'Node Creation':
    newHTMLContent = '<input type="text" placeholder="Content to be Printed">';
    break;

  // Default case for invalid input
  default:
    console.log('Invalid input');
}

  
  // Create a new element with the same id as the draggable element
  var newElement = document.createElement('div');
  newElement.id = data.id;
  // Set the style of the new element
  newElement.innerHTML = newHTMLContent;
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


