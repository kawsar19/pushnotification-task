import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// var firebaseConfig = {
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
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BA4tIu9dC2F1LuVct9wGC6_i0Zy3jGWIm7PeUuoRurSJcy_1A5c7z-2htXCpCLTHncTRvYLE_l2hh-6AMkYpkUs",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
