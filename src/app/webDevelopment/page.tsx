import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const WebDevelopment = () => {
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
            <h1 className="display-4 text-white animated zoomIn">Web Development</h1>
            <a href="/" className="h5 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2" />
            <a href="/webDevelopment" className="h5 text-white">
              Web Development
            </a>
          </div>
        </div>
      </div>

      {/* Page Content Start */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="text-primary">Best Website Development Company in Pune – CobazTech</h1>
          <p className="text-secondary">Build a Powerful Online Presence with Expert Website Development</p>
        </div>
        
        <section className="mb-5">
          <h3 className="text-info">Why Choose CobazTech for Website Development?</h3>
          <ul className="list-unstyled">
            <li><strong className="text-dark">1. Customized Website Solutions for Every Business:</strong> At CobazTech, we understand that every business has unique needs. Our team works closely with you to develop solutions that align with your goals and vision. From responsive designs to seamless user experiences, we ensure that your website stands out. With our expertise, your online presence will not only reflect your brand’s identity but also drive tangible results and growth.</li>
            <br></br>
            <li><strong className="text-dark">2. Comprehensive Website Development Services:</strong> As the best website development company in India, we offer end-to-end website development services, ensuring that every aspect of your online presence is optimized. From custom designs to robust backend solutions, we deliver websites that are both functional and aesthetically pleasing. Our team uses the latest technologies and trends to create dynamic, user-friendly platforms. Whether it’s an e-commerce site or a corporate website, we focus on driving results that matter to your business.</li>
            <br></br>
            <li><strong className="text-dark">3. Expertise in SEO & Digital Marketing:</strong> Having a great website isn’t enough—it also needs to rank well on search engines to attract the right audience. At CobazTech, we integrate advanced SEO techniques into every project, ensuring that your website is optimized for better visibility. From keyword research to on-page SEO, our strategies are designed to increase organic traffic and improve search engine rankings. We focus on delivering results that bring your business to the forefront of search engines, driving more qualified leads.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-info">Grow Your Business with the Best Website Development Company in Pune</h3>
          <p className="text-muted">Your website is the first impression customers have of your brand—make it count with CobazTech. Whether you need a business website, an e-commerce store, or a custom web application, we build innovative, user-friendly, and SEO-optimized websites that deliver results.</p>
          <p className="text-success">Looking for the best website development company in Pune, Kharadi, or anywhere in India? Contact CobazTech today and create a website that drives success!</p>
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

export default WebDevelopment;
