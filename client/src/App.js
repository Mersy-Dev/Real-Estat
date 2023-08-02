import './App.css';
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Headers/Header';
import Hero from './components/Hero/Hero';
import Residence from './components/Residences/Residence';
import Value from './components/Value/Value';

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient"/>
          <Header />
          <Hero />
        </div>

        <Companies/>
        <Residence/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
