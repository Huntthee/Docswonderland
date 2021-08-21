import './App.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Info from '../Info/Info';
import Events from '../Events/Events';
import Donate from '../Donate/Donate';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Info/>
      <Events/>
      <Donate/>
    </div>
  );
}

export default App;