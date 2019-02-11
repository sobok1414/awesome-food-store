import Document, { Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return(
            <html>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.css" />
                <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" />
                <style>
                    {` body { margin: 0}`}
                </style>
                <title>AWSOME FOOD STORE</title>
            </Head>
            <body className="custom_class">
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}
