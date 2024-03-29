// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//   apiKey: "AIzaSyAjWIJe9AaL6fDZVn9tRajF-BUexEPFZyA",
//   authDomain: "react-notif-40228.firebaseapp.com",
//   projectId: "react-notif-40228",
//   storageBucket: "react-notif-40228.appspot.com",
//   messagingSenderId: "790644971731",
//   appId: "1:790644971731:web:dc0c5d007d2b961af3dc26"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDUgB8cpIYTnJWAOYQC6TE-rfkz1CWCDjo",
  authDomain: "push-acf50.firebaseapp.com",
  projectId: "push-acf50",
  storageBucket: "push-acf50.appspot.com",
  messagingSenderId: "893400846536",
  appId: "1:893400846536:web:ccc2bad6e8dfb541a495fd",
  measurementId: "G-F97TS23B3R",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
