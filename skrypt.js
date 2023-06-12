// Pobierz referencję do drugiego okienka modalnego
var modal2 = document.getElementById("myModal2");

// Pobierz referencję do przycisku zamknięcia drugiego okienka
var closeBtn2 = document.getElementsByClassName("close")[1];

// Funkcja otwierająca drugie okienko modalne
function openModal2() {
  modal2.style.display = "block";
}

// Funkcja zamykająca drugie okienko modalne
function closeModal2() {
  modal2.style.display = "none";
}

// Zamykanie drugiego okienka modalnego po kliknięciu na obszar poza zawartością
window.onclick = function(event) {
  if (event.target == modal2) {
    closeModal2();
  }
}
