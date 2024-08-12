import { faker } from '@faker-js/faker';

// Students Component
export default function Student(props) {
  return (
    <div className="container p-4">
      <div className="row align-items-center border">
        <div className="col-1">
          <img
            src={`https://ui-avatars.com/api/?name=${faker.name.firstName()}&background=random`}
            alt="Student"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-9">
          {props.fullName} <br />
          Coding Experience {props.progExp} years
        </div>
        <div className="col-2 d-flex justify-content-end">
        {/* StudentReview component will be passed as props.children to the Student component */}
          {props.children}
        </div>
      </div>
    </div>
  );
}


  