import { useParams } from "react-router-dom";

function GigDetail() {
  const { serviceId, gigId } = useParams();

  return (
    <div style={{ padding: "50px" }}>
      <h1>Gig Detail Page</h1>

      <h2>Service ID: {serviceId}</h2>

      <h2>Gig ID: {gigId}</h2>
    </div>
  );
}

export default GigDetail;