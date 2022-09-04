import {useEffect} from 'react';
import QuestionCard from '../components/QuestionCard';
import Layout from '../components/Layout';
import GameSetup from '../components/GameSetup';
import {useContext} from 'react';
import AppContext from '../components/AppContext';
import Button from '../components/Button';

const Home = () => {
    const {questions, updateQuestions} = useContext(AppContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [questions]);
    return (
        <div>
            <Layout>
                <h1>Trivia for Fun</h1>
                <div className="directions"></div>
                {questions?.length >= 1 ? (
                    <Button onClick={() => updateQuestions([])}>New Game</Button>
                ) : (
                    <GameSetup />
                )}
                <div className="questions__container">
                    {Array.isArray(questions) &&
                        questions.map((q) => {
                            return (
                                <div key={q?.question}>
                                    <QuestionCard {...q} />
                                </div>
                            );
                        })}
                </div>
                {questions?.length >= 1 && (
                    <Button onClick={() => updateQuestions([])}>New Game</Button>
                )}
            </Layout>
            <style jsx>
                {`
                    h1 {
                        margin-bottom: 24px;
                        color: var(--primary-400);
                    }
                    .directions {
                        margin-bottom: 16px;
                    }
                    .directions i {
                        font-size: 12px;
                    }
                    .questions__container {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-gap: 16px;
                        margin: 24px 0;
                    }
                `}
            </style>
        </div>
    );
};
export default Home;
