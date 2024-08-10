import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Header';
import Students from './Students';

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
    <Students />
    <Students />
    <Students />
    <Footer />
  </div>
);
