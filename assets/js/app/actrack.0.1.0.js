import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  where,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

var actrack = {
  f: {
    logout: function () {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Oturum kapatıldı.");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signIn: function (email, password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Kayıt Olundu");
          window.location.href = "profil.html";
        })
        .catch((error) => {
          function swalert(message, title = "Hata!") {
            const ses = new Audio("assets/wav/button-22.wav");
            Swal.fire({
              title: title,
              text: message,
              icon: "error",
              confirmButtonText: "Tamam",
            });
            ses.play();
          }

          switch (error.code) {
            case "auth/email-already-in-use":
              //alert("Hata! \nE-posta adresi sisteme zaten kayıtlı. \nDilerseniz giriş ekranından parolanızı sıfırlayabilirsiniz.")
              swalert(
                "E-posta adresiniz sisteme zaten kayıtlı. Dilerseniz parolanızı sıfırlayabilirsiniz."
              );
              break;
            case "auth/invalid-email":
              swalert(
                "Lüften geçerli bir e-posta adresi girin.",
                "Geçersiz E-posta!"
              );
              break;
            case "auth/missing-email":
              swalert("Lütfen bir e-posta adresi girin.","E-posta Eksik!")
              break;
            case "auth/internal-error":
              swalert("Lütfen giriş bilgilerinizi kontrol edin.");
              break;
            default:
              swalert(error.message);
              break;
          }
        });
    },
    signUp: function (email, password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Oturum Açıldı");
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error(error.code + ": " + error.message);

          function swalert(message, title = "Hata!") {
            const ses = new Audio("assets/wav/button-22.wav");
            Swal.fire({
              title: title,
              text: message,
              icon: "error",
              confirmButtonText: "Tamam",
            });
            ses.play();
          }

          switch (error.code) {
            case "auth/email-already-in-use":
              //alert("Hata! \nE-posta adresi sisteme zaten kayıtlı. \nDilerseniz giriş ekranından parolanızı sıfırlayabilirsiniz.")
              swalert(
                "E-posta adresiniz sisteme zaten kayıtlı. Dilerseniz parolanızı sıfırlayabilirsiniz."
              );
              break;
            case "auth/wrong-password":
              swalert(
                "Lütfen parolanızı kontrol edin veya parolanızı sıfırlayın.",
                "Parola hatalı!"
              );
              break;
            case "auth/user-not-found":
              swalert(
                "Lütfen sisteme kayıtlı e-posta adresinizi girin.",
                "Kullanıcı bulunamadı!"
              );
              break;
            case "auth/invalid-email":
              swalert(
                "Lüften geçerli bir e-posta adresi girin.",
                "Geçersiz E-posta!"
              );
              break;
            case "auth/internal-error":
              swalert("Lütfen giriş bilgilerinizi kontrol edin.");
              break;
            case "auth/too-many-requests":
              swalert(
                "Birçok başarısız giriş denemesi nedeniyle bu hesaba erişim geçici olarak kısıtlandı. Parolanızı sıfırlayarak hemen geri erişebilir veya daha sonra tekrar deneyebilirsiniz.",
                "Erişim Kısıtlandı!"
              );
              break;
            default:
              swalert(error.message);
              break;
          }
        });
    },
    resetPassword: function (email) {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("Parola sıfırlama e-postası gönderildi.");
        })
        .catch((error) => {
          console.error(error.code + ": " + error.message);
          alert(error.code + ": " + error.message)
        });
    },
    getirEtkinlikler: async function () {
      const db = getFirestore();
      const activityRef = collection(db, "activities");

      const q = query(
        activityRef,
        orderBy("timestamp", "desc")
        //limit(3)
      );

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          actrack.ui.etkinliklerCards(
            doc.data().name,
            doc.data().detail,
            doc.data().clup,
            doc.data().timestamp,
            doc.data().location,
            doc.data().picture,
            doc.id
          );
        });
      } catch (error) {
        console.log(error);
      }
    },
    getirEtkinlik: async function (etkinlikId) {
      const db = getFirestore();
      const activityRef = doc(db, "activities", etkinlikId);

      try {
        const querySnapshot = await getDoc(activityRef);
        return querySnapshot.data();
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    getirKulup: async function (kulupId) {
      const db = getFirestore();
      const clubRef = doc(db, "clubs", kulupId);

      try {
        const querySnapshot = await getDoc(clubRef);
        return querySnapshot.data();
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    getirKulupEtkinlikleri: async function (kulupId) {
      const db = getFirestore();
      const activityRef = collection(db, "activities");

      const q = query(activityRef, where("clubId", "==", kulupId));

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          actrack.ui.kulup.etkinliklerListe(
            doc.data().name,
            doc.data().detail,
            doc.data().picture,
            doc.id
          );
        });
      } catch (error) {
        console.log(error);
      }
    },
    timeConvert: function (timestamp) {
      timestamp = timestamp * 1000;
      var date = new Date(timestamp).toLocaleDateString("tr-TR");
      var time = new Date(timestamp).toLocaleTimeString("tr-TR");
      return date + " " + time;
    },
    timeConvertToDate: function (timestamp) {
      timestamp = timestamp * 1000;
      var date = new Date(timestamp).toLocaleDateString("tr-TR");
      return date;
    },
    toIsoString: function (date) {
      var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? "+" : "-",
        pad = function (num) {
          return (num < 10 ? "0" : "") + num;
        };

      return (
        date.getFullYear() +
        "-" +
        pad(date.getMonth() + 1) +
        "-" +
        pad(date.getDate()) +
        "T" +
        pad(date.getHours()) +
        ":" +
        pad(date.getMinutes()) +
        ":" +
        pad(date.getSeconds()) +
        dif +
        pad(Math.floor(Math.abs(tzo) / 60)) +
        ":" +
        pad(Math.abs(tzo) % 60)
      );
    },
    toIsoStringForGoogleCalendar: function (date) {
      var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? "+" : "-",
        pad = function (num) {
          return (num < 10 ? "0" : "") + num;
        };

      return (
        date.getFullYear() +
        pad(date.getMonth() + 1) +
        pad(date.getDate()) +
        "T" +
        pad(date.getHours()) +
        pad(date.getMinutes()) +
        pad(date.getSeconds()) +
        dif +
        pad(Math.floor(Math.abs(tzo) / 60)) +
        ":" +
        pad(Math.abs(tzo) % 60)
      );
    },
    setCookie: function (name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    eraseCookie: function (name) {
      document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    createHref: {
      outlookCalendar: function (ad, aciklama, zaman, konum) {
        var hrefOutlookCalendar =
          "https://outlook.office.com/calendar/0/deeplink/compose?subject=" +
          encodeURIComponent(ad) +
          "&body=" +
          encodeURIComponent(aciklama) +
          "&startdt=" +
          new Date(zaman * 1000).toISOString() +
          "&enddt=" +
          new Date((zaman + 3600) * 1000).toISOString() +
          "&location=" +
          encodeURIComponent(konum) +
          "&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent";
        return hrefOutlookCalendar;
      },
      googleCalendar: function (ad, aciklama, zaman, konum) {
        var hrefGoogleCalendar =
          "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
          encodeURIComponent(ad) +
          "&details=" +
          encodeURIComponent(aciklama) +
          "&dates=" +
          actrack.f.toIsoStringForGoogleCalendar(new Date(zaman * 1000)) +
          "/" +
          actrack.f.toIsoStringForGoogleCalendar(
            new Date((zaman + 3600) * 1000)
          ) +
          "&location=" +
          encodeURIComponent(konum);
        return hrefGoogleCalendar;
      },
    },
  },
  ui: {
    etkinliklerCards: function (
      ad,
      aciklama,
      kulup,
      zaman,
      konum,
      resim,
      etkinlikId
    ) {
      var etkinlik =
        '        <div class="col-md-4 col-xl-3 ps-3 mt-4 grid-item">\n' +
        '            <div class="card card-background move-on-hover">\n' +
        '                <div class="full-background"\n' +
        "                     style=\"background-image: url('" +
        resim +
        "')\"></div>\n" +
        '                <div class="card-body pt-9">\n' +
        '                    <div class="author align-items-center">\n' +
        '                        <img src="assets/img/logo-yazisiz-at-bto-0.1-alpha.png" alt="..." class="avatar shadow bg-white">\n' +
        '                        <div class="name ps-2">\n' +
        "                            <span>" +
        kulup +
        "</span>\n" +
        '                            <div class="stats">\n' +
        "                                <small>" +
        actrack.f.timeConvert(zaman) +
        "</small>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        '                    <h4 class="text-white">' +
        ad +
        "</h4>\n" +
        "                    <p>" +
        aciklama +
        "</p>\n" +
        '<div class="dropdown dropup">\n' +
        '  <button class="btn bg-gradient-primary dropdown-toggle p-2 btn-sm" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">\n' +
        "    Takvime Ekle\n" +
        "  </button>\n" +
        '  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">\n' +
        '    <li><a class="dropdown-item" href="' +
        actrack.f.createHref.googleCalendar(ad, aciklama, zaman, konum) +
        '" target="_blank">Google Takvim</a></li>\n' +
        '    <li><a class="dropdown-item" href="' +
        actrack.f.createHref.outlookCalendar(ad, aciklama, zaman, konum) +
        '" target="_blank">Outlook Takvim</a></li>\n' +
        '    <li><a class="dropdown-item" href="#" hidden="true">Apple Takvim</a></li>\n' +
        "  </ul>\n" +
        '<a href="etkinlik.html?etkinlikId=' +
        etkinlikId +
        '"><button type="button" class="btn bg-gradient-primary mx-1 p-2 btn-sm">Detaylar</button></a>' +
        '<button type="button" class="btn bg-gradient-secondary mx-1 p-2 btn-sm disabled">Katıl</button>' +
        '<button type="button" class="btn bg-gradient-secondary mx-1 p-2 btn-sm disabled">İletişim</button>' +
        "</div>" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>";
      $("#menu").append(etkinlik);
    },
    kulup: {
      etkinliklerListe: function (ad, aciklama, resim, id) {
        const etkinlik =
          "\n" +
          '                <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">\n' +
          '                  <div class="avatar me-3">\n' +
          '                    <img src="' +
          resim +
          '" alt="kal"\n' +
          '                         class="border-radius-lg shadow">\n' +
          "                  </div>\n" +
          '                  <div class="d-flex align-items-start flex-column justify-content-center">\n' +
          '                    <h6 class="mb-0 text-sm">' +
          ad +
          "</h6>\n" +
          '                    <p class="mb-0 text-xs">' +
          aciklama +
          "</p>\n" +
          "                  </div>\n" +
          '                  <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto" href="etkinlik.html?etkinlikId=' +
          id +
          '">Görüntüle</a>\n' +
          "                </li>";
        $("#etkinlikListesi").append(etkinlik);
      },
    },
    kulupler: {
      kulupEkle: function (ad, eposta, kurulusTarihi, rektorOluru, kulupId) {
        const satir =
          "" +
          "<tr>\n" +
          "    <td>\n" +
          '        <a href="kulup.html?kulupId=' +
          kulupId +
          '" >\n' +
          '            <div class="d-flex px-2 py-1">\n' +
          "                <div>\n" +
          '                    <img src="assets/img/logo-yazisiz-at-bto-0.1-alpha.png"\n' +
          '                         class="avatar avatar-sm me-3">\n' +
          "                </div>\n" +
          '                <div class="d-flex flex-column justify-content-center">\n' +
          '                    <h6 class="mb-0 text-xs">' +
          ad +
          "</h6>\n" +
          '                    <p class="text-xs text-secondary mb-0">' +
          eposta +
          "</p>\n" +
          "                </div>\n" +
          "            </div>\n" +
          "        </a>\n" +
          "    </td>\n" +
          '    <td class="align-middle">\n' +
          '        <span class="text-secondary text-xs font-weight-bold">' +
          kurulusTarihi +
          "</span>\n" +
          "    </td>\n" +
          '    <td class="align-middle text-center">\n' +
          '        <span class="text-secondary text-xs font-weight-bold">' +
          rektorOluru +
          "</span>\n" +
          "    </td>\n" +
          "</tr>";

        $("#kuluplerTabloBody").append(satir);
      },
    },
  },
  /** etkinlik.html ekranı işlevleri */
};

export default actrack;
