

const MyFooter = () => (
    <div>
    <div className="fixdown ui inverted vertical footer segment">
        <div className="ui center aligned container">
            <p>@ 2018 purpleworks</p>
        </div>
    </div>
        <style jsx>
            {`
                .fixdown.ui {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                }
            `}
        </style>
    </div>
)

export default MyFooter;