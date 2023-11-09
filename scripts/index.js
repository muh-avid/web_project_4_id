//popup id
const editButton=document.querySelector('.profile__info-button')
const closeEditModalButton=document.querySelector('.popup__close-button')
const displayName=document.querySelector('.profile__info-heading')
const displayAbout=document.querySelector('.profile__info-subtitle')
// popup add button
const addButton = document.querySelector('.profile__add-button')
const closedAddButton = document.querySelector('.popup__addClose-button')
const displayTitle = document.querySelector('.profile__add-heading')
const displayUrl = document.querySelector('.profile__add-subtitle')


// popup image
const imgPopup = document.getElementById("popupImg")


const closeButtonImg = document.querySelector('.popup-img__close-button')

document.getElementById('myForm').addEventListener('submit', saveProfile);

editButton.addEventListener('click', showEditProfilePopup)
closeEditModalButton.addEventListener('click', closeEditProfilePopup)

const editProfilePopup = document.querySelector("#editProfilePopup");


function showEditProfilePopup() {
  editProfilePopup.classList.add('visible');
  const name = displayName.textContent;
  const about = displayAbout.textContent;
  document.getElementById('name').value = name;
  document.getElementById('about').value = about;
  document.getElementById('editProfilePopup');
}

const addPostPopup = document.querySelector("#addPostPopup");

// function showaddPostPopup(){ 
//   addPostPopup.classList.add('visible');
//   const title = document.getElementById('title').textContent;
//   const url = document.getElementById('url').textContent;
  
//     document.getElementById('title').value = title;
//     document.getElementById('url').value = url;
//   document.getElementById('addPostPopup');
// }

function closeEditProfilePopup() {
  editProfilePopup.classList.remove('visible');
  addPostPopup.classList.remove('visible');
  
}
  

  function saveProfile(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const about = document.getElementById("about").value;
    displayName.textContent=name
    displayAbout.textContent=about
    
    closeEditProfilePopup();
  }
  
document.getElementById('addForm').addEventListener('submit', saveForm);

addButton.addEventListener('click', showaddPostPopup)
closedAddButton.addEventListener('click', closeaddPostPopup)



// function showaddPostPopup(){
//   addPostPopup.classList.add('visible');
//   const title = document.getElementById('title').addContent;
//   const url = document.getElementById('url').addContent;
//   if (title) {
//     document.getElementById('title').value = title;
//   }

//   if (url) {
//   document.getElementById('url').value = url;
// }  
  
//   document.getElementById('addPostPopup');

// }

function showaddPostPopup(){
  addPostPopup.classList.add('visible');
  const title = document.getElementById('title').addContent;
  const url = document.getElementById('url').addContent;
  if (title) {
    document.getElementById('title').value = title;
  }

  if (url) {
  document.getElementById('url').value = url;
}  
  
  document.getElementById('addPostPopup');

}
  

function closeaddPostPopup() {
  
  addPostPopup.classList.remove('visible');
}

function saveForm(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;
 

  const cardItem = {name:title, link:url}
  initialCards.unshift (cardItem )
  
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
     
    
    
    
      const nameTitle = clone.getElementById('nama');
      nameTitle.innerText = name;
    
      // replace gambar
      const imageLink = clone.getElementById('card');
      imageLink.src = link;
    
      const popupImg = clone.getElementById('card');
      
        popupImg.addEventListener("click", function(){
        
        selectedImage=link;
       
        imgPopup.querySelector ('img').src = link;
        imgPopup.classList.add('imgpopup')
        imgPopup.querySelector ('h2').innerHTML = name
      });

      //delete button
      const deleteBtnImg = clone.querySelector ('.element__delete')
        deleteBtnImg.addEventListener("click", 
        function() {
        
        initialCards.splice(i, 1);
        renderSection ()
        })
      
      //like button
      const LikedBtn = clone.querySelector ('.element__like')
      LikedBtn.addEventListener("click", function(liked) {
      liked.target.classList.toggle("element__liked-active")
      
      })

      holder.appendChild(clone);
    }


  }

  renderSection ()

  
  closeButtonImg.addEventListener('click', closePopupImg)

  function closePopupImg () {
    imgPopup.classList.remove('imgpopup');
    
  }