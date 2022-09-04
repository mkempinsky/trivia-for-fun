import {useEffect, useState} from 'react';
import AppContext from '../components/AppContext';
import {fetchCategories} from '../utils/fetchQuestions';

function TriviaApp({Component, pageProps}) {
    const [state, setState] = useState({
        categoryId: '',
        questions: [],
        difficulty: '',
        updateCategory: (categoryId) => {
            setState((prevState) => ({
                ...prevState,
                categoryId,
            }));
        },
        updateQuestions: (questions) => {
            setState((prevState) => ({
                ...prevState,
                questions,
            }));
        },
        updateDifficulty: (difficulty) => {
            setState((prevState) => ({
                ...prevState,
                difficulty,
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
