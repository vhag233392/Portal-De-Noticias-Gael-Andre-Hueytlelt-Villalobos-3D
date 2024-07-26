import React, { useState } from 'react';
import './Like.css';

function Like() {
    const [count, setCount] = useState(0);

    const handleLike = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button className="like-button" onClick={handleLike}>
                Like!
            </button>
            <span> Este post te gusto: {count} veces!</span>
        </div>
    );
}

export default Like;


