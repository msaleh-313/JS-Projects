const form=document.getElementById("form")
const btnField=form.querySelector("#btn-field")
const textField=form.querySelector("#text-field")
form.addEventListener("submit", function(e){

    e.preventDefault();

    const text=textField.value

    if(text.trim()===""){
        let error=document.getElementById("error-message")
        error.textContent
        error.style.display="block"
        setTimeout(function(){
            error.style.display="none"    
        },3000)
    }
    else{          
        document.querySelector(".learning").textContent = text
        document.querySelector(".output").style.display="block"
        textField.value=""
    }


    

})
