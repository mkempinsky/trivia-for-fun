import {useEffect, useState} from 'react';
import {shuffle} from '../../utils/helpers';
import Button from '../Button';

const QuestionCard = (props) => {
    const {question, correct_answer, incorrect_answers} = props;

    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        setShowAnswer(false);
    }, [question]);

    //let allAnswers = [correct_answer, ...incorrect_answers];
    //allAnswers = shuffle(allAnswers);
    return (
        <div className="q-card" key={question}>
            <div className="q-card__q" dangerouslySetInnerHTML={{__html: question}} />
            {showAnswer ? (
                <div
                    className="q-card__a"
                    dangerouslySetInnerHTML={{__html: correct_answer}}
                />
            ) : (
                <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
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
                `}
            </style>
        </div>
    );
};
export default QuestionCard;
