function genCode() {
    let codeArea = document.getElementById("box2").getElementsByClassName("insideDiv")[0];
    document.getElementById("box3").innerHTML = "";
    _genCode(codeArea, "");
}

function _genCode(el, indent = "") {
    for(let i = 0; i < el.children.length; i++) {
        if (el.children[i].classList.contains("SpecialElem")) {
            document.getElementById("box3").innerHTML += "<br>" + indent + codeToPHP(el.children[i]);
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
        
        let name = el.getElementsByClassName("varName")[0].value;
        let val = el.getElementsByClassName("varValue")[0].value;
        

        return `$${name} = ${val};`;
    }

    else if(el.id == "Loop") {

        let varname = el.getElementsByClassName("varName")[0].value;
        let startvalue = el.getElementsByClassName("startVal")[0].value;
        let endvalue= el.getElementsByClassName("endVal")[0].value;
        let operation = el.getElementsByClassName("operation")[0].value;
        return `for ($${varname} = ${startvalue}; $${varname} < ${endvalue}; $${varname}${operation} ) {`;
        
    }
    else if(el.id == "Function") {
        let name = el.getElementsByClassName("funcName")[0].value;
        let params = el.getElementsByClassName("funcParams")[0].value.split(",");
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

        let assignTo = el.getElementsByClassName("varName")[0].value;
        let var1 = el.getElementsByClassName("varName1")[0].value;
        let operation = el.getElementsByClassName("operation")[0].value;
        let var2 = el.getElementsByClassName("varName2")[0].value;
        
        return `$${assignTo} = $${var1} ${operation} $${var2};`;
    }

    else if(el.id == "Condition") {
        let val1 = el.getElementsByClassName("varName")[0].value;
        let operation = el.getElementsByClassName("operation")[0].value;
        let val2 = el.getElementsByClassName("varName2")[0].value;
        return `if ($${val1} ${operation} $${val2}) {`;

    }

    else if (el.id == "Echo") {
        

        let out = el.getElementsByClassName("print")[0].value;
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
        return `echo $${out};`;
    }

    else if(el.id == "FileRead") {
        let filecontent = el.getElementsByClassName("varName")[0].value;
        let filename = el.getElementsByClassName("fileName")[0].value;
      
        return `${filecontent} = file_get_contents("${filename}");
                echo ${filecontent};`;
      }
    
    else if(el.id == "FileWrite") {
        let filecontent = el.getElementsByClassName("varName")[0].value;
        let filename = el.getElementsByClassName("fileName")[0].value;
        let textToWrite = el.getElementsByClassName("prompt")[0].value;
      
        return `${filecontent}("${filename}", "${textToWrite}");`;
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