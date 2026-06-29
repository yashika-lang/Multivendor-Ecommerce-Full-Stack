import "../App.css";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      desc: "Modern MERN websites and web applications",
      price: "₹999",
    },
    {
      id: 2,
      title: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600",
      desc: "Beautiful and user-friendly designs",
      price: "₹799",
    },
    {
      id: 3,
      title: "Video Editing",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600",
      desc: "Professional editing for social media",
      price: "₹699",
    },
    {
      id: 4,
      title: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      desc: "Grow your business online",
      price: "₹899",
    },
    {
      id: 5,
      title: "App Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      desc: "Android and iOS applications",
      price: "₹1199",
    },
    {
      id: 6,
      title: "Content Writing",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600",
      desc: "SEO friendly content writing",
      price: "₹499",
    },
  ];

  return (
    <div className="services-page">

      <header className="services-header">
        <div className="header-logo">
          HunarHub
        </div>

        <div className="header-search">
          <input
            type="text"
            placeholder="What service are you looking for today?"
          />

          <button>Search</button>
        </div>

        <div className="header-links">
          <span>Explore</span>
          <span>Become a Seller</span>
        </div>
      </header>

      <div className="service-navbar">
        <span>All Services</span>
        <span>Web Development</span>
        <span>UI/UX Design</span>
        <span>Video Editing</span>
        <span>Digital Marketing</span>
        <span>App Development</span>
        <span>Content Writing</span>
      </div>

      <section className="services-banner">
        <div className="banner-left">
          <h1>All Services</h1>

          <p>
            Discover talented freelancers and find the perfect
            service for your project.
          </p>

          <button>
            Explore Services
          </button>
        </div>

        <div className="banner-right">
          <div className="hero-card">
            <h3>AI Video Editing</h3>
            <p>Top Rated Freelancer</p>
          </div>

          <div className="hero-card">
            <h3>Website Development</h3>
            <p>50+ Projects Delivered</p>
          </div>

          <div className="hero-card">
            <h3>UI/UX Expert</h3>
            <p>4.9 ★ Rating</p>
          </div>
        </div>
      </section>

      <div className="services-grid">
  {services.map((service) => (
    <Link
      to={`/service/${service.id}`}  // This will navigate to the ServiceDetail page with the service ID
      className="service-link"
      key={service.id} // Adding a unique key for each service item
    >
      <div className="service-card">
        <img src={service.image} alt={service.title} />

        <div className="service-content">
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
          <span>{service.price}</span>
        </div>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
}

export default Services;