import GlobalStyles from '../src/styles/GlobalStyles'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const myApp = ({ Component, pageProps }): JSX.Element => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default myApp
