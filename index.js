let editbutton=document.querySelector('.profile__info-button')
let closeditmodalbutton=document.querySelector('.popup__close-button')
let displayname=document.querySelector('.profile__info-heading')
let displayabout=document.querySelector('.profile__info-subtitle')

document.getElementById('myForm').addEventListener('submit', saveProfile);


editbutton.addEventListener('click', showEditProfilePopup)
closeditmodalbutton.addEventListener('click', closeEditProfilePopup)

var editProfilePopup = document.querySelector("#editProfilePopup");

function showEditProfilePopup() {
  editProfilePopup.classList.add('visible');
  
  const name = document.getElementById('name').textContent;
  const about = document.getElementById('about').textContent;
  document.getElementById('name').value = name;
  document.getElementById('about').value = about;
  document.getElementById('editProfilePopup');
}

function closeEditProfilePopup() {
  editProfilePopup.classList.remove('visible');
}
  

  function saveProfile(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var about = document.getElementById("about").value;
    displayname.textContent=name
    displayabout.textContent=about
    
    closeEditProfilePopup();
  }
