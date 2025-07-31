import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  return (
    <Router>
      <div className="flex flex-row">
        <div className="flex-1 fixed h-screen overflow-y-auto bg-gray-100 w-[20%] z-1">
          <Sidebar />
        </div>
        <div className="flex flex-col justify-between w-[80%] fixed h-screen overflow-y-auto ml-[20%]">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
        
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
