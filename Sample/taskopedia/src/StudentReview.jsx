export default function StudentReview(props) {
  return (
    <div className="p-2">
      <div className="row border">
        <div className="col-2">
          <img src={props.headshot} className="w-100 py-2" alt="Student Headshot" />
        </div>
        <div className="col-10">
          {props.name}
          <br />
          Coding Experience {props.experience} years
        </div>
        <div className="col-2">
          {props.children}
        </div>
      </div>
    </div>
  );
}
