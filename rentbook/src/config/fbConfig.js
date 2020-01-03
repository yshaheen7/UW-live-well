import firebase from "firebase/app"; // adding '/app' insures we are not importing the whole firebase package
import "firebase/firestore"; // we import only core functinoality and things that we will use
import "firebase/auth"; //  to suppor our backend ops, such as firestore and auth

// Your web app's Firebase configuration (get this block from firebase console)
var firebaseConfig = {
	apiKey: "AIzaSyDGzGIU4paIhEOYfCo7dhVW9XoObeY9aVk",
	authDomain: "uw-well.firebaseapp.com",
	databaseURL: "https://uw-well.firebaseio.com",
	projectId: "uw-well",
	storageBucket: "",
	messagingSenderId: "1022081235124",
	appId: "1:1022081235124:web:c970affd2d21a14e5dffe1",
	measurementId: "G-ZWY06SZNBH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// this is just b/c of an update, so the console does not complain
//firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;
