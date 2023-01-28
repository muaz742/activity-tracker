import actrack from "./actrack.0.1.0.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Doküman yüklendiğinde çalıştır.
$(document).ready(async function () {

  // İçerik verilerini çek.
  const url = window.location.href;
  const urlObj = new URL(url);
  const etkinlikId = urlObj.searchParams.get("etkinlikId");
  const etkinlik = await actrack.f.getirEtkinlik(etkinlikId);

  // Ekranı vurgula.
  $("#menuActivities").addClass("active");
  $("#pathPageName").text("Etkinlikler");
  $("#pathPageHeader").text(etkinlik.name);
  document.title = etkinlik.name + " - " +document.title

  // İçerikleri ekranda göster.
  $("#kapakResmi").css("background-image", "url(" + etkinlik.picture + ")");
  $("#etkinlikAdi").text(etkinlik.name);
  $("#kulupAdi").text(etkinlik.clup);
  $("#kulupUrl").attr("href","kulup.html?kulupId="+etkinlik.clubId)
  $("#etkinlikAciklamasi").text(etkinlik.detail);
  etkinlik.approval == true
    ? $("#etkinlikOnayi").text("Onaylandı")
    : $("#etkinlikOnayi").text("Onaylanmadı");
  $("#etkinlikKapasitesi").text(etkinlik.capacity + " kişi");
  $("#etkinlikZamani").text(actrack.f.timeConvert(etkinlik.timestamp));
  $("#etkinlikKonumu").text(etkinlik.location);
  $("#etkinlikHaritadaBul").attr("target", "_blank");
  $("#etkinlikHaritadaBul").attr(
    "href",
    "https://www.google.com/maps/search/" + etkinlik.location
  );
  $("#etkinlikTakvimeEkleGoogle").attr(
    "href",
    actrack.f.createHref.googleCalendar(
      etkinlik.name,
      etkinlik.detail,
      etkinlik.timestamp,
      etkinlik.location
    )
  );
  $("#etkinlikTakvimeEkleOutlook").attr(
    "href",
    actrack.f.createHref.outlookCalendar(
      etkinlik.name,
      etkinlik.detail,
      etkinlik.timestamp,
      etkinlik.location
    )
  );

  // Oturum var mı?
  const auth = getAuth();
  const { user } = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Oturum açık.");
    }
  });
});
