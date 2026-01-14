function enviar() {
    // Objeto que relaciona inputs con clases de spans
    let campos = {
        ciudadInput: "ciudadSpan",
        fechaInput: "fechaSpan",
        nombreinputArrendador: "nombrespanArrendador",
        dniinputArrendador: "dnispanArrendador",
        direccionInput: "direccionSpan",
        nombreinputArrendatario: "nombrespanArrendatario",
        dniinputArrendatario: "dnispanArrendatario"
    };
    
    for (let inputId in campos) {
        let input = document.getElementById(inputId);
        let claseSpan = campos[inputId];

        if (input && claseSpan) {
            // Actualiza los spans en tiempo real al escribir
            input.addEventListener('input', () => {
                document.querySelectorAll(`.${claseSpan}`).forEach(span => {
                    span.textContent = input.value;
                });
            });
        }
    }

    for (let inputId in campos) {
        let claseSpan = campos[inputId];

        document.querySelectorAll(`.${claseSpan}`).forEach(span => {
            span.addEventListener('click', () => {
                let input = document.getElementById(inputId);
                if(input) {
                    let input = document.getElementById(inputId);
                    if (input) {
                        input.focus();
                        input.scrollIntoView({behavior: 'smooth', block: 'center'});
                    }
                };
            });
        });
    }
}

// Ejecuta la función cuando la página haya cargado
document.addEventListener('DOMContentLoaded', enviar);