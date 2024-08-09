import React from 'react';
import ReactDOM from 'react-dom/client';

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
  return(<p>React COurse</p>)
}

//chile comp2 
function SubHeader()
{
  return(<p>Learning react is exciting</p>)
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

function Footer()
{
  return(<p>Happy Coding!</p>)
}

//rendering teh component
root.render(
  <div>
<Header />
<MainBody />
<Footer/>
</div>);