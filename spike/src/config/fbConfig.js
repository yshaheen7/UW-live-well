import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
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
