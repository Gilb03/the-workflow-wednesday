import Head from 'next/head'
import Typekit from 'react-typekit';

const Layout = ({children}) => (
  <div>
    <Head>
      <title>{'Workflow Wednesdays'}</title>
      <meta charSet='utf-8' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGUG88YViM2h_rMqA2YWDhitp7GooXQ7g"></script>
      <Typekit kitId="gzc7xiy" />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    { children }
    <style global jsx>{`
      body {
        font-family: "franklin-gothic-urw";
      }
    `}</style>
  </div>
)

export default Layout
