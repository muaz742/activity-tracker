import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import actrack from "./actrack.0.1.0.js";

// Doküman yüklendiğinde çalıştır.
$(document).ready(function () {

  // Ekranı vurgula.
  $("#menuActivities").addClass("active");
  $("#pathPageName").text("Etkinlikler");
  $("#pathPageHeader").text("Etkinlikler");

  // Etkinlikleri ekrana yükle.
  actrack.f.getirEtkinlikler().then(function () {
    $(".grid").masonry({
      // options...
      itemSelector: ".grid-item",
      horizontalOrder: true,
      //columnWidth: 80,
      //percentPosition: true
    });
  });

  // Oturum var mı?
  const auth = getAuth();
  const { user } = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Oturum açık.");
    }
  });
});

