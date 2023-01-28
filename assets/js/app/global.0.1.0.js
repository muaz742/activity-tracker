import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import actrack from "./actrack.0.1.0.js";

// Firebase ön tanımlarını yap.
const firebaseConfig = {
  apiKey: "AIzaSyCA1UGaoIY2dldaKk27hvW6cw2_hWrhdOs",
  authDomain: "activitytracker-32ac1.firebaseapp.com",
  projectId: "activitytracker-32ac1",
  storageBucket: "activitytracker-32ac1.appspot.com",
  messagingSenderId: "961274085855",
  appId: "1:961274085855:web:49766dd38970d5924f846a",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Doküman yüklendiğinde çalıştır.
$(document).ready(function () {

  // Oturum var mı?
  const auth = getAuth();
  const { user } = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Oturum açık.");

      // Profil butonunu göster.
      $("#nav-giris").attr("hidden", true);
      $("#nav-profil").removeAttr("hidden");

      // Hesap menüsünü göster.
      $("#menuHeader").removeAttr("hidden");
      $("#menuProfile").removeAttr("hidden");
      $("#menuMembership").removeAttr("hidden");
      $("#menuSettings").removeAttr("hidden");
      $("#menuLogout").removeAttr("hidden");
    } else {
      $("#nav-profil").attr("hidden", true);
      $("#nav-giris").removeAttr("hidden");
      $("#menuHeader").attr("hidden", true);
      $("#menuProfile").attr("hidden", true);
      $("#menuMembership").attr("hidden", true);
      $("#menuSettings").attr("hidden", true);
      $("#menuLogout").attr("hidden", true);
    }
  });

  // Oturumu kapat.
  $("#menuLogout").click(function () {
    actrack.f.logout();
  });
});
