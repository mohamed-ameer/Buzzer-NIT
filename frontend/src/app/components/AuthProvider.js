"use client";
import React from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useContext, useState, createContext } from 'react';

const AuthContext = createContext({user: null});
// Higher Order Component to wrap the app with the AuthProvider
function AuthProvider({ children }) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, [auth]);
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;