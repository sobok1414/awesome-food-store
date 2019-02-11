import MyLayout from '../components/MyLayout'
import StoreList from '../components/StoreList';
import fetch from 'isomorphic-unfetch'

const Store = (props) => (
    <MyLayout>
        <h1 style={{ textAlign: 'center' , paddingBottom : 30, fontFamily: 'Pacifico' }}>STORE LIST</h1>
        <StoreList stores={props.stores}/>
    </MyLayout>
)

Store.getInitialProps = async function() {
    const res = await fetch('http://localhost:9000/stores')
    const data = await res.json()
    
    return {
        stores: data
    }
}

export default Store;