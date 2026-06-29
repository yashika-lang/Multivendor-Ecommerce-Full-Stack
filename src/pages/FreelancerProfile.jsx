import { useParams } from "react-router-dom";

function FreelancerProfile() {
  const { id } = useParams();

  return (
    <div style={{padding:"50px"}}>
      <h1>Freelancer ID: {id}</h1>
    </div>
  );
}

export default FreelancerProfile;