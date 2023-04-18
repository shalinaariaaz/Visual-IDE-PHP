// function Shalina(data, parent){
//     // Switch statement to handle different cases
//     switch(data) {
  
//     // Case for variable declaration
//     case 'Var':
//       newHTMLContent = '<input type="text" placeholder="Variable name"> <span>=</span> <input type="text" placeholder="Variable value">';
//       break;
  
//     // Case for loop creation
//     case 'Loop':
//       newHTMLContent = '<select name="loop-type"><option value="for">for</option><option value="while">while</option></select>'; 
  
//       // Get the dropdown element
//       var loopDropdown = document.querySelector('select[name="loop-type"]');
      
//       // Get the selected option value
//       var loopType = loopDropdown.value;
    
//       // Nested switch statement to handle different loop types
//       switch(loopType) {
        
//         // Case for 'for' loop
//         case 'for':
//           newHTMLContent = '<div><input type="text" placeholder="Variable name"></div>' +
//           '<div><input type="text" placeholder="From"></div>' +
//           '<div><input type="text" placeholder="To"></div>' +
//           '<div><input type="text" placeholder="Increment"></div>';
//           newElement.id = 'Loop';
//           break;
  
//         // Case for 'while' loop
//         case 'while':
//           newHTMLContent = '<div><input type="text" placeholder="Variable name"></div>' +
//           '<select name="symbol"><option value="less"><</option>'+
//           '<option value="greater">></option>'+
//           '<option value="equal">=</option>'+
//           '<option value="lessorequal"><=</option>'+
//           '<option value="greaterorequal">>=</option></select>'+
//           '<div><input type="text" placeholder="Condition"></div>';
//           newElement.id ='Loop'
//           break;
  
//         // Default case for loop type
//         default:
//           console.log('Invalid loop type');
//       }
//       break;
  
//     // Case for conditional statement
//     case 'Condition':
//       console.log(newElement.id);
//       newHTMLContent = '<select name ="condition-type"><option value="If">if</option>'+
//       '<option value="If-else">if else</option>'+
//       '<option value="Else">else</option>'+
//       '<div> <input type="text" placeholder="Condition"></div>';
//       newElement.id = 'Condition';
//       break;
  
//     // Case for function declaration
//     case 'Function':
//       newHTMLContent = '<input type="text" placeholder="Function name">'+
//       '<input type="text" placeholder="Parameter">';
//       newElement.id = 'Function'
//       break;
  
//     // Case for arithmetic operation
//     case 'Arithmetic':
//       newHTMLContent = '<input type="text" placeholder="Variable 1">'+
//       '<select name="symbol"><option value="add">+</option>'+
//       '<option value="subtract">-</option>'+
//       '<option value="multiply">*</option>'+
//       '<option value="divide">/</option>'+
//       '<input type="text" placeholder="Variable 2">';
//       break;
  
//     // Case for file read operation
//     case 'File Read':
//       newHTMLContent = '<input type="text" placeholder="File name">';
//       break;
  
//     // Case for file write operation
//     case 'File Write':
//       newHTMLContent = '<input type="text" placeholder="File name">'+
//       '<input type="text" placeholder="Write your Promt here">';
//       break;
  
//     // Case for node creation
//     case 'Node Creation':
//       newHTMLContent = '<input type="text" placeholder="Content to be Printed">';
//       break;
  
//     // Default case for invalid input
//     default:
//       console.log('Invalid input');
//   }
// }