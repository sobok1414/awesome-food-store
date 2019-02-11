import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

const MyLayout = (props) => (
    <div>
        <MyHeader />
            <div className="ui container" style={{ paddingTop: 140}}>
                {props.children}
            </div>
        <MyFooter />
    </div>
)

export default MyLayout