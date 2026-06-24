// Firebase web configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "smart-parking-system-79ea9.firebaseapp.com",
  databaseURL: "https://smart-parking-system-79ea9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-parking-system-79ea9",
  storageBucket: "smart-parking-system-79ea9.firebasestorage.app",
  messagingSenderId: "64061292409",
  appId: "1:64061292409:web:f5f4518e2c6393fb7e79a8"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
const slotRef = database.ref("parkingSlot");
