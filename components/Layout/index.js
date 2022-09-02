import Nav from '../Nav';
const Layout = (props) => {
    return (
        <div className="layout">
            <Nav />
            <div className="container">{props?.children}</div>
            <style jsx>
                {`
                    .container {
                        padding: 16px;
                        margin-top: 60px;
                    }
                `}
            </style>
        </div>
    );
};
export default Layout;
