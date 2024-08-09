import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   </React.StrictMode>
// );

// root.render(<div>Learn React</div>)

//component
function MainBody()
{
  return (
  <div>
    <p>TaskOPedia</p>
    <ul>
      <li>ABC</li>
      <li>DEF</li>
    </ul>
  </div>
)
}

//child comp1
function MainHeader()
{
  return(<h1 className = "heading1">React COurse</h1>)
}

//chile comp2 
function SubHeader()
{
  //call it using style element
  return(<p style={subHeaderStyle}>Learning react is exciting</p>)
}

//parent comp
function Header()
{
  return(
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
      </div>
  );
}

const subHeaderStyle = {
  color : "blueviolet",
  backgroundColor : "lightgray"
}

function Footer()
{
  //styling 1
  return(<p style={{color : "gray", backgroundColor : "black "}}>Happy Coding!</p>)
}

//rendering teh component
root.render(
  <div>
<Header />
<MainBody />
<Footer/>
</div>);