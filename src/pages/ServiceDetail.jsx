import { useParams, Link } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams();

  const serviceData = {
    1: "Website Development",
    2: "UI/UX Design",
    3: "Video Editing",
    4: "Digital Marketing",
  };

  const gigs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      seller: "Aarav Sharma",
      title: "I will build a modern MERN website",
      price: "₹999",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      seller: "Ananya Verma",
      title: "I will design a modern responsive website",
      price: "₹1499",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      seller: "Rohan Mehta",
      title: "I will create a business website UI",
      price: "₹799",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
      seller: "Neha Singh",
      title: "I will redesign your website professionally",
      price: "₹1999",
    },
  ];

  return (
    <div className="service-detail-page">
      <header className="marketplace-header">
        <div className="marketplace-logo">HunarHub</div>

        <div className="marketplace-search">
          <input
            type="text"
            placeholder="What service are you looking for today?"
          />
          <button>Search</button>
        </div>

        <div className="marketplace-nav">
          <span>Explore</span>
          <span>Become a Seller</span>
        </div>
      </header>

      <section className="service-hero">
        <h1>{serviceData[id] || "Service"}</h1>
        <p>Create, build, and develop your project with skilled freelancers.</p>
      </section>

      <section className="service-filters">
        <button>Service Options</button>
        <button>Seller Details</button>
        <button>Budget</button>
        <button>Delivery Time</button>
      </section>

      <section className="gig-grid">
        {gigs.map((gig) => (
          <Link
            key={gig.id}
            to={`/service/${id}/gig/${gig.id}`}
            className="service-link"
          >
            <div className="gig-card">
              <img src={gig.image} alt={gig.title} />

              <div className="gig-content">
                <h4>{gig.seller}</h4>
                <p>{gig.title}</p>
                <span>{gig.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

// Fiverr-style service marketplace layout
export default ServiceDetail;