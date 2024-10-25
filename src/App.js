import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import ProductView from './ProductView';
import Forget from './Forget';

function App() {
    return (
        <Router>
             <Routes>
             <Route path="/" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/products" element={<ProductView/>} />
                <Route path="/forget" element={<Forget/>} />

             </Routes>
               
        </Router>
    );
}

export default App;
