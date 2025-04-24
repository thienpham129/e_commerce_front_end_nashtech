import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductForUserList from './components/layout/productUserPage/ProductForUserList';
import ProductDetails from './components/layout/productUserPage/ProductDetails';
import SignUp from './components/auth/SignUp/SignUp';
import Login from './components/auth/Login/Login';
import { AdminRoute } from './axios/ProtectedRoute';
import DashBoard from './components/admin/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/user/products' element={<ProductForUserList />} />
          <Route path='/user/products/:productId' element={<ProductDetails />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<Login />} />
          <Route element={<AdminRoute />}>
            <Route path='/admin/dashboard' element={<DashBoard />} />
          </Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
