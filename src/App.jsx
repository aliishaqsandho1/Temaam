import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react"; 
import "./App.css";
import Header from "./components/global/header";
import Sidebar from "./components/global/sidebar";
import Footer from "./components/global/footer";
import MainContent from "./components/pages/main-content";
import Dashboard from "./components/pages/dashboard";
import Products from "./components/pages/products";
import Orders from "./components/pages/orders";
import Customers from "./components/pages/customers";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Router>
      <div className="flex flex-row">
        <div className={`flex-1 fixed h-screen overflow-y-auto bg-gray-100 z-11 ${collapsed ? 'w-[5%]' : 'w-[20%]'}`}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>  
        <div className={`flex flex-col justify-between ${collapsed ? 'w-[95.3%]' : 'w-[80%]'} fixed h-screen overflow-y-auto bg-gray-100 ${collapsed ? 'ml-[5%]' : 'ml-[20%]'}`}>
          <Header />
          <Routes>
            <Route path="/" element={<MainContent/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/products" element={<Products/>}/>
             <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
