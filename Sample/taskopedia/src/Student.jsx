import { faker } from '@faker-js/faker';

 // Students Component
  export default function Student(props) {
    // const fullName = "JD";
    // const progExp = 2;
  
    return (
      <div className="container p-4">
        
        <div className="row border">
        <div className="col-1">
        <img src={`https://ui-avatars.com/api/?name=${faker.name.firstName()}&background=random`} alt="Student" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        </div>
          <div className="col-10">
            {props.fullName} <br />
            Coding Experience {props.progExp} years
          </div>
        </div>
      </div>
    );
  }

  