import Layout from '../components/Layout'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

const Store = (props) => (
    <Layout>
        <ul>
            {props.stores.map(store => (
                <li key={store.id}>
                    <Link href={`/store?id=${store.id}`}>
                        <a>{store.name}</a>
                    </Link>
                </li>
                )
            )}
        </ul>
    </Layout>
)

Store.getInitialProps = async function() {
    const res = await fetch('http://localhost:9000/stores')
    const data = await res.json()

    console.log(data)
    
    return {
        stores: data
    }
}

export default Store;