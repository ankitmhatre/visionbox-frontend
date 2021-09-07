import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './anim.css'
const LayoutDefault = ({ children }) => (
  <>
  <div className="lines">
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>  
  <div className="line"></div>  
  </div>

    <Header navPosition="right" className="reveal-from-bottom" />

    <main className="site-content">
      {children}
    </main>
    <Footer />
    
  </>
);

export default LayoutDefault;  