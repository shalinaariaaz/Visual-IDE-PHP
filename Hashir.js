// function execAndGetPHPOutput() {
//     let code = document.getElementById("").innerText;
//     console.log(code)
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "hashit.php", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.send("code=" + encodeURIComponent(code));
//     xhr.onload = () => {
//         document.getElementById("ID-where-Executed-php-code-displays").innerText += '\n'+ xhr.responseText;
//     }
//   }
  

// //   //Bind this function to the button that will execute the PHP Script
// //   //  Put the function in any of the js files

// //   //Make the code below into a seperated PHP file, name it hashit.php(the name used in above function)

// //   <?php
// //     //receive php code in string from frontend
// //     //execute the code
// //     //return the output generated by the code as a string

// //     //get the code from the frontend
// //     $code = $_POST['code'];
// //     str_replace('&nbsp;', '', $code);
// //     str_replace('@at@', '<', $code);

// //     //create a file with the code
// //     $myfile = fopen("code.php", "w") or die("Unable to open file!");
// //     fwrite($myfile, "<?php\n");
// //     fwrite($myfile, $code);
// //     fwrite($myfile, "\n?>");
// //     fclose($myfile);

// //     system("C:\wamp\bin\php\php8.1.13\php.exe -f code.php 2>&1", $output);
// //     //execute the code
// //     $output = shell_exec('php code.php');
// //     return $output;
    
// //     //return the output
// //     // echo $output;
// // ?>