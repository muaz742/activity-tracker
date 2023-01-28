import actrack from "./actrack.0.1.0.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Doküman yüklendiğinde çalıştır.
$(document).ready(function () {

  // Eğer oturum açıksa ana sayfaya git.
  const auth = getAuth();
  const { user } = onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "index.html";
    }
  });

  // Giriş yap.
  $("#giris-yap").click(function () {
    console.log("tıklandı");
    const email = $("#eposta").val();
    const password = $("#parola").val();
    actrack.f.signUp(email, password);
  });
});
