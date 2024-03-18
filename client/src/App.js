import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Component/Head/Header";
import axios from "axios";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import Home from "./Component/Home";
import ActiveListing from "./Component/ActiveListing";
import ActiveListing1 from "./Component/ActiveListing1";
import CreateListing from "./Component/CreateListing";
import Signup from "./Component/Signup";
import Cookies from "js-cookie";
import Logout from "./Logout";
import ProductDetails from "./Component/ProductDetails";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = Cookies.get('isAuthenticated');
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:4000/activelistings");
      setProducts(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    Cookies.set('isAuthenticated', true, { expires: 7 }); // Store authentication state in cookies for 7 days
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    Cookies.remove('isAuthenticated');
  };

  const insertToDB = async (product) => {
    try {
      const res = await axios.post("http://127.0.0.1:4000/createlisting", product);
      console.log(res.data);
      getProducts();
    } catch (error) {
      console.error("Error inserting product:", error);
    }
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route exact path='/' element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <Profile user={user} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route exact path='/createlist' element={<CreateListing createListing={insertToDB} />} />
        <Route exact path='/activelist' element={<ActiveListing prod={products} />} />
        <Route exact path='/activelist1' element={<ActiveListing1 prod={products} />} />
        <Route exact path='/product/:id' element={<ProductDetails />} /> {/* New route for ProductDetails */}
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
