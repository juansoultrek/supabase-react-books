import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

function ProtectedRoute({ element }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Checking session...');
        supabase.auth.getSession().then(({ data: { session } }) => {
            console.log('Session data:', session);
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            console.log('Auth state change event:', _event);
            console.log('Session state:', session);
            setSession(session);
        });
    }, []);

    return session ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;