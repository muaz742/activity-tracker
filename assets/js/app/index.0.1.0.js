import actrack from "./actrack.0.1.0.js";

// Doküman yüklendiğinde çalıştır.
$(document).ready(function () {

  // Ekranı vurgula.
  $("#menuHomepage").addClass("active");
  $("#pathPageName").text("Anasayfa");
  $("#pathPageHeader").text("Anasayfa");

  // Oturumu kapat.
  $("#menuLogout").click(function () {
    actrack.f.logout();
  });
});
