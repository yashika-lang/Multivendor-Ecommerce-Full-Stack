import "../App.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">HunarHub</div>

        <div className="nav-links">
          <Link to="/services">Explore</Link>
          <Link to="/services">Categories</Link>
          <Link to="/freelancer/1">Become a Seller</Link>
        </div>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/register" className="join-btn">
            Join
          </Link>
        </div>
      </nav>
      <section className="hero-section">
  <div className="hero-left">
    <h1>
      Find the perfect <br />
      freelance services <br />
      for your business
    </h1>

    <p>
      Connect with top-rated freelancers and get your projects done
      on time, every time.
    </p>

    <div className="search-box">
      <input
        type="text"
        placeholder="What service are you looking for today?"
      />
      <button>Search</button>
    </div>

    <div className="categories">
      <span>Website Development</span>
      <span>UI/UX Design</span>
      <span>Video Editing</span>
      <span>Digital Marketing</span>
    </div>
  </div>

  <div className="hero-right">
    <img
      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900"
      alt="Freelancer"
      className="hero-image"
    />

    <div className="trust-card">
      <h3>10,000+</h3>
      <p>Businesses Trust HunarHub</p>
      <span>4.9/5 Rating</span>
    </div>
  </div>
</section>
    
<div className="popular-services">
  <h2>Popular Services</h2>

  <div className="services-grid">
    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600" alt="Web Development" />
      <h3>Web Development</h3>
      <p>Build modern MERN websites and web applications.</p>
    </div>

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600" alt="UI UX Design" />
      <h3>UI/UX Design</h3>
      <p>Create beautiful user experiences and interfaces.</p>
    </div>

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600" alt="Video Editing" />
      <h3>Video Editing</h3>
      <p>Professional editing for reels, YouTube and ads.</p>
    </div>

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" alt="Digital Marketing" />
      <h3>Digital Marketing</h3>
      <p>Grow your business through online marketing.</p>
    </div>
  </div>
</div>

<div className="top-freelancers">
  <h2>Top Freelancers</h2>

  <div className="freelancer-grid">
    <div className="freelancer-card">
      <img src="https://i.pravatar.cc/150?img=12" alt="Aarav" className="avatar" />
      <h3>Aarav Sharma</h3>
      <p>⭐ 4.9</p>
      <p>MERN Developer</p>
      <span>Starting at ₹999</span>
    </div>

    <div className="freelancer-card">
      <img src="https://i.pravatar.cc/150?img=32" alt="Ananya" className="avatar" />
      <h3>Ananya Verma</h3>
      <p>⭐ 4.8</p>
      <p>UI/UX Designer</p>
      <span>Starting at ₹799</span>
    </div>

    <div className="freelancer-card">
      <img src="https://i.pravatar.cc/150?img=15" alt="Rohan" className="avatar" />
      <h3>Rohan Mehta</h3>
      <p>⭐ 4.9</p>
      <p>Video Editor</p>
      <span>Starting at ₹699</span>
    </div>
  </div>
</div>

<div className="how-it-works">
  <h2>How HunarHub Works</h2>

  <div className="steps">
    <div className="step-card">
      <h3>Search Service</h3>
      <p>Find the service you need.</p>
    </div>

    <div className="step-card">
      <h3>Hire Freelancer</h3>
      <p>Choose the best freelancer.</p>
    </div>

    <div className="step-card">
      <h3>Get Work Delivered</h3>
      <p>Receive your completed project.</p>
    </div>
  </div>
</div>

<div className="testimonials">
  <h2>What Clients Say</h2>

  <div className="testimonial-grid">
    <div className="testimonial-card">
      <p>Excellent service and fast delivery. Highly recommended.</p>
      <h4>Priya Gupta</h4>
    </div>

    <div className="testimonial-card">
      <p>The freelancer understood my requirements perfectly.</p>
      <h4>Rahul Singh</h4>
    </div>

    <div className="testimonial-card">
      <p>Professional work quality and great communication.</p>
      <h4>Sneha Kapoor</h4>
    </div>
  </div>
</div>

<div className="why-choose-us">
  <h2>Make It All Happen With Freelancers</h2>

  <div className="why-grid">
    <div className="why-card">
      <h3>700+ Categories</h3>
      <p>Access skilled professionals across a wide range of services.</p>
    </div>

    <div className="why-card">
      <h3>Easy Matching</h3>
      <p>Find the right freelancer quickly and efficiently.</p>
    </div>

    <div className="why-card">
      <h3>Quality Work</h3>
      <p>Get reliable results delivered on time and within budget.</p>
    </div>

    <div className="why-card">
      <h3>Secure Payments</h3>
      <p>Pay only after reviewing and approving the work.</p>
    </div>
  </div>
</div>

<div className="cta-section">
  <div className="cta-content">
    <h2>Freelance Services At Your Fingertips</h2>
    <p>Discover talented freelancers for every project and business need.</p>
    <Link to="/login">
      <button className="cta-btn">Get Started</button>
    </Link>
  </div>
</div>

<footer className="footer">
  <div>
    <h3>HunarHub</h3>
    <p>Connecting talent with opportunity.</p>
  </div>

  <div>
    <h4>Quick Links</h4>
    <p>Explore</p>
    <p>Categories</p>
    <p>Become a Seller</p>
  </div>

  <div>
    <h4>Support</h4>
    <p>Help Center</p>
    <p>Contact Us</p>
    <p>Privacy Policy</p>
  </div>
</footer>
      </div>
  );
}

export default Home;