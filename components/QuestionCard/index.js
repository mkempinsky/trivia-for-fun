import {useEffect, useState} from 'react';
import {shuffle} from '../../utils/helpers';
import Button from '../Button';

const QuestionCard = (props) => {
    const {question, correct_answer, incorrect_answers} = props;

    const [showAnswer, setShowAnswer] = useState(false);
    const [showMultipleChoice, setShowMultipleChoice] = useState(false);
    const [allAnswers, setAllAnswers] = useState([]);

    useEffect(() => {
        setShowAnswer(false);

        setAllAnswers(shuffle([correct_answer, ...incorrect_answers]));
    }, [question]);

    return (
        <div className="q-card">
            <div className="q-card__q" dangerouslySetInnerHTML={{__html: question}} />
            {showMultipleChoice && (
                <div className="all-answers">
                    {allAnswers.map((answer) => {
                        return (
                            <div
                                key={answer}
                                dangerouslySetInnerHTML={{__html: answer}}
                            />
                        );
                    })}
                </div>
            )}
            {showAnswer ? (
                <div
                    className="q-card__a"
                    dangerouslySetInnerHTML={{__html: correct_answer}}
                />
            ) : (
                <>
                    <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
                    {!showMultipleChoice && (
                        <div
                            className="show-all"
                            onClick={() => setShowMultipleChoice(true)}>
                            Show Multiple Choice
                        </div>
                    )}
                </>
            )}
            <style jsx>
                {`
                    .q-card {
                        border: 2px solid var(--primary-300);
                        border-radius: 4px;
                        padding: 16px;
                        background: #fff;
                    }
                    .q-card__q {
                        font-weight: bold;
                        text-align: center;
                        margin-bottom: 16px;
                    }
                    .q-card__a {
                        border: 2px solid #9cd484;
                        padding: 0 16px;
                        height: 45px;
                        border-radius: 4px;
                        background: #e1f2da;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .all-answers {
                        display: grid;
                        grid-template-columns: repeat(1, 1fr);
                        margin: 0 auto 16px auto;
                        text-align: left;
                        grid-gap: 16px 8px;
                    }
                    .all-answers > div {
                        display: flex;
                        align-items: center;
                    }
                    .all-answers > div:before {
                        content: '';
                        display: block;
                        width: 12px;
                        height: 12px;
                        margin-right: 8px;
                        background: var(--primary-300);
                        border-radius: 100%;
                    }
                    .show-all {
                        margin: 16px auto;
                        font-size: 12px;
                        text-align: center;
                        color: var(--primary-400);
                        text-decoration: underline;
                    }
                `}
            </style>
        </div>
    );
};
export default QuestionCard;
