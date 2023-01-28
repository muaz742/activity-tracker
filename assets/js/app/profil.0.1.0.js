import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Doküman yüklendiğinde çalıştır.
$(document).ready(async function () {

  // Eğer oturum kapalıysa ana sayfaya git.
  const auth = getAuth();
  console.log(auth);
  const { user } = await onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "index.html";
    }
  });

  // Ekranı vurgula.
  $("#menuProfile").addClass("active");
  $("#pathPageName").text("Profil");
  $("#pathPageHeader").text("Profil");
});
