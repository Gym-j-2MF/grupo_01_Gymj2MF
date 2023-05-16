const formContacto = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputComentarios = document.getElementById("message");

inputNombre.addEventListener("input", function (event) {
    if(nombre.value == "") {
    nombre.setCustomValidity("¡No has escrito nada en el nombre!");
    } else {
        nombre.setCustomValidity("");
    }
});

inputEmail.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
    } else {
    email.setCustomValidity("");
    }
});


formContacto.addEventListener("submit", function(e) {
    e.preventDefault();

    if (inputNombre.textContent ==""){
        alert("Debe ingresar nombre");
    } let inputFields = [{
        field: inputNombre,
        message: "El nombre es requerido"
    }, {
        field: inputEmail,
        message: "El email es requerido"
    }, {
        field: inputComentarios,
        message: "El consulta es requerida"
    }];
    
    removeError(inputFields);

    let valid = validateRequiredFields(inputFields);

    if (valid) {
        formContacto.submit();
    }
})