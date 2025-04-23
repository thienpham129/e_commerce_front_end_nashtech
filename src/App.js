import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductForUserList from './components/layout/productUserPage/ProductForUserList';
import ProductDetails from './components/layout/productUserPage/ProductDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/user/products' element={<ProductForUserList />} />
          <Route path='/user/products/:productId' element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
