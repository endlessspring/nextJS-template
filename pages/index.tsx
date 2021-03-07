import GlobalStyles from '../src/styles/GlobalStyles'
import { observer } from 'mobx-react'

export const Home = observer(
  (): JSX.Element => {
    return (
      <div id="App">
        <GlobalStyles />
      </div>
    )
  }
)

export default Home
