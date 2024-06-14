



import React from 'react';

export default function DateNow() {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');

    return (
        <div>
            <h1>Today: {formattedDate}</h1>
        </div>
    );
}





      
