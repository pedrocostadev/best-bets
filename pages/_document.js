import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <meta name="description" content="BestBets App lists the next Premier League football games with detailed information about each one and gives you the best bet!"/>
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