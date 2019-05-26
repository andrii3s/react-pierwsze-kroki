import React from 'react';

import Countdown from './Countdown';

const App = () => (
    <div>
        <Countdown />
        <div className="countdown">
            <strong>śniadanie</strong> - 08:00
        </div>
        <div className="countdown">
            <strong>obiad</strong> - 15:00
        </div>
    </div>
);

export default App;

