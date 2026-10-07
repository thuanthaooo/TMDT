import { useEffect, ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import Story from './pages/Story';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Gifts from './pages/Gifts';
import Workshop from './pages/Workshop';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout for pages other than Home
function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-kem flex flex-col">
      <Navbar />
      <main className="flex-1 pt-12 sm:pt-16 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/cau-chuyen" element={<PageLayout><Story /></PageLayout>} />
        <Route path="/bo-suu-tap" element={<PageLayout><Collection /></PageLayout>} />
        <Route path="/bo-suu-tap/:slug" element={<PageLayout><ProductDetail /></PageLayout>} />
        
        <Route path="/qua-tang" element={<PageLayout><Gifts /></PageLayout>} />
        <Route path="/workshop" element={<PageLayout><Workshop /></PageLayout>} />
        <Route path="/lien-he" element={<PageLayout><Contact /></PageLayout>} />
        
        <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
