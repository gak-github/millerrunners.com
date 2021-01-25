import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Miller Runners</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />
            
            {children}
            
            <Footer />
        </>
    );
};

export default Layout;