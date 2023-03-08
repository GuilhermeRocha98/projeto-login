const formulario = document.querySelector("form");
const Inome = document.querySelector(".username");
const Isenha = document.querySelector(".password");

function login(){
    fetch('http://localhost:8080/login', {
  
  headers: {
    'Accept':'application/json',
    'Content-Type': 'application/json',
    //'Authorization': 'Bearer tokenDeAutenticacao'
  },
  method: 'POST',
  body: JSON.stringify({
    login: Inome.value,
    senha: Isenha.value
  })
})
  .then(function (res) {console.log(res)})
  .catch(function (res) {console.log(res)})


}




formulario.addEventListener('submit', function (event){
    event.preventDefault();

    login();
});