const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__title">Trivia for Fun</div>
            <div className="nav__filter">
                <div>Category</div>
            </div>
            <style jsx>
                {`
                    .nav {
                        background: var(--primary-500);
                        height: 60px;
                        padding: 0 16px;
                        color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: fixed;
                        top: 0;
                        width: 100%;
                        box-shadow: 0 0 10px rgba(000, 000, 000, 0.5);
                        z-index: 20;
                    }
                `}
            </style>
        </div>
    );
};
export default Nav;
