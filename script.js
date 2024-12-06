const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));



//Mon code



const dialog = document.getElementById("fenetreMegaman");
let garderFermer = document.getElementById("nePlusAfficher");

/**
 * Va cherche la valeur de 'Status' dans le local storage et si la valeur n'est pas 'Fermée', affiche la boîte dialog à l'écran.
 */
function boiteDialogue()
{
  if (localStorage.getItem('Status') != 'Fermée')
  {
    dialog.showModal();
  }
}
window.addEventListener("load",boiteDialogue)

/**
 * Va cherche la valeur de 'Status' dans le local storage et si la valeur est 'Fermée', aucune boîte dialogue s'affiche.
 */
function fermer()
{
  localStorage.setItem('Status', 'Fermée');
  dialog.close();
}

garderFermer.addEventListener("click", fermer)



let themeFinalFantasy = document.getElementById('themeFF')
let themeChat = document.getElementById('themeChat')
let themeLoz = document.getElementById('themeLoz');
let texteTheme = document.getElementById('texteTheme');

const duo1 = document.getElementsByClassName("image1")
const duo2 = document.getElementsByClassName("image2")
const duo3 = document.getElementsByClassName("image3")
const duo4 = document.getElementsByClassName("image4")
const duo5 = document.getElementsByClassName("image5")
const duo6 = document.getElementsByClassName("image6")

const carte = document.getElementsByClassName('memory-card');
const dosCarte = document.getElementsByClassName("back-face");

/**
 * À l'appui du bouton Final Fantasy XIV;
 * Modifie la couleur d'arrière-plan de la page.
 * S'il y a lieu, change la couleur du texte de thème au noir.
 * Utilise une boucle afin de modifier le dos des cartes, la couleur et le format.
 * Utilise une autre boucle afin de modifier le design de face de chaque paire de carte.
 */
function imageFF()
{
  document.body.style.background="linear-gradient(180deg, blue, white)"
  texteTheme.style.color="black";

  for(let i = 0; i < dosCarte.length; i++)
  {
    dosCarte[i].setAttribute("src","./img/Remplacement Image/FFXIV Jobs/Logo.png");
    dosCarte[i].style.background="black";
    dosCarte[i].style.paddingLeft="10px";
    dosCarte[i].style.paddingRight="10px";
    dosCarte[i].style.paddingTop="20px";
    dosCarte[i].style.paddingBottom="20px";
  }
  for( let i = 0; i < duo1.length; i++)
  {
    duo1[i].setAttribute("src","./img/Remplacement Image/FFXIV Jobs/Astrologian.png");
    duo2[i].setAttribute("src","./img/Remplacement Image/FFXIV Jobs/Warrior.png");
    duo3[i].setAttribute("src","./img/Remplacement Image/FFXIV Jobs/Dark Knight.png");
    duo4[i].setAttribute("src","./img/Remplacement Image/FFXIV Jobs/Reaper.png");
    duo5[i].setAttribute("src","./img/Remplacement Image/FFXIV Jobs/Pictomancer.png");
    duo6[i].setAttribute("src","./img/Remplacement Image/FFXIV Jobs/Dancer.png")
  }
}
themeFinalFantasy.addEventListener("click", imageFF)


/**
  * À l'appui du bouton Chats;
 * Modifie la couleur d'arrière-plan de la page.
 * S'il y a lieu, change la couleur du texte de thème au noir.
 * Utilise une boucle afin de modifier le dos des cartes, la couleur et le format.
 * Utilise une autre boucle afin de modifier le design de face de chaque paire de carte.
*/
function imageChat()
{
  document.body.style.background="linear-gradient(180deg, pink, purple)"
  texteTheme.style.color="black";
  
  for(let i = 0; i < dosCarte.length; i++)
    {
      dosCarte[i].setAttribute("src","./img/Remplacement Image/Chats/logo.png");
      dosCarte[i].style.background="pink";
      dosCarte[i].style.paddingLeft="10px";
      dosCarte[i].style.paddingRight="10px";
      dosCarte[i].style.paddingTop="20px";
      dosCarte[i].style.paddingBottom="20px";
    }
    for( let i = 0; i < duo1.length; i++)
    {
      duo1[i].setAttribute("src","./img/Remplacement Image/Chats/chat1.png");
      duo2[i].setAttribute("src","./img/Remplacement Image/Chats/chat2.png");
      duo3[i].setAttribute("src","./img/Remplacement Image/Chats/chat3.png");
      duo4[i].setAttribute("src","./img/Remplacement Image/Chats/chat4.png");
      duo5[i].setAttribute("src","./img/Remplacement Image/Chats/chat5.png");
      duo6[i].setAttribute("src","./img/Remplacement Image/Chats/chat6.png")
    }
}
themeChat.addEventListener("click", imageChat)


/**
  * À l'appui du bouton Legend of Zelda;
  * Modifie la couleur d'arrière-plan de la page.
  * Modifie la couleur du texte de Thème afin qu'il soit encore lisible.
  * Utilise une boucle afin de modifier le dos des cartes, la couleur et le format.
  * Utilise une autre boucle afin de modifier le design de face de chaque paire de carte.
*/
function imageLoz()
{
  document.body.style.background="linear-gradient(180deg, black, #ffdc00)";
  texteTheme.style.color="#ffdc00";
  for(let i = 0; i < dosCarte.length; i++)
    {
      dosCarte[i].setAttribute("src","./img/Remplacement Image/Legend of Zelda/logo.png");
      dosCarte[i].style.background="black";
      dosCarte[i].style.paddingLeft="10px";
      dosCarte[i].style.paddingRight="10px";
      dosCarte[i].style.paddingTop="20px";
      dosCarte[i].style.paddingBottom="20px";
    }
    for( let i = 0; i < duo1.length; i++)
    {
      duo1[i].setAttribute("src","./img/Remplacement Image/Legend of Zelda/Link.png");
      duo1[i].style.paddingBottom="10px";
      duo1[i].style.paddingTop="10px";
      duo1[i].style.paddingLeft="10px";
      duo1[i].style.paddingRight="10px";

      duo2[i].setAttribute("src","./img/Remplacement Image/Legend of Zelda/Zelda.png");
      duo2[i].style.paddingBottom="12px";
      duo2[i].style.paddingTop="12px";
      duo2[i].style.paddingLeft="10px";
      duo2[i].style.paddingRight="10px";

      duo3[i].setAttribute("src","./img/Remplacement Image/Legend of Zelda/Ganondorf.png");
      duo3[i].style.paddingBottom="12px";
      duo3[i].style.paddingTop="12px";
      duo3[i].style.paddingLeft="10px";
      duo3[i].style.paddingRight="10px";

      duo4[i].setAttribute("src","./img/Remplacement Image/Legend of Zelda/Midna.png");
      duo4[i].style.paddingBottom="12px";
      duo4[i].style.paddingTop="12px";
      duo4[i].style.paddingLeft="10px";
      duo4[i].style.paddingRight="10px";

      duo5[i].setAttribute("src","./img/Remplacement Image/Legend of Zelda/skullkid.png");
      duo5[i].style.paddingBottom="15px";
      duo5[i].style.paddingTop="15px";
      duo5[i].style.paddingLeft="10px";
      duo5[i].style.paddingRight="10px";

      duo6[i].setAttribute("src","./img/Remplacement Image/Legend of Zelda/Urbosa.png")
      duo6[i].style.paddingBottom="15px";
      duo6[i].style.paddingTop="15px";
      duo6[i].style.paddingLeft="10px";
      duo6[i].style.paddingRight="10px";
    }
}
themeLoz.addEventListener("click", imageLoz)