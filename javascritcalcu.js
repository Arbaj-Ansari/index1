function addvalue(val) {
    let v = document.getElementById("screen")

    if(v.value === "0"){
        v.value = val;

    }else{
        v.value +=val; 
    }
   
}

function calcu(){
    let v = document.getElementById("screen")
    v.value = eval(v.value);
}
 function cancle(){
    let c = document.getElementById("screen")

    c.value = c.value.slice(0,-1);
 }

function clearScreen(val){
     let v = document.getElementById("screen")

    if(val === "clearScreen"){
        v.value = "0"
    }else{
        v.value +=val;
    }

}

