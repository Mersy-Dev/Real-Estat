import './App.css';
import Companies from './components/Companies/Companies';
import Header from './components/Headers/Header';
import Hero from './components/Hero/Hero';
import Residence from './components/Residences/Residence';

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
      </div>
    </>
  );
}

export default App;
