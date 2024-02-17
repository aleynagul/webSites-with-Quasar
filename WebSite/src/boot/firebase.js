import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // eslint-disable-line

const firebaseConfig = {
  apiKey: "AIzaSyDUumuQbp4ikm1Dxw9Mgyy4nlTnExHCa_w",
  authDomain: "quasarfinal2.firebaseapp.com",
  projectId: "quasarfinal2",
  storageBucket: "quasarfinal2.appspot.com",
  messagingSenderId: "553725317918",
  appId: "1:553725317918:web:4f01dbd7babd8d3add2f0f",
  measurementId: "G-EFSX737WGP",
};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  app.config.globalProperties.$db = db;

  app.config.globalProperties.$Firebaseapp = fapp;
});
export { fapp };
