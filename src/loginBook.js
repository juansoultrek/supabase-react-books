import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function LoginForm() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');

    const handleLogin = async (event) => {
        event.preventDefault();

        setLoading(true);
        const {error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                shouldCreateUser: false
            }
        });

        if (error) {
            setMessage("Only valid users.");
            setAlertVariant("danger");
        } else {
            setMessage('Check your email for the login link!');
            setAlertVariant('success');
        }

        setLoading(false);
    }

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Login</h1>
                        {message && (
                            <div className={`alert alert-${alertVariant}`} role="alert">
                                {message}
                            </div>
                        )}
                        <p className="card-text">Sign in via a magic link with your email below</p>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email"
                                    value={email}
                                    required={true}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Loading' : 'Send magic link'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
