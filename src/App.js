import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';

import Header from './Component/Header';
import Footer from './Component/Footer';
import LoadingSpinner from './Component/ui/LoadingSpinner';

/* ================= LAZY IMPORTS ================= */

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const GetQuote = lazy(() => import('./Pages/GetQuote'));
const WhyChoose = lazy(() => import('./Pages/WhyChoose'));
const ServiceCompare = lazy(() => import('./Pages/ServiceCompare'));
const Testimonials = lazy(() => import('./Pages/Testimonials'));
const TermsAndConditions = lazy(() => import('./Pages/TermsAndConditions'));
const FAQ = lazy(() => import('./Pages/FAQ'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const Pricing = lazy(() => import('./Pages/Pricing'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'));

/* ================= APP ================= */

function App() {
  return (
    <div className="App">

      <Header />

      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center bg-white">
            <LoadingSpinner size="lg" />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/get-quote' element={<GetQuote />} />
          <Route path='/why-choose' element={<WhyChoose />} />
          <Route path='/service-compare' element={<ServiceCompare />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Suspense>

      <Footer />

    </div>
  );
}

export default App;