//popup id
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
  
// popup add button
let addbutton = document.querySelector('.profile__add-button')
let closedaddbutton = document.querySelector('.popup-add__close-button')

document.getElementById = ('addForm').addEventListener('submit', saveButton );

addbutton.addEventListener('click', showEditProfilePopup)
closedaddbutton.addEventListener('click', closeEditProfilePopup)

var addPostPopup = document.querySelector("#addPostPopup");
function showAddPostPopup(){
  addPostPopup.classList.add('visible');
  const title = document.getElementById('title').addContent;
  const url = document.getElementById('url').addContent;
  document.getElementById('title').value = title;
  document.getElementById('url').value = url;
  document.getElementById('addPostPopup');
}

function closedaddbutton() {
  addPostPopup.classList.remove('visible');
}

function saveButton(event) {
  event.preventDefault();
  var title = document.getElementById("title").value;
  var url = document.getElementById("url").value;
  displaytitle.addContent = title
  displayurl.addContent = url  

  closedaddbutton();
}


  // card template
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
  
  // Fungsi untuk merender elemen-elemen HTML berdasarkan data
function renderCard(card) {
  const element = document.createElement('div');
  element.classList.add('element');

  const image = document.createElement('img');
  image.classList.add('element__image');
  image.src = card.link;
  image.alt = `Image ${card.name}`;

  const text = document.createElement('a');
  text.classList.add('element__text');
 ;text.textContent = card.name;

  const likeButton = document.createElement('button');
  likeButton.classList.add('element__like');

  // Menambahkan elemen-elemen ke dalam section elements
  element.appendChild(image);
  element.appendChild(text);
  element.appendChild(likeButton);

  return element;
}

const section = document.querySelector('.elements');

initialCards.forEach(card => {
  const renderedCard = renderCard(card);
  section.appendChild(renderedCard);
});


