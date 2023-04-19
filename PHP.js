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
    else if(el.classList.contains("forblock")) {
        let val1 = el.getElementsByClassName("startfor")[0].value;
        let val2 = el.getElementsByClassName("iterfor")[0].value;
        let val3= el.getElementsByClassName("act")[0].value;
        if(val3 =="--"){
            return `for ($i = ${val1}; $i > ${val2}; $i ${val3} ) {`;
        }
        else if(val3 =="++"){
        return `for ($i = ${val1}; $i < ${val2}; $i ${val3} ) {`;
        }
        else{
            return null;
        }
    }
    else if(el.classList.contains("functionblock")){
        let name = el.getElementsByClassName("name")[0].value;
        let params = el.getElementsByClassName("param")[0].value.split(",");
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

    else if (el.classList.contains("arithblock")) {
        let var1 = el.getElementsByClassName("val1")[0].value;
        let var2 = el.getElementsByClassName("val2")[0].value;
        let assignTo = el.getElementsByClassName("assignto")[0].value;
        let operation = el.getElementsByClassName("operationType")[0].value;

        return `$${assignTo} = $${var1} ${operation} $${var2};`;
    }

    else if(el.classList.contains("ifblock")) {
        let var1 = el.getElementsByClassName("val1")[0].value;
        let var2 = el.getElementsByClassName("val2")[0].value;
        let operation = el.getElementsByClassName("operationType")[0].value;

        return `if ($${var1} ${operation} $${var2}) {`;

    }

    else if (el.classList.contains("outputblock")) {

        let out = el.getElementsByClassName("echo")[0].value;
        let outType = el.getElementsByClassName("outputtype")[0].value;

        if(outType=='variable'){
            return `echo $${out}  ;`;
        }
        else if(outType=='string'){
            return `echo " ${out} " ;`;
        }
        else if(outType=='number'){
            return `echo ${out};`;
        }

    }

    else if(el.classList.contains("readblock")) {
        // let fileName = el.getElementsByClassName("")[0].value;
        let filename = el.getElementsByClassName("readFileName")[0].value;
      
        return `$fileContent = file_get_contents("${filename}");
                echo $fileContent;`;
      }
    
    else if(el.classList.contains("writeblock")) {
        let fileName = el.getElementsByClassName("writeFileName")[0].value;
        let textToWrite = el.getElementsByClassName("textToWrite")[0].value;
      
        return `file_put_contents("${fileName}", "${textToWrite}");`;
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