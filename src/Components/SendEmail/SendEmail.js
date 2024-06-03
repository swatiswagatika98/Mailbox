import React, { useEffect } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from '../../Firebase';
import { SetEmailData } from '../Redux/Slices/StoreEmail';

export default function SendEmail() {
  const dispatch = useDispatch();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "sendEmail", user.uid);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          dispatch(SetEmailData(docSnap.data().emails || []));
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      });

      return () => unsubscribe(); // Cleanup the listener when the component unmounts
    } else {
      console.log("User not authenticated");
    }
  }, [dispatch, user]);

  const emails = useSelector(state => state.StoreEmail.sendEmail);

  return (
    <div>
      <h2>{user ? user.email : "No user data"}</h2>
      {emails.map((email, index) => (
        <div key={index}>
          <p>To: {email.to}</p>
          <p>Subject: {email.subject}</p>
          <p>Body: {email.emailBody}</p>
        </div>
      ))}
    </div>
  );
}