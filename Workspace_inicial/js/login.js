//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


//document.addEventListener("DOMContentLoaded", function(e){

//});
function guardarlogin(user, pass){
    if (user.trim()=== "" || pass.trim()=== ""){
        alert("El dato está vacio");
        alert("Rellena los espacios con tus datos.");
    } else {
        localStorage.setItem("usuario", user.trim());
        localStorage.setItem("contraseña", pass.trim());
        location.href="cover.html";
    }
}