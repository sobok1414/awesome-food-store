import {withRouter} from 'next/router';
import Modal from '../components/StoreModal'

const Page = withRouter(({ store }) => (
    <div>
        asd
    </div>
))

Page.getInitialProps = async function(param) {
    const { id } = param.query
    const res = await fetch(`http://localhost:9000/stores/${id}`)
    const data = await res.json()
    
    return {
        store: data
    }
}

export default Page