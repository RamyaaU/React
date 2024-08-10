  // Students Component
  export default function Students() {
    const fullName = "JD";
    const progExp = 2;
  
    return (
      <div className="container p-4">
        <div className="row">Students Enrolled</div>
        <div className="row border">
          <div className="col-1">
           <img src={`https://ui-avatars.com/api/?name=${fullName}`} alt="Student" className="w-10"></img>
          </div>
          <div className="col-10">
            {fullName} <br />
            Coding Experience {progExp} years
          </div>
        </div>
      </div>
    );
  }

  