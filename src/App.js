// create App.js that imports Mirror.js and uses it in the App component

import React from 'react';
import MirrorToggle from './MirrorToggle';

function App() {
    return (
        <div>
        <h1>Dance Remote</h1>
        <MirrorToggle />
        </div>
    );
    }

export default App;
