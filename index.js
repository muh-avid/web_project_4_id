//popup id
let editbutton=document.querySelector('.profile__info-button')
let closeditmodalbutton=document.querySelector('.popup__close-button')
let displayname=document.querySelector('.profile__info-heading')
let displayabout=document.querySelector('.profile__info-subtitle')
// popup add button
let addbutton = document.querySelector('.profile__add-button')
let closedaddbutton = document.querySelector('.popup__addClose-button')
let displaytitle = document.querySelector('.profile__add-heading')
let displayurl = document.querySelector('.profile__add-subtitle')


// popup image
var Imgpopup = document.getElementById("popupImg")
console.log(Imgpopup)

let closeButtonImg = document.querySelector('.popup-img__close-button')

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
  console.log('edit')
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
  console.log (close)
  addPostPopup.classList.remove('visible');
}

function saveForm(event) {
  event.preventDefault();
  var title = document.getElementById("title").value;
  var url = document.getElementById("url").value;
    displayname.textContent=title
    displayabout.textConten=url
 console.log('save');

  var cardItem = {name:title, link:url}
  initialCards.unshift (cardItem )
  console.log (initialCards);
  renderSection();

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
const holder = document.getElementById ('holder');
const template = document.querySelector('template');

var selectedImage

  function renderSection (){
    holder.innerHTML=''
    for (let i = 0; i < initialCards.length; i++){
      const { name, link } = initialCards[i];
    
      const clone = template.content.cloneNode(true);
      console.log(clone)
    
    
    
      const nameTitle = clone.getElementById('nama');
      nameTitle.innerText = name;
    
      // replace gambar
      const imageLink = clone.getElementById('card');
      imageLink.src = link;
    
      let popupImg = clone.getElementById('card');
      
        popupImg.addEventListener("click", function(){
        console.log ("clicked");
        selectedImage=link;
        console.log (Imgpopup)
        Imgpopup.querySelector ('img').src = link;
        Imgpopup.classList.add('imgpopup')
        Imgpopup.querySelector ('h2').innerHTML = name
      });

      //delete button
      const deleteBtnImg = clone.querySelector ('.element__delete')
        deleteBtnImg.addEventListener("click", 
        function() {
        console.log ("deleted",i)
        initialCards.splice(i, 1);
        renderSection ()
        })
      
      //like button
      const LikedBtn = clone.querySelector ('.element__like')
      LikedBtn.addEventListener("click", function(liked) {
      liked.target.classList.toggle("element__liked-active")
      console.log ("like")
      })

      holder.appendChild(clone);
    }


  }

  renderSection ()

  
  closeButtonImg.addEventListener('click', closePopupImg)

  function closePopupImg () {
    Imgpopup.classList.remove('imgpopup');
    
  }

  