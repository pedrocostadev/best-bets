import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <meta name="description" content="A list of the next premier league football games with detailed information about each game and a tip for the best bet"/>
        <meta name="theme-color" content="#ef8729"/>
        <link rel="apple-touch-icon" href="pictures/boot.png"></link>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument