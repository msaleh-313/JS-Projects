// const form=document.getElementById("form")
const btnField=form.querySelector("#btn-field")
const textField=form.querySelector("#text-field")


$(document).ready(function() {
    
    $("#form").submit(function(e){
        e.preventDefault()
        const text=$("#text-field").val()
        if(text.trim()==="")
        {
            $("#error-message").show()
            setTimeout(function(){
                $("#error-message").hide()
            },3000)
        }
        else{
            $(".learning").text(text)
            $("#text-field").val("")
            $(".output").show()

        }



    })





})
