import React from "react";

export const DebugEnv = () => {
    return (
        <div>
            <h1>Environment Variables</h1>
            <h1>{(import.meta.env.VITE_SECRET_KEY)}</h1>
        </div>
    );
};