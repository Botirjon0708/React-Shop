import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Shop } from './components/shop/Shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Shop/>
      <Footer/>
    </div>
  );
}

export default App;
