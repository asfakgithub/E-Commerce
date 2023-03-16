import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import { Shop } from './pages/Shop/shop';
import { Cart } from './pages/Cart/cart';
import { ShopContextProvider } from './context/shop-context';
// import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop /> } />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/Cart" element={<Cart/>} />
          </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;
