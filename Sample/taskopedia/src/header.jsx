
// MainBody Component
function MainBody() {
    const whatWillBeLearned = "React JS";
    const value = 3;
  
    return (
      <div>
        <p>
          TaskOPedia - a project built using {whatWillBeLearned}
          <br />
          Total Topics - {value}
        </p>
        <ul>
          <li>Basic foundation of React</li>
          <li>Class and Components</li>
        </ul>
      </div>
    );
  }
  

  // MainHeader Component
  function MainHeader() {
    return <h1 className="heading1">React Course</h1>;
  }
  
  // SubHeader Component
  function SubHeader() {
    return <p style={subHeaderStyle}>Learning React is exciting</p>;
  }
  
  // Header Component (Parent)
  export default function Header() {
    return (
      <div>
        <MainHeader />
        <SubHeader />
        <MainBody /> 
        {/* <Students /> 
        <Students /> 
        <Students /> 
        <Students />  */}
      </div>
    );
  }
  
  const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
  };
  
// one way of exporting 
//   export default Header;