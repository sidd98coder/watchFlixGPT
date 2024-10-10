import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const signout = (onSuccessCb = null, onErrorCb = null) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        if (onSuccessCb)
            onSuccessCb();
    }).catch((error) => {
        // An error happened.
        if (onErrorCb)
            onErrorCb(error);
    });
}

export const signInWithEmailPassword = (email, password, onSuccessCb = null, onErrorCb = null) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            onSuccessCb?.();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            onErrorCb?.(error);
            // ..
        });
}
export const signUpWithEmailPassword = (name, email, password, onSuccessCb = null, onErrorCb = null) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: "https://static.diverseui.com/female-72.jpg"
              }).then(() => {
                // Profile updated!
                onSuccessCb?.(auth.currentUser);
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            onErrorCb?.(error);
            // ..
        });
}