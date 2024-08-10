import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Header';
import Student from './Student';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Footer Component
function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
  );
}

// Rendering the components
root.render(
  <div className="container">
    <Header />
    <div className="row">Students Enrolled</div>
    <Student fullName="Kris" progExp={2}/>
    <Student fullName="Katie" progExp={5} />
    <Student  fullName="Kiara" progExp={4}/>
    <Footer />
  </div>
);
