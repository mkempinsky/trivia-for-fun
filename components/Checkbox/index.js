import {useState} from 'react';

const Checkbox = ({handleCheck, title}) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div
            className={`checkbox ${isChecked ? 'checked' : ''}`}
            onClick={() => setIsChecked((prevInputState) => !prevInputState)}>
            <div className="checkbox__square" />
            <div className="checkbox__title">{title}</div>
            <style jsx>
                {`
                    .checkbox {
                        display: grid;
                        grid-template-columns: 14px auto;
                        grid-gap: 4px;
                        align-items: center;
                        cursor: pointer;
                    }
                    .checkbox__square {
                        width: 14px;
                        height: 14px;
                        border: 1px solid var(--primary-400);
                        border-radius: 4px;
                        background: #fff;
                    }
                    .checkbox__title {
                        font-weight: 300;
                    }
                    .checkbox.checked .checkbox__square {
                        background: var(--primary-400);
                    }
                    .checkbox.checked .checkbox__title {
                        color: var(--primary-500);
                        font-weight: 400;
                    }
                `}
            </style>
        </div>
    );
};
export default Checkbox;
