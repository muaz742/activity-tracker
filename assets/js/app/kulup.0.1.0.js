import actrack from "./actrack.0.1.0.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Doküman yüklendiğinde çalıştır.
$(document).ready(async function () {

  // Kulüp verilerini çek.
  const url = window.location.href;
  const urlObj = new URL(url);
  const kulupId = urlObj.searchParams.get("kulupId");
  const kulup = await actrack.f.getirKulup(kulupId);

  // Ekranı vurgula.
  $("#menuClubs").addClass("active");
  $("#pathPageName").text("Kulüpler");
  $("#pathPageHeader").text(kulup.name);
  document.title = kulup.name + " - " +document.title

  // İçerikleri ekranda göster.
  $("#kulupAdi").text(kulup.name);
  $("#kulupEpostasi").text(kulup.email);
  $("#kulupAciklamasi").text(kulup.detail);
  $("#kulupRektorlukOlurSayisi").text(kulup.approval);
  kulup.establishmentDate == 0
    ? null
    : $("#kulupKurulusTarihi").text(
        actrack.f.timeConvertToDate(kulup.establishmentDate)
      );
  $("#kulupAkademikDanisman").text(kulup.supervisor);
  $("#kulupUyeSayisi").text(kulup.memberNum);
  $("#kulupEtkinlikSayisi").text(kulup.activityNum);
  $("#kulupToplulukBaskani").text(kulup.chairman);

  const etkinlikler = await actrack.f.getirKulupEtkinlikleri(kulupId)

  // Oturum var mı?
  const auth = getAuth();
  const { user } = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("logined");
    }
  });
});
