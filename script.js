const firebaseConfig = {
  apiKey: "AIzaSyAQB11Ae0wp9u502kVLd0Hnj_qvZAfiwUA",
  authDomain: "censor-de-climas-e6910.firebaseapp.com",
  databaseURL: "https://censor-de-climas-e6910-default-rtdb.firebaseio.com",
  projectId: "censor-de-climas-e6910"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref("clima").on("value", (snapshot) => {
  const data = snapshot.val();

  if (data) {
    document.getElementById("temp").innerText = data.temperatura;
    document.getElementById("hum").innerText = data.humedad;
    document.getElementById("luz").innerText = data.luz;
    document.getElementById("fecha").innerText = data.fecha;
    document.getElementById("hora").innerText = data.hora;
  }
});
