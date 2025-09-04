import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route
            path="/login"
            element={
              <>
                <Header />
                <LoginPage />
                <Footer />
              </>
            }
          />
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
