import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {deleteCampus} = props;

  if (!props.allCampuses.length) {
    return (
    <div>
      <p>There are no campuses.</p>
      <Link to={`newcampus`}>
        <button>Add New Campus</button>
      </Link>
    </div>
    );
  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img width="15%" height="15%" alt= "all-campus" src={campus.imageURL}/>
          <p>{campus.description}</p>
          <button onClick={() => deleteCampus(campus.id)}>X - Delete</button>
          <br/>
          
          <Link to={`/campus/${campus.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br></br>
      <Link to={`/`}>Home</Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;