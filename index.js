//popup id
let editbutton=document.querySelector('.profile__info-button')
let closeditmodalbutton=document.querySelector('.popup__close-button')
let displayname=document.querySelector('.profile__info-heading')
let displayabout=document.querySelector('.profile__info-subtitle')
// popup add button
let addbutton = document.querySelector('.profile__add-button')
let closedaddbutton = document.querySelector('.popup-add__close-button')
let displaytitle = document.querySelector('.profile__add-heading')
let displayurl = document.querySelector('.profile__add-subtitle')


document.getElementById('myForm').addEventListener('submit', saveProfile);

editbutton.addEventListener('click', showEditProfilePopup)
closeditmodalbutton.addEventListener('click', closeEditProfilePopup)

var editProfilePopup = document.querySelector("#editProfilePopup");


function showEditProfilePopup() {
  editProfilePopup.classList.add('visible');
  const name = displayname.textContent;
  const about = displayabout.textContent;
  document.getElementById('name').value = name;
  document.getElementById('about').value = about;
  document.getElementById('editProfilePopup');
}

var addPostPopup = document.querySelector("#addPostPopup");

function showaddPostPopup(){
  addPostPopup.classList.add('visible');
  const title = document.getElementById('title').addContent;
  const url = document.getElementById('url').addContent;
  document.getElementById('title').value = title;
  document.getElementById('url').value = url;
  document.getElementById('addPostPopup');
}

function closeEditProfilePopup() {
  editProfilePopup.classList.remove('visible');
  addPostPopup.classList.remove('visible');
  console.log('a')
}
  

  function saveProfile(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var about = document.getElementById("about").value;
    displayname.textContent=name
    displayabout.textContent=about
    
    closeEditProfilePopup();
  }
  
document.getElementById('addForm').addEventListener('submit', saveForm);

addbutton.addEventListener('click', showaddPostPopup)
closedaddbutton.addEventListener('click', closeaddPostPopup)



function showaddPostPopup(){
  addPostPopup.classList.add('visible');
  const title = document.getElementById('title').addContent;
  const url = document.getElementById('url').addContent;
  document.getElementById('title').value = title;
  document.getElementById('url').value = url;
  document.getElementById('addPostPopup');

}

function closeaddPostPopup() {
  addPostPopup.classList.remove('visible');
}

function saveForm(event) {
  event.preventDefault();
  var title = document.getElementById("title").value;
  var url = document.getElementById("url").value;
 console.log('save');

  var cardItem = {name:title, link:url}
  initialCards.unshift (cardItem )
  console.log (initialCards);
  //renderSection();

  closeaddPostPopup();
}


  // array of object
  const initialCards = [
    {
      name: "Lembah Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Danau Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Pegunungan Gundul",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Gunung Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Taman Nasional Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ];

//template
const template = document.querySelector('template');
const clone = template.cloneNode(true);

//querySelector(template).content.cloneNode(true)


