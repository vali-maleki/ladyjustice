import React, { ReactNode } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SignupPromo from "./components/SignupPromo/SignupPromo";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Categories from "./components/Categories/Categories";
import TeamSection from "./components/TeamSection/TeamSection";
import Footer from "./components/Footer/Footer";
import ContactPage from "./components/ContactPage/ContactPage";
import FaqPage from "./components/FaqPage/FaqPage";
import PricingPage from "./components/PricingPage/PricingPage";
import SubscribePage from "./components/SubscribePage/SubscribePage"; 
import LoginPage from "./components/LoginPage/LoginPage";      
import Signup from "./components/signup/signup";
import Getstarted from "./components/Getstarted/Getstarted";    
import Dashboard from "./components/Dashboard";   // ✅ fixed import

function MainLanding() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProcessSection />
      <HowItWorks />
      <Categories />
      <SignupPromo />
      <TeamSection />
      <Footer />
    </>
  );
}

// ✅ Protected route wrapper
function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<MainLanding />} />

          <Route
            path="/contact"
            element={
              <>
                <Header />
                <ContactPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/faq"
            element={
              <>
                <Header />
                <FaqPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/pricing"
            element={
              <>
                <Header />
                <PricingPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/subscribe"
            element={
              <>
                <Header />
                <SubscribePage />
                <Footer />
              </>
            }
          />

          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/get-started"
            element={
              <>
                <Header />
                <Getstarted />
                <Footer />
              </>
            }
          />

          <Route
            path="/signup"
            element={
              <>
                <Header />
                <Signup />
                <Footer />
              </>
            }
          />

          {/* ✅ Protected Dashboard route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
