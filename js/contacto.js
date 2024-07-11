//Probablemente este arcihco se podria renombrar cono validaciones.js o algo asi

function validarEmail(){
    //validacion del email
    let mail = document.getElementById('email').value

    if (!(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(mail))) {
        alert("es invalido el email, reescribalo")
    }
}

function fetchData(){

    const data = {
        username:  document.getElementById('email').value , 
        password: document.getElementById('contraseña').value
    }

    fetch('http://localhost:3000/login', {
        method: POST,
        body: data
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));


}

function validarLogin(){
    validarEmail()
    fetchData()
}

function validarContacto() {

    validarEmail()
    //validacion telefono

    let telefono = document.getElementById('telefono').value.replace(/ /g, "")

    if (!(/^(\d{10}|\d{11})$/.test(telefono))) {
        alert("el teléfono es invalido, por favor ingrese un numero de 10 u 11 digitos")
    }

}


