import {useState} from 'react';
import AppContext from '../components/AppContext';

function TriviaApp({Component, pageProps}) {
    const [state, setState] = useState({
        gameType: 'basic',
        updateGameType: (gameType) =>
            setState((prevState) => ({
                ...prevState,
                gameType,
            })),
    });

    return (
        <AppContext.Provider value={{...state}}>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default TriviaApp;
