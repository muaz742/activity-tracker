import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Doküman yüklendiğinde çalıştır.
$(document).ready(function () {

  // Eğer oturum kapalıysa ana sayfaya git.
  const auth = getAuth();
  const { user } = onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "index.html";
    }
  });

  // Ekranı vurgula.
  $("#menuSettings").addClass("active");
  $("#pathPageName").text("Ayarlar");
  $("#pathPageHeader").text("Ayarlar");
});
