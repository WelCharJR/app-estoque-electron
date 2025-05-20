var botaoEntrar = document.getElementById("submit")

function validarFormulario () {
    var campoEmail = document.getElementById("email").value
    var campoSenha = document.getElementById("password").value

    if(campoEmail == "welingtoncharnetjr@gmail.com" && campoSenha == "12345") {
        window.location.replace("dashboard.html")
    } else {
        console.log("Login Incorreto")
    }
}

botaoEntrar.addEventListener("click", validarFormulario)