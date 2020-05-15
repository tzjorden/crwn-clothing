import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyDmR4OSxd_yUt7DEYWt632HrlVRBapXXZc",
        authDomain: "crwn-db-9f458.firebaseapp.com",
        databaseURL: "https://crwn-db-9f458.firebaseio.com",
        projectId: "crwn-db-9f458",
        storageBucket: "crwn-db-9f458.appspot.com",
        messagingSenderId: "66343530609",
        appId: "1:66343530609:web:6b18b68c755ec8586d6bd0",
        measurementId: "G-4ZHVBEHFDF"
      };

    /* This function will take the user object from auth library and store it in the database */

    export const createUserProfileDocument = async (userAuth, additionalData) => {  /* additionalData will be passed into userAuth as an object */
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`); 

      const snapShot = await userRef.get();

      if(!snapShot.exists) {       /*if snapshot doesnt exist we will create the following in its place using userAuth object  */
        const{displayName, email} = userAuth;
        const createdAt = new Date();

        try {                    
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error){
            console.log('error creating user', error.message);
        }
      }
         return userRef;                                /* In case userRef object is needed to do other things*/
           
            
    };

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => { /* will take collectionKey and add objectsToAdd */
  const collectionRef = firestore.collection(collectionKey);  /* get collectionRef from firestore passing in collectionKey */

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {     /*forEach is ary method that calls the element. It gets the object*/
    const newDocRef = collectionRef.doc();  /* newDocRef gets a newDocRef in collectionRef and generate a random id  */
    batch.set(newDocRef,obj);

  }); 

  batch.commit /* commits the batch request */
}; 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* gives access to googleauthprovider  */
const provider = new firebase.auth.GoogleAuthProvider();

/* takes in customerparameter & always triggers google popup whenever we use googleauthprovider  */
provider.setCustomParameters({ prompt : 'select_account' });

/* export signInwithgoogle method that is equal to function signInwithpopup(provider) which is google auth*/
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;