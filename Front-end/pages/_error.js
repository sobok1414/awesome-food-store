import React from 'react'
import Router from 'next/router'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default class Error extends React.Component {
    static async getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    componentDidMount() {
        setTimeout(() => {
            Router.push('/')
        }, 5000)
    }

    render() {
        return (
            <Dimmer active inverted>
                <Loader size='large'>잠시후에 Main 페이지로 이동합니다.</Loader>
            </Dimmer>
        )
    }
}