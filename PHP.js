function genCode() {
    document.getElementById("box3").innerHTML = "";
    _genCode(document.getElementById("box2"), "");
}

function _genCode(el, indent = "") {
    for(let i = 0; i < el.children.length; i++) {
        if (el.children[i].classList.contains("canDropInside")) {
            document.getElementById("code").innerHTML += "<br>" + indent + codeToPHP(el.children[i]);
            let ell = el.children[i].getElementsByClassName("insideDiv")[0];
            _genCode(ell, indent + "   ");
            document.getElementById("box3").innerHTML += "<br>" + indent + "}";
        } else {
            document.getElementById("box3").innerHTML += "<br>" + indent + codeToPHP(el.children[i]);
        }
    }
}

function codeToPHP(el) {
    if(el.id == "Var") {
        arr = el.querySelectorAll("input, select")
        
        let name = arr[0].value;
        let val = arr[1].value;
        

        return `$${name} = ${val};`;
    }
    else if(el.id == "Loop") {
        arr = el.querySelectorAll("input, select")

        let val1 = arr[0].value;
        let val2 = arr[1].value;
        let val3= arr[2].value;
        let val4 = arr[3].value;
        if(val4 =="--"){
            return `for (${val1} = ${val2}; ${val1} > ${val3}; $i ${val4} ) {`;
        }
        else if(val4 =="++"){
        return `for (${val1} = ${val2}; ${val1} > ${val3}; $i ${val4}) {`;
        }
        else{
            return null;
        }
    }
    else if(el.id == "Function") {
        arr = el.querySelectorAll("input, select")
        let name = arr[0].value;
        let params = arr[1].split(",");
        console.log(params)
        let paramStr = "";
        for (let i=0; i<params.length; i++) {
            if (i != params.length - 1) {
                paramStr += `$${params[i]}, `;
            }
            else {
                paramStr += `$${params[i]}`;
            }
        }

        return `function ${name}(${paramStr}) {`;


    }

    else if (el.id == "Arithmetic") {
        arr = el.querySelectorAll("input, select")

        let var1 = arr[1].value;
        let var2 = arr[3].value;
        let assignTo = arr[0].value;
        let operation = arr[2].value;

        return `$${assignTo} = $${var1} ${operation} $${var2};`;
    }

    else if(el.id == "Condition") {
        arr = el.querySelectorAll("input, select")
        let val1 = arr[0].value;
        let operation = arr[1].value;
        let val2 = arr[2].value;

        return `if ($${var1} ${operation} $${var2}) {`;

    }

    else if (el.id == "Output") {
        arr = el.querySelectorAll("input")

        let out = arr[0].value;
        //let outType = el.getElementsByClassName("outputtype")[0].value;

        // if(outType=='variable'){
        //     return `echo $${out}  ;`;
        // }
        // else if(outType=='string'){
        //     return `echo " ${out} " ;`;
        // }
        // else if(outType=='number'){
        //     return `echo ${out};`;
        // }
        return `echo $${out}  ;`;
    }

    else if(el.id == "FileRead") {
        arr = el.querySelectorAll("input, select")
        let filecontent = arr[0].value;
        let filename = arr[1].value;
      
        return `${filecontent} = file_get_contents("${filename}");
                echo ${varname};`;
      }
    
    else if(el.id == "FileWrite") {
        arr = el.querySelectorAll("input, select")
        let filecontent = arr[0].value;
        let fileName = arr[1].value;
        let textToWrite = arr[2].value;
      
        return `${filecontent}("${fileName}", "${textToWrite}");`;
      }
    // else if(el.classList.contains("blockoutputStatement")){
    //     //do smth here for proper output
    //     let out = el.getElementsByClassName("outputecho")[0].value;
    //     let retType = el.getElementsByClassName("outputechotype")[0].value;

    //     if (retType == 'variable'){
    //         return `echo " $${out} " ;`
    //     }
    //     else {
    //         return `echo " ${out} " ;`
    //     }
    // }
      
    }