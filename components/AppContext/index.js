import React from 'react';

const AppContext = React.createContext({
    gameType: '',
    updateGameType: () => {},
});

export default AppContext;
