import {useState} from 'react';
import Button from '../components/Button';
import QuestionCard from '../components/QuestionCard';
import fetchQuestions from '../utils/fetchQuestions';
import Layout from '../components/Layout';

const Home = () => {
    const [questions, setQuestions] = useState([]);

    const getQuestions = async () => {
        const response = await fetchQuestions();
        setQuestions(response);
    };

    return (
        <div>
            <Layout>
                <h1>Trivia for Fun</h1>
                <div className="directions">
                    Click the button below to begin the game.
                </div>
                <Button onClick={getQuestions}>Start Trivia Game</Button>
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
