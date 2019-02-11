import Link from 'next/link'

const MyHeader = () => (
  <div className="ui fixed inverted menu">
    <div className="ui container">
      <Link href="/">
        <a className="header item" style={{ fontSize: 20 }}>AWSOME FOOD STORE</a>
      </Link>
      <Link href="/">
        <a className="item">Store</a>
      </Link>
      <Link href="/about">
        <a className="item">About</a>
      </Link>
    </div>
  </div>
)

export default MyHeader;