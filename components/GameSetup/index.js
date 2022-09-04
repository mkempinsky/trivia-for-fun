import DropdownSelect from '../DropdownSelect';
import {useContext} from 'react';
import Button from '../Button';
import fetchQuestions from '../../utils/fetchQuestions';
import AppContext from '../AppContext';

const GameSetup = () => {
    const {categoryId, difficulty, updateQuestions} = useContext(AppContext);

    const getQuestions = async () => {
        const response = await fetchQuestions(categoryId, difficulty);
        updateQuestions(response);
    };
    return (
        <div className="filters">
            <div>
                <DropdownSelect type="categories" />
            </div>
            <div>
                <DropdownSelect type="difficulty" />
            </div>
            <div className="start-btn">
                <Button theme="start" onClick={getQuestions}>
                    Start Trivia Game
                </Button>
            </div>
            <style jsx>
                {`
                    .filters {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-gap: 8px;
                    }
                    .start-btn {
                        margin: 8px 0;
                    }
                `}
            </style>
        </div>
    );
};
export default GameSetup;
