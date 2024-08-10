import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Header';
import Student from './Student';
import Footer  from './footer';
import MainBody from './MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the components
root.render(
  <div style={{backgroundColor : "black", color : "grey"}}>
    <Header />
    <MainBody /> 
    <div className="container row">Students Enrolled</div>
    <Student fullName="Kris" progExp={2}/>
    <Student fullName="Katie" progExp={5} />
    <Student fullName="Kiara" progExp={4}/>
    <Footer />
  </div>
);
