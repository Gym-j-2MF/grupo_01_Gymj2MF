const formContacto = document.getElementById("formulario");
const inputNombre = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputComentarios = document.getElementById("message");

formContacto.addEventListener("submit", function(e) {
    e.preventDefault();

    let inputFields = [{
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