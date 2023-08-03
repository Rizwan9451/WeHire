import './App.css';
import Blog from './Components/Blog';
import Help from './Components/Help';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import Footer from './Components/Footer';
import Companies from './Components/Companies';
function App() {
  return (
    <>
    <Navbar/>
    <br />
    <Companies/>
    <br /><br /><br /><br />
    <Help/>
    <br /><br /><br />
    <Blog/>
    <br /><br />
    <Feed/>
    <br /><br />
    <Footer/>
    </>
  );
}

export default App;
