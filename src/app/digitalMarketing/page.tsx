import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const DigitalMarketing = () => {
  return (
    <>
      {/* Favicon */}
      <link href="img/favicon.ico" rel="icon" />
      
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      {/* Icon Font Stylesheet */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      
      {/* Libraries Stylesheet */}
      <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      
      {/* Customized Bootstrap Stylesheet */}
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      
      {/* Template Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />

      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner" />
      </div>
      {/* Spinner End */}

      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1
              className="m-0"
              style={{ marginBottom: 0, display: "flex", alignItems: "center" }}
            >
              <img
                src="img/cobaztech.png"
                style={{
                  width: "50%",
                  maxWidth: "100%",
                  marginTop: "-20px",
                  height: 130,
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  marginTop: "-20px",
                  verticalAlign: "middle",
                }}
              >
                Cobaztech
              </span>
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link">
                Home
              </a>
              <a href="/About" className="nav-item nav-link">
                About
              </a>
              <a href="/Service" className="nav-item nav-link">
                Services
              </a>
              <a href="/Pages" className="nav-item nav-link">
                Pages
              </a>
            </div>
          </div>
          <a href="/Contact" className="nav-item nav-link">
            Contact
          </a>
        </nav>
      </div>
      {/* Navbar End */}

      {/* Page Header Section */}
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Digital Marketing</h1>
            <a href="/" className="h5 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2" />
            <a href="/digitalMarketing" className="h5 text-white">
              Digital Marketing
            </a>
          </div>
        </div>
      </div>

      {/* Page Content Start */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="text-primary">Best Digital Marketing Company in Pune – CobazTech</h1>
          <p className="text-secondary">
            Accelerate Your Business Growth with Cutting-Edge Digital Marketing Strategies
          </p>
        </div>
        
        <section className="mb-5">
          <h3 className="text-info">Why Choose CobazTech for Digital Marketing?</h3>
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">1. Customized Strategies for Maximum ROI:</strong> At CobazTech, we understand that every business is unique. That’s why we create tailored digital marketing plans that align with your brand’s goals. Whether you need higher search rankings, better social media engagement, or increased conversions, our strategies are designed to deliver measurable success.
            </li>
            <br></br>
            <li>
              <strong className="text-dark">2. Comprehensive Digital Marketing Services:</strong> As the best digital marketing company in Kharadi, we offer a complete range of digital marketing services to help businesses thrive in the competitive online space:
              <ul>
                <li>Search Engine Optimization (SEO) – Improve search engine rankings and attract organic traffic.</li>
                <li>Pay-Per-Click Advertising (PPC) – Get instant leads with targeted ad campaigns.</li>
                <li>Social Media Marketing (SMM) – Build a strong brand presence across platforms like Facebook, Instagram, and LinkedIn.</li>
                <li>Content Marketing – Engage and educate your audience with high-quality, SEO-optimized content.</li>
                <li>Website Development – Design and develop responsive, fast, and user-friendly websites.</li>
                <li>Email & Automation Marketing – Convert leads into customers with personalized email campaigns.</li>
              </ul>
            </li>
            <br></br>
            <li>
              <strong className="text-dark">3. Proven Expertise Across India:</strong> CobazTech has helped businesses across different industries achieve their marketing goals. That’s why we are recognized as the best digital marketing company in India, delivering innovative strategies that ensure long-term success.
            </li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-info">Grow Your Business with the Best Digital Marketing Company in Pune</h3>
          <p className="text-muted">
            Whether you are a startup, a small business, or an established enterprise, CobazTech provides the expertise and tools you need to succeed in the digital space. With a team of skilled marketers, creative strategists, and SEO specialists, we help brands gain visibility, drive engagement, and increase revenue.
          </p>
          <p className="text-success">
            Looking for the best digital marketing company in Kharadi, Pune, or anywhere in India? Partner with CobazTech today and take your business to new heights!
          </p>
        </section>
        
        <section>
          <p className="text-muted">📞 Phone: 9145730054</p>
          <p className="text-muted">🌐 Website: <a href="https://www.cobaztech.com/">www.cobaztech.com</a></p>
        </section>
      </div>
      {/* Page Content End */}

      {/* Footer Start */}
      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
        <p>
      <a href="https://www.cobaztech.com/" className="text-light" target="_blank" rel="noopener noreferrer">
        © 2025 CobazTech. All rights reserved.
      </a>
    </p>
        </div>
      </footer>
      {/* Footer End */}

      <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="lib/wow/wow.min.js"></Script>
      <Script src="lib/easing/easing.min.js"></Script>
      <Script src="lib/waypoints/waypoints.min.js"></Script>
      <Script src="lib/counterup/counterup.min.js"></Script>
      <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="js/main.js"></Script>
    </>
  );
};

export default DigitalMarketing;
