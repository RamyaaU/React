import logo from '../images/reactimg.png';

  // MainHeader Component
  function MainHeader() {
    return (
      <div className="pt-2 py-1 pl-2" style={{backgroundColor : "black"}}>
        <img src={logo} alt="LOGO" style={{ height : "35px", verticalAlign : "top"}}></img>
        <span className="h2 pt-4 text-white-50">React Course - TaskOPedia</span>
        React Course - TaskOPedia
      </div>
    )
  }
  
  // SubHeader Component
  function SubHeader() {
    return <p style={subHeaderStyle} className='text-center'>Learning React is exciting</p>;
  }
  
  // Header Component (Parent)
  export default function Header() {
    return (
      <div>
        <MainHeader />
        <SubHeader />
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