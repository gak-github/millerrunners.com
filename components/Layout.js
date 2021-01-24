import Header from './Header'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
            <footer>
                <p>Copyright &copy;2021 by Miller Runners. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Layout;