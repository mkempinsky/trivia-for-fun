const Button = (props) => {
    return (
        <button {...props}>
            {props?.children}
            <style jsx="true">
                {`
                    button {
                        border: 2px solid var(--primary);
                        padding: 0 16px;
                        height: 45px;
                        border-radius: 4px;
                        background: #fff;
                        cursor: pointer;
                        transition: all 0.5s;
                        color: var(--primary-400);
                        font-weight: bold;
                        width: 100%;
                    }
                    button:hover {
                        transition: all 0.5s;
                    }
                    button:active {
                        transform: translateY(4px);
                    }
                `}
            </style>
        </button>
    );
};
export default Button;
