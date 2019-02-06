import Link from 'next/link';

const Header = () => (
    <div>
        <Link href="/">
            <a>Store</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
    </div>
)

export default Header;