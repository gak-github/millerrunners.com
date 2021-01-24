import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                <Link href='/'>
                    <a><Image src='/vercel.svg' width={`50`} height={`10em`}/></a>
                </Link>
            </div>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/about'>
                <a>About</a>
            </Link>
                <Link href='/blogs'>
                <a>Blogs</a>
            </Link>
            <Link href='/contact'>
                <a>Contact</a>
            </Link>     
        </nav>
        
    );
};

export default Header;