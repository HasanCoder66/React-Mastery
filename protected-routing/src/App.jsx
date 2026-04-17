// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProtectedRoute from "./components/ProtectedRoute";
// import PublicRoute from "./components/PublicRoute";


// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               {" "}
//               <Home />{" "}
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <ProtectedRoute>
//               {" "}
//               <About />{" "}
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/services"
//           element={
//             <ProtectedRoute>
//               <Services />{" "}
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <ProtectedRoute>
//               {" "}
//               <Contact />{" "}
//             </ProtectedRoute>
//           }
//         />

//         {/* <Route path="/login" element={<Login /> } />
//         <Route path="/signup" element={<Signup />} /> */}

//         <Route path="/login" element={<PublicRoute><Login /> </PublicRoute>} />
//         <Route path="/signup" element={<PublicRoute><Signup /> </PublicRoute>} />
//       </Routes>

//       <Footer />
//     </>
//   );
// };

// export default App;





import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Routes>
        {/* Protected Layout */}

        <Route
          element={
            <ProtectedRoute>
              {" "}
              <MainLayout />{" "}
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Auth layout  */}
        <Route
          element={
            <PublicRoute>
              {" "}
              <AuthLayout />
            </PublicRoute>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
