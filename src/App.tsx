
import { useContext } from 'react'
import { themeContext } from './Context'
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div
      className=""
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}

    >


      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
