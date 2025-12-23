// 🔥 CONFIGURACIÓN FIREBASE (LA TUYA)
var firebaseConfig = {
  apiKey: "AIzaSyAQB11Ae0wp9u502kVLd0Hnj_qvZAfiwUA",
  authDomain: "censor-de-climas-e6910.firebaseapp.com",
  databaseURL: "https://censor-de-climas-e6910-default-rtdb.firebaseio.com",
  projectId: "censor-de-climas-e6910"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
var db = firebase.database();
var climaRef = db.ref("clima");

// Escuchar cambios en tiempo real
climaRef.on("value", function(snapshot) {
  if (snapshot.exists()) {
    var data = snapshot.val();

    document.getElementById("temp").innerText = data.temperatura;
    document.getElementById("hum").innerText = data.humedad;
    document.getElementById("luz").innerText = data.luz;
    document.getElementById("hora").innerText = data.hora;
    document.getElementById("fecha").innerText = data.fecha;
    document.getElementById("estado").innerText = "En línea 🟢";
  }
});
