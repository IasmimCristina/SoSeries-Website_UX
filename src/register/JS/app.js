// Lógica para pegar a foto do usuário dinâmicamente

// Elementos html:
const profileWrapper = document.querySelector('.profile-pic');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadPicBtn = document.querySelector('#uploadPicBtn');





// Função:
file.addEventListener('change', function () {
  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      img.setAttribute('src', reader.result);
    });

    reader.readAsDataURL(choosedFile);

  }


});


