import React, { useState } from 'react'
import './components.css';

function Functional() {
    const [isShown, setHidden] = useState(false);

    return (
        <div>
            <button onClick={() => setHidden(s => !s)} class="fun">To see styling in functional Component</button>
            {
                isShown ?
                    <div class="headerLeft">
                        <h1>This is created using Functional component</h1>
                        <p class="external">This is done using external CSS</p>
                        <p style={{ color: "blue" }}>This is done using inline CSS</p>
                    </div> : null
            }

        </div>
    )
}

export default Functional