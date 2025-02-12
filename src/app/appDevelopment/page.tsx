import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const AppDevelopment = () => {
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
              <a href="/About" className="nav-item nav-link ">
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
            <h1 className="display-4 text-white animated zoomIn">
              App Development
            </h1>
            <a href="/" className="h5 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2" />
            <a href="/appDevelopment" className="h5 text-white">
              App Development
            </a>
          </div>
        </div>
      </div>

      {/* Page Content Start */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="text-primary">
            Premier App Development Services in Pune
          </h1>
          <p className="text-secondary">
            Turn Your App Concepts into Reality
          </p>
        </div>

        <section className="mb-5">
          <h3 className="text-info">
            Why Partner with CobazTech for Your Mobile App Needs?
          </h3>
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">
                1. Proficient Development Team
              </strong>
              : Our developers are adept at utilizing cutting-edge technologies
              to build intuitive and feature-packed mobile apps. We prioritize
              seamless performance, intuitive user interfaces, and robust security
              measures.
            </li>
            <br />
            <li>
              <strong className="text-dark">
                2. Personalized Solutions for Diverse Enterprises
              </strong>
              : From startups to large corporations, we offer customized mobile
              applications that align with your specific business objectives. Our
              solutions are designed to be scalable and adaptable to your evolving
              requirements.
            </li>
            <br />
            <li>
              <strong className="text-dark">
                3. Advanced Technological Expertise
              </strong>
              : As a foremost app development company in Pune, we stay abreast of
              industry advancements. Our proficiency encompasses AI-driven
              applications, IoT integrations, and cloud-based solutions, ensuring
              exceptional digital experiences.
            </li>
            <br />
            <li>
              <strong className="text-dark">
                4. Comprehensive App Development Services
              </strong>
              : We provide a full spectrum of mobile app development services,
              including:
              <ul>
                <li>UI/UX Design</li>
                <li>Native and Cross-Platform App Development</li>
                <li>Application Testing and Quality Assurance</li>
                <li>Ongoing Maintenance and Support</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h3 className="text-info">Sectors We Cater To</h3>
          <p className="text-muted">
            We develop mobile applications across various sectors, such as:
          </p>
          <ul className="list-unstyled">
            <li><strong className="text-dark">E-commerce</strong> – Enhance online sales with comprehensive shopping apps.</li>
            <li><strong className="text-dark">Healthcare</strong> – Secure and compliant health solutions.</li>
            <li><strong className="text-dark">Education</strong> – Interactive e-learning and training platforms.</li>
            <li><strong className="text-dark">Real Estate</strong> – Virtual property tours and CRM integrations.</li>
            <li><strong className="text-dark">Finance</strong> – Secure and user-centric fintech applications.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h3 className="text-info">Our App Development Methodology</h3>
          <p className="text-muted">
            We follow a streamlined process to ensure the best outcomes for our clients:
          </p>
          <ol>
            <li><strong>Consultation & Strategy</strong> – We delve into your business requirements and formulate a strategy to develop a robust mobile application.</li>
            <li><strong>UI/UX Design</strong> – Our design team crafts engaging and user-friendly interfaces that are visually appealing.</li>
            <li><strong>Development & Integration</strong> – Employing the latest frameworks and tools, we develop applications with seamless functionality and integrate necessary third-party services.</li>
            <li><strong>Testing & Launch</strong> – Prior to launch, we perform thorough testing to ensure a flawless user experience, followed by efficient deployment on the App Store and Google Play.</li>
          </ol>
        </section>

        <section>
          <h3 className="text-info">Collaborate with Pune's Premier App Development Company</h3>
          <p className="text-muted">
            Seeking a dependable top company in Pune for mobile app development? CobazTech, situated in Pune, Kharadi, is your trusted partner in creating innovative and high-performance mobile applications. Let's transform your concept into a tangible solution today!
          </p>
          <p className="text-success">Get in Touch!</p>
          <p className="text-muted">📞 Phone: 9145730054 🌐 Website: <a href="https://www.cobaztech.com/" target="_blank" rel="noopener noreferrer">www.cobaztech.com</a></p>
          <p className="text-muted">Let's shape the future together with CobazTech!</p>
        </section>
      </div>
      {/* Page Content End */}

      {/* Footer Start */}
      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <p>© 2025 CobazTech. All rights reserved.</p>
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

export default AppDevelopment;
