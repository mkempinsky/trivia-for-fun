import {useContext} from 'react';
import AppContext from '../AppContext';
import gameTypes from '../../lib/gameTypes';

const Filter = () => {
    const {gameType, updateGameType} = useContext(AppContext);

    console.log(gameTypes);

    return (
        <div className="nav">
            <div className="nav__game-types">
                {gameTypes.map((type) => (
                    <div
                        key={type?.id}
                        className={`nav__game-types--option ${
                            type?.id === gameType ? 'active' : ''
                        }`}
                        onClick={() => updateGameType(type?.id)}
                        dangerouslySetInnerHTML={{__html: type?.title}}
                    />
                ))}
            </div>
            <style jsx>
                {`
                    .nav {
                        background: var(--primary-300);
                    }
                    .nav__game-types {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        text-align: center;
                        color: #fff;
                        padding: 8px 0;
                        margin-bottom: 24px;
                    }
                    .nav__game-types--option.active {
                        color: red;
                    }
                `}
            </style>
        </div>
    );
};
export default Filter;
