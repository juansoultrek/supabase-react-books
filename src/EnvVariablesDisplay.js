import React from 'react';

const EnvVariablesDisplay = () => {
    return (
        <div>
            <h2>Environment Variables</h2>
            <p>REACT_APP_SUPABASE_CLIENT_URL: {process.env.REACT_APP_SUPABASE_CLIENT_URL}</p>
            <p>REACT_APP_SUPABASE_PROJECT_KEY: {process.env.REACT_APP_SUPABASE_PROJECT_KEY}</p>
            {/* Add more variables as needed */}
        </div>
    );
};

export default EnvVariablesDisplay;
