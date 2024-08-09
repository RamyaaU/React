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

//rendering teh component
root.render(<MainBody />);