import {useContext, useState} from 'react';
import categories from '../../lib/categories';
import AppContext from '../AppContext';

const Filters = () => {
    const {updateCategory, categoryId} = useContext(AppContext);

    const [showCategoryList, toggleCategoryList] = useState(false);
    return (
        <div className="filters">
            <div className="filter__container">
                <div className="filter__title">Category:</div>
                <div className="filter__dropdown">
                    <div
                        className="filter__placeholder"
                        onClick={() =>
                            toggleCategoryList((prevInputState) => !prevInputState)
                        }>
                        {categoryId
                            ? categories.find((x) => x?.id === categoryId)?.name
                            : 'General Knowledge'}
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
                                        }}
                                        dangerouslySetInnerHTML={{__html: item?.name}}
                                    />
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
            <style jsx>
                {`
                    .filters {
                        margin: 16px 0;
                        border: 2px solid var(--primary-300);
                        border-radius: 4px;
                        padding: 16px;
                    }
                    .filter__container {
                        display: grid;
                        grid-template-columns: 1fr 2fr;
                        grid-gap: 8px;
                        align-items: center;
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
                        max-width: 100%;
                        top: 40px;
                        border-radius: 0 0 4px 4px;
                        border: 1px solid var(--primary-200);
                        padding: 8px 0;
                        max-height: 280px;
                        overflow-y: scroll;
                    }
                    li {
                        padding: 0 16px;
                        font-size: 14px;
                        margin-bottom: 8px;
                        font-weight: 300;
                    }
                `}
            </style>
        </div>
    );
};
export default Filters;
