


// Paginação incompleta, porém iniciada para ser finalizada na etrega 02.


document.querySelector("#btn-entrar").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/src/login/login.html";


});

document.querySelector("#btn-cadastrar").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/src/register/register.html";


});



document.querySelector("#continue-btn").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/src/myListsScreens/myListEmpty/index.html";


});


document.querySelector("#login-btn").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/src/myListsScreens/myListEmpty/index.html";


});
// login-btn


document.querySelector("#btn-back").addEventListener("click", () => {
  window.history.back()

});

// logout


document.querySelector("#logout").addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/src/TelaInicial/telaInicial.html";


});



