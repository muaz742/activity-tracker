import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import actrack from "./actrack.0.1.0.js";

// Doküman yüklendiğinde çalıştır.
$(document).ready(async function () {

  // Ekranı vurgula.
  $("#menuClubs").addClass("active");
  $("#pathPageName").text("Kulüpler");
  $("#pathPageHeader").text("Kulüpler");

  // Kulüpleri ekranda göster.
  const db = getFirestore();
  const activityRef = collection(db, "clubs");
  const q = query(
    activityRef,
    orderBy("name", "asc")
  );
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      actrack.ui.kulupler.kulupEkle(
        doc.data().name,
        doc.data().email,
        doc.data().establishmentDate == 0
          ? ""
          : actrack.f.timeConvertToDate(doc.data().establishmentDate),
        doc.data().approval,
        doc.id
      );
    });
  } catch (error) {
    console.log(error);
  }
});
