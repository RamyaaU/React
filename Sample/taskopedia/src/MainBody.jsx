import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

export default function MainBody() {
    const whatWillBeLearned = "React JS";
    const value = 3;
  
    return (
      <div style={{minHeight : "70vh"}}>
        <p>
          TaskOPedia - a project built using {whatWillBeLearned}
          <br />
          Total Topics - {value}
        </p>
        <ul>
          <li>Basic foundation of React</li>
          <li>Class and Components</li>
        </ul>
          <div className="container row">Students Enrolled</div>
          <Student fullName="Kris" progExp={2}>
          {/* including student review as child component */}
           <StudentReview/> 
          </Student>
          <Student fullName="Katie" progExp={5} >
          <StudentReview/>
          </Student>
          <Student fullName="Kiara" progExp={4}/>
      </div>
    );
  }
  