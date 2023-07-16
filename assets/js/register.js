const registerForm = document.querySelector('#registForm');

registForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = document.getElementById("inputName");
  const inputUser = document.getElementById("inputUser");
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");

  if(! inputName.value) {
    alert('Silahkan mengisi nama terdahulu');

    return
  }

  if(! inputUser.value) {
    alert('Silahkan mengisi username terdahulu');

    return
  }

  if(! inputEmail.value) {
    alert('Silahkan mengisi email terdahulu');

    return
  }

  if(! inputPassword.value) {
    alert('Silahkan mengisi password terdahulu');

    return
  }

  if (inputName.value && inputUser.value && inputEmail.value && inputPassword.value) {
    alert('Selamat bergabung ' + inputName.value + '!');
    window.location.href = "/";
  }
});