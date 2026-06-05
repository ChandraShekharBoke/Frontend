import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Services from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import Benefits from './pages/Benefits.jsx';
import ProductPriceList from './pages/ProductPriceList.jsx';

// Admin
// import Login from './Admin/AdminLogin.jsx';
// import Products from './Admin/AdminProduct.jsx';
// import Dashboard from './Admin/Dashboard.jsx';
// import Contacts from './Admin/Contacts.jsx';

import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>

          {/* <Route path='/Admin' element={<Login/>}/>
          <Route path='/AdminProduct' element={<Products/>}/>
          <Route path='/AdminDashboard' element={<Dashboard/>}/>
          <Route path='/AdminContacts' element={<Contacts/>}/> */}

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/priceList'element={<ProductPriceList/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Navbar from './components/Navbar.jsx';
// import Footer from './components/Footer.jsx';

// import Home from './pages/Home.jsx';
// import Product from './pages/Product.jsx';
// import ProductDetail from './pages/ProductDetail.jsx';
// import Services from './pages/Service.jsx';
// import Contact from './pages/Contact.jsx';
// import Benefits from './pages/Benefits.jsx';
// import ProductPriceList from './pages/ProductPriceList.jsx';

// // ✅ Admin
// import Login from './Admin/AdminLogin.jsx';
// import Products from './Admin/AdminProduct.jsx';
// import Dashboard from './Admin/Dashboard.jsx';
// import Contacts from './Admin/Contacts.jsx';
// import AdminNavbar from './Admin/AdminNavbar.jsx';

// import './App.css';


// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [pathname]);

//   return null;
// };


// // ✅ Protected Route
// const ProtectedRoute = ({ children }) => {
//   const isLoggedIn = localStorage.getItem("adminLoggedIn");

//   return isLoggedIn === "true"
//     ? children
//     : <Navigate to="/Admin" />;
// };


// const AppContent = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith("/Admin");

//   return (
//     <>
//       <ScrollToTop />

//       {/* ✅ Show Website Navbar only on public pages */}
//       {!isAdminRoute && <Navbar />}

//       {/* ✅ Show Admin Navbar only on admin pages (except login) */}
//       {isAdminRoute && location.pathname !== "/Admin" && <AdminNavbar />}

//       <main className="main-content">
//         <Routes>

//           {/* ✅ Admin Login */}
//           <Route path="/Admin" element={<Login />} />

//           {/* ✅ Protected Admin Pages */}
//           <Route
//             path="/AdminDashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/AdminProduct"
//             element={
//               <ProtectedRoute>
//                 <Products />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/AdminContacts"
//             element={
//               <ProtectedRoute>
//                 <Contacts />
//               </ProtectedRoute>
//             }
//           />

//           {/* ✅ Public Website Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Product />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/benefits" element={<Benefits />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/priceList" element={<ProductPriceList />} />

//         </Routes>
//       </main>

//       {/* ✅ Hide Footer on Admin pages */}
//       {!isAdminRoute && <Footer />}
//     </>
//   );
// };


// const App = () => {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// };

// export default App;