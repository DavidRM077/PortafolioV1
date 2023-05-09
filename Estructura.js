const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

window.addEventListener("load", () => {
  const currentDate = new Date();
  currentYear.innerText = currentDate.getFullYear();
});


var botonAudio = document.getElementById("escucha")
var parrafo = document.getElementById("parrafoSobremi")

function hablar () 
{
    let texto = parrafo.textContent
    let voz = new SpeechSynthesisUtterance() //crear nueva voz
    voz.text = texto
    voz.lang = "es-Es"
    window.speechSynthesis.speak(voz)
}

botonAudio.onclick = hablar;


