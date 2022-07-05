// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function () {

    var formulario = document.form;
    elementos = formulario.elements;

    // Funcion que se ejecuta cuando el evento click es activado

    // var validarInputs = function () {
    //     for (var i = 0; i < elementos.length; i++) {
    //         // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
    //         if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "textarea") {
    //             // Si es tipo texto, email o password vamos a comprobar que esten completados los input
    //             if (elementos[i].value.length == 0) {
    //                 console.log('El campo ' + elementos[i].name + ' esta incompleto');
    //                 elementos[i].className = elementos[i].className + " error";
    //                 return false;
    //             } else {
    //                 elementos[i].className = elementos[i].className.replace(" error", "");
    //             }
    //         }
    //     }


    //     return true;
    // };





    var enviar = function (e) {
        if (!validarInputs()) {
            console.log('Falto validar los Input');
            e.preventDefault();
        } else {
            console.log('Envia');
            e.preventDefault();
        }
    };

    var focusInput = function () {
        this.parentElement.children[0].classList.remove("error");
        this.parentElement.children[1].classList.remove("error");
        this.parentElement.children[1].classList.add("active");
    };

    var blurInput = function () {
        if (this.value <= 0) {
            this.parentElement.children[1].classList.remove("active");
            this.parentElement.children[0].classList.add("error");
            this.parentElement.children[1].classList.add("error");
        }
    };

    // --- Eventos ---
    formulario.addEventListener("submit", enviar);

    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "textarea") {
            elementos[i].addEventListener("focus", focusInput);
            elementos[i].addEventListener("blur", blurInput);
        }
    }

}())