import React from "react";

export const Success = ({count}) => {
    return (
        <div className="success-block">
            <img src="/assets/success.svg" alt="Success"/>
            <h3>Success!</h3>
            <p>The invitation has been sent to all {count} users.</p>
            <button
                onClick={() => window.location.reload()}
                className="send-invite-btn">Return
            </button>
        </div>
    );
};