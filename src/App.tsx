import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SignupPromo from "./components/SignupPromo";
import ProcessSection from "./components/ProcessSection";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import FaqPage from "./components/FaqPage";
import PricingPage from "./components/PricingPage";
import SubscribePage from "./components/SubscribePage"; // <-- Import Subscribe page

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
