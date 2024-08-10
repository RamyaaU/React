import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './header';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Footer Component
function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}

// Rendering the components
root.render(
  <div>
    <Header />
    <Footer />
  </div>
);
