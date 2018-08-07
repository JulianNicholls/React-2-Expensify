import { firebase, googleAuthProvider } from '../firebase';
import { LOGIN, LOGOUT } from './types';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const login = user => ({
  type: LOGIN,
  uid: user.uid,
  displayName: user.displayName
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const logout = () => ({ type: LOGOUT });
