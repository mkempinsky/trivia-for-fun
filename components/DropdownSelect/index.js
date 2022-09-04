import {useContext, useState} from 'react';
import categories from '../../lib/categories';
import AppContext from '../AppContext';
import IconChevron from '../Icons/IconChevron';
import Image from 'next/image';

const difficultyOptions = ['easy', 'medium', 'hard'];

const DropdownSelect = ({type}) => {
    const {updateCategory, categoryId, updateDifficulty, difficulty} =
        useContext(AppContext);

    const [showCategoryList, toggleCategoryList] = useState(false);
    const [showDifficultyList, toggleDifficultyList] = useState(false);

    return (
        <div className="filter__container">
            {type === 'categories' && (
                <>
                    <div className="filter__title">Category:</div>
                    <div className="filter__dropdown">
                        <div
                            className="filter__placeholder"
                            onClick={() =>
                                toggleCategoryList((prevInputState) => !prevInputState)
                            }>
                            <div>
                                {categoryId
                                    ? categories.find((x) => x?.id === categoryId)?.name
                                    : 'General Knowledge'}
                            </div>
                            <div>
                                <IconChevron
                                    fill="var(--primary-400"
                                    rotate={showCategoryList ? '180' : '0'}
                                />
                            </div>
                        </div>
                        {showCategoryList && (
                            <ul>
                                {categories.map((item) => {
                                    return (
                                        <li
                                            key={item?.id}
                                            onClick={() => {
                                                updateCategory(item?.id);
                                                toggleCategoryList(false);
                                            }}>
                                            <div className="image">
                                                {item?.image && (
                                                    <Image
                                                        src={`/categories/${item?.image}`}
                                                        layout="fill"
                                                        objectFit="cover"
                                                    />
                                                )}
                                            </div>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: item?.name,
                                                }}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </>
            )}
            {type === 'difficulty' && (
                <>
                    <div className="filter__title">Difficulty:</div>
                    <div className="filter__dropdown">
                        <div
                            className="filter__placeholder"
                            onClick={() =>
                                toggleDifficultyList((prevInputState) => !prevInputState)
                            }>
                            <div className="active">
                                {difficulty ? difficulty : 'Any'}
                            </div>
                            <div>
                                <IconChevron
                                    fill="var(--primary-400"
                                    rotate={showDifficultyList ? '180' : '0'}
                                />
                            </div>
                        </div>
                        {showDifficultyList && (
                            <ul>
                                {difficultyOptions.map((item) => {
                                    return (
                                        <li
                                            key={item}
                                            onClick={() => {
                                                updateDifficulty(item);
                                                toggleDifficultyList(false);
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: item,
                                            }}
                                        />
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </>
            )}
            <style jsx>
                {`
                    .filters {
                        margin: 16px 0;
                        border: 2px solid var(--primary-300);
                        border-radius: 4px;
                        padding: 16px;
                    }
                    .filter__container {
                        display: block;
                    }
                    .filter__placeholder {
                        background: #fff;
                        padding: 0 8px;
                        border-radius: 4px;
                        border: 1px solid var(--primary-200);
                        min-width: 100%;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        font-size: 12px;
                        border-radius: ${showCategoryList ? '4px 4px 0 0' : '4px'};
                    }
                    .filter__dropdown {
                        position: relative;
                    }
                    ul {
                        position: absolute;
                        list-style: none;
                        padding: 0;
                        background: #fff;
                        min-width: 100%;
                        top: 40px;
                        border-radius: 0 0 4px 4px;
                        border: 1px solid var(--primary-200);
                        padding: 8px 0;
                        max-height: 280px;
                        overflow-y: scroll;
                        z-index: 10;
                        box-shadow: 0 0 10px rgba(000, 000, 000, 0.3);
                    }
                    li {
                        padding: 0 16px;
                        font-size: 14px;
                        margin-bottom: 8px;
                        font-weight: 300;
                        text-transform: capitalize;
                        display: grid;
                        grid-template-columns: 40px auto;
                        align-items: center;
                        grid-gap: 8px;
                    }
                    .active {
                        text-transform: capitalize;
                    }
                    .image {
                        width: 40px;
                        height: 40px;
                        position: relative;
                        border-radius: 100%;
                        overflow: hidden;
                        background: var(--primry-200);
                    }
                `}
            </style>
        </div>
    );
};

export default DropdownSelect;
