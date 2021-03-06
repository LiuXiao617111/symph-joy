import Document, { Head, Main, JoyScript } from '@symph/joy/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          {/* add custom style file */}
          <link rel='stylesheet' href='/_symphony/static/style.css' />
        </Head>
        <body>
          <Main />
          <JoyScript />
        </body>
      </html>
    )
  }
}
