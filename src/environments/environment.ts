// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJBKlTyILq9PVOupbCKq7FY2j7VdUm-9I",
  authDomain: "mobile-project008.firebaseapp.com",
  projectId: "mobile-project008",
  storageBucket: "mobile-project008.appspot.com",
  messagingSenderId: "540822964188",
  appId: "1:540822964188:web:8d6c2c1add61ee74f73119"
};


export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDJBKlTyILq9PVOupbCKq7FY2j7VdUm-9I",
    authDomain: "mobile-project008.firebaseapp.com",
    projectId: "mobile-project008",
    storageBucket: "mobile-project008.appspot.com",
    messagingSenderId: "540822964188",
    appId: "1:540822964188:web:8d6c2c1add61ee74f73119"
  },
};


const app = initializeApp(firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
