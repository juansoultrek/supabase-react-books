import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

function ProtectedRoute({ element }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (session) {
        return element;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;
