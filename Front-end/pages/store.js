import {withRouter} from 'next/router';
import Layout from '../components/Layout'

const Page = withRouter(({ store }) => (
    <Layout>
        <h1>{store.name}</h1>
        <p>{store.description}</p>
    </Layout>
))

Page.getInitialProps = async function(param) {
    const { id } = param.query
    const res = await fetch(`http://localhost:9000/stores/${id}`)
    const data = await res.json()

    console.log(data)
    
    return {
        store: data
    }
}

export default Page