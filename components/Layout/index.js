const Layout = (props) => {
    return (
        <div className="layout">
            <div className="container">{props?.children}</div>
            <style jsx>
                {`
                    .layout {
                        padding: 16px;
                    }
                `}
            </style>
        </div>
    );
};
export default Layout;
