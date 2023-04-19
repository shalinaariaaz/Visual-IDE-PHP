//Get a reference to the parent element
var parent = document.getElementById('box1');

// Create an array of element names
var elementNames = ['Var', 'Loop', 'Condition','Function','Arithmetic','File Read','File Write','Node Creation'];

// Loop through the array and create div elements with the specified names
for (var i = 0; i < elementNames.length; i++) {
  // Create a new div element
  var div = document.createElement('div');

  // Set the id of the div element
  div.id = elementNames[i];

  // Set the draggable attribute of the div element
  div.setAttribute('draggable', 'true');
  div.setAttribute('data-operation', elementNames[i]);

  // Set the innerHTML of the div element
  div.innerHTML = elementNames[i];

  // Set the style of the div element
  
  div.style.background = 'linear-gradient(to right, #532d7e, #1f2466)';
  div.style.color = 'white';
  div.style.padding = '10px';
  div.style.margin = '10px';
  div.style.borderRadius = '5px';
  div.style.boxShadow = '0 0 5px 0 #1f2466';

  // Add the dragStart event listener to the div element
  div.addEventListener('dragstart', function(event) {
    // Set the data that will be transferred when the element is dropped
    event.dataTransfer.setData('application/my-app', event.target.id);
    event.dataTransfer.effectAllowed = 'copy';
  });

  // Append the div element to the parent element
  parent.appendChild(div);
}


