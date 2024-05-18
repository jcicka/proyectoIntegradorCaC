function validarContacto(){

    //validacion del email
    mail = document.getElementById('email').value
    objetoMail = document.getElementById('email')
    console.log(objetoMail)

    if(!(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(mail))){
        alert("es invalido el email, reescribalo")
    }else{
        alert("el mail es valido")
    }

    //validacion telefono
    telefono = document.getElementById('telefono').value.replace(/ /g, "")
   
    if(!(/^(\d{10}|\d{11})$/.test(telefono))){
        alert("el telefono es invalido, por favor ingrese un nuemro de 10 u 11 digitos")
    }else{
        alert('el telefono funca')
    }

    alert("el fin")
}