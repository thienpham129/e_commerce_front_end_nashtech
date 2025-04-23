import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UserList from './components/user/UserList';
import ProductForUserList from './components/layout/productUserPage/ProductForUserList';
import ProductDetails from './components/layout/productUserPage/ProductDetails';
import ProductListByCategory from './components/layout/productUserPage/ProductListByCategory';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/user/products' element={<ProductForUserList />} />
          <Route path='/user/products/:productId' element={<ProductDetails />} />
          <Route path='/user/products/category/:categoryId' element={<ProductListByCategory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
