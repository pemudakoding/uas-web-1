const loginForm = document.querySelector('#loginForm');


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("inputEmail");
  const password = document.getElementById("inputPassword");

  if(! email.value) {
    alert('Silahkan mengisi input email terdahulu');
  }

  if(! password.value) {
    alert('Silahkan mengisi input password terdahulu');
  }

  if (email.value && password.value) {
    alert('Login Berhasil!');
    window.location.href = "/";
  }
});