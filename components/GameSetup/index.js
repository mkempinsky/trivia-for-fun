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
            <DropdownSelect type="categories" />
            <DropdownSelect type="difficulty" />
            <Button onClick={getQuestions}>Start Trivia Game</Button>
        </div>
    );
};
export default GameSetup;
