// Pobierz referencję do okienka modalnego
    var modal = document.getElementById("myModal");

    // Pobierz referencję do przycisku zamknięcia
    var closeBtn = document.getElementsByClassName("close")[0];

    // Funkcja otwierająca okienko modalne
    function openModal() {
      modal.style.display = "block"; // Ustaw wyświetlanie na "block"
    }

    // Funkcja zamykająca okienko modalne
    function closeModal() {
      modal.style.display = "none"; // Ustaw wyświetlanie na "none"
    }

    // Zamykanie okienka modalnego po kliknięciu na obszar poza zawartością
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal();
      }
    }
    
