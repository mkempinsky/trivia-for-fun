import {useEffect, useState} from 'react';
import AppContext from '../components/AppContext';
import {fetchCategories} from '../utils/fetchQuestions';

function TriviaApp({Component, pageProps}) {
    const [state, setState] = useState({
        categoryId: '',
        questions: [],
        updateCategory: (categoryId) => {
            setState((prevState) => ({
                ...prevState,
                categoryId,
            }));
        },
    });

    return (
        <AppContext.Provider value={{...state}}>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default TriviaApp;
