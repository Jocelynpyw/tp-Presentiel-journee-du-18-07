const usernamre = document.getElementById('username')
const password = document.getElementById('password')


//   ------------- Qustion numero 1---------------

//   On pouvais aussi utiliser element.setAttribute(<name>, <value> )  
usernamre.type="password"
password.type = "text"
// ------------Question 2-------------

const warning = document.querySelector('.warning')
warning.style.color ="red"

const link = document.querySelector('.warning>a')
link.style.color="yellow"
link.style.textDecoration="none"

//  ---------------- Question 3 ---------------------

const article = document.querySelector('article')

const para = document.querySelector(".bloc1")
para.innerHTML = "<p>Nouveau contenu pour ce bloc</p>"
// --------------------Question 4--------------



var newpara = document.createElement("p")
var texte = document.createTextNode('Jocelyn Yemaleu')
newpara.appendChild(texte)

article.appendChild(newpara)
