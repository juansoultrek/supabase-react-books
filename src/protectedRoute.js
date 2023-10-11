import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

function ProtectedRoute(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            // Get the session from supabase
            const { data: session, error } = await supabase.auth.getSession();

            if (session && session.user) {
                setUser(session.user);
                console.log('User logged in:', session.user);
            } else {
                console.log('User not logged in');
            }
        };

        checkUser();
    }, []);

    return user ? props.children : <Navigate to="/login" />;
}

export default ProtectedRoute;
