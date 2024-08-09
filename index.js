//Approach to render the elements
//Approach 1
// ReactDOM.render(<p>Hi Ramya</p>, document.getElementById("root"));

// ReactDOM.render(
//     <div>
//         <h1>React Course</h1>
//         <p>We will learn react!</p>
//     </div>,
//     document.getElementById("root")
// );


//Approach 2

//create the root elemeent where it has to be rendered
// const root = ReactDOM.createRoot(document.getElementById("root"));

//and what has to be rendered
root.render(
     <div>
         <h1>React Course</h1>
         <p>We will learn react!</p>
     </div>,
     document.getElementById("root")
)

