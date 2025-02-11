import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import Meta from "@/app/MetaPixel"

const Contact = () => {
  return (
    <>
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
  {/* Topbar Start */}
  <div className="container-fluid bg-dark px-5 d-none d-lg-block">
    <div className="row gx-0">
      <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <small className="me-3 text-light">
            <i className="fa fa-map-marker-alt me-2" />
            Downtown Road, Pune
          </small>
          <small className="me-3 text-light">
            <i className="fa fa-phone-alt me-2" />
            (+91) 9145730054
          </small>
          <small className="text-light">
            <i className="fa fa-envelope-open me-2" />
            info@cobaztech.com
          </small>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href="/"
          >
            <i className="fab fa-twitter fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href="/"
          >
            <i className="fab fa-facebook-f fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href="/"
          >
            <i className="fab fa-linkedin-in fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href="/"
          >
            <i className="fab fa-instagram fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
            href="/"
          >
            <i className="fab fa-youtube fw-normal" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
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
              height: 130
            }}
          />
          <span
            style={{
              display: "inline-block",
              marginTop: "-20px",
              verticalAlign: "middle"
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
        <a href="/Contact" className="nav-item nav-link active">
          Contact
        </a>
      </div>
    </nav>
  </div>
  <div
    className="container-fluid bg-primary py-5 bg-header"
    style={{ marginBottom: 90 }}
  >
    <div className="row py-5">
      <div className="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-4 text-white animated zoomIn">Contact Us</h1>
        <a href="/" className="h5 text-white">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a href="/Contact" className="h5 text-white">
          Contact
        </a>
      </div>
    </div>
  </div>
  {/* Navbar End */}
  {/* Full Screen Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1}>
    <div className="modal-dialog modal-fullscreen">
      <div
        className="modal-content"
        style={{ background: "rgba(9, 30, 62, .7)" }}
      >
        <div className="modal-header border-0">
          <button
            type="button"
            className="btn bg-white btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: 600 }}>
            <input
              type="text"
              className="form-control bg-transparent border-primary p-3"
              placeholder="Type search keyword"
            />
            <button className="btn btn-primary px-4">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Full Screen Search End */}
  {/* Contact Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
        <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">(+91) 9145730054</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.4s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-envelope-open text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Email to get free quote</h5>
              <h4 className="text-primary mb-0">info@cobaztech.com</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.8s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-map-marker-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Visit our office</h5>
              <h4 className="text-primary mb-0">Downtown Road, Pune</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Name"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Email"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Subject"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0 bg-light px-4 py-3"
                  rows={4}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785152.4145618537!2d73.78394831404288!3d18.52043029725008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c85e8f8f8d7f%3A0x2cddf7c9e6d9b34!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1603794972920!5m2!1sen!2sin"
            frameBorder={0}
            style={{ minHeight: 350, border: 0 }}
            // allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Vendor Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 mb-5">
      <div className="bg-white">
        <div className="owl-carousel vendor-carousel">
          <img src="img/vendor-1.jpg" alt="" />
          <img src="img/vendor-2.jpg" alt="" />
          <img src="img/vendor-3.jpg" alt="" />
          <img src="img/vendor-4.jpg" alt="" />
          <img src="img/vendor-5.jpg" alt="" />
          <img src="img/vendor-6.jpg" alt="" />
          <img src="img/vendor-7.jpg" alt="" />
          <img src="img/vendor-8.jpg" alt="" />
          <img src="img/vendor-9.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* Vendor End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-4 col-md-6 footer-about">
          <div className="d-flex flex-column align-items-center justify-content-center text-left h-90 bg-black p-4">
            <a href="/" className="navbar-brand">
              <h1 className="m-0 text-white">
                <img
                  src="img/cobaztech.png"
                  style={{ width: "30%", maxWidth: "100%", marginTop: "-20px" }}
                />
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "-20px",
                    verticalAlign: "middle"
                  }}
                >
                  Cobaztech
                </span>
              </h1>
            </a>
            <p className="mt-3 mb-4">
              Cobaztech is a results-driven digital marketing agency that helps
              businesses grow through tailored SEO, PPC, and social media
              strategies. We focus on delivering measurable success by driving
              targeted traffic and boosting brand visibility.
            </p>
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-white p-3"
                  placeholder="Your Email"
                />
                <button className="btn btn-dark">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-12 pt-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Get In Touch</h3>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-geo-alt text-primary me-2" />
                <p className="mb-0">Downtown Road, Pune</p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-envelope-open text-primary me-2" />
                <p className="mb-0">info@cobaztech.com</p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-telephone text-primary me-2" />
                <p className="mb-0">(+91) 9145730054</p>
              </div>
              <div className="d-flex mt-4">
                <a className="btn btn-primary btn-square me-2" href="/">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-primary btn-square me-2" href="/">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-primary btn-square me-2" href="/">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-primary btn-square" href="/">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Our Clients</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <a
                  className="text-light mb-2"
                  href="https://aimcabbooking.com/"
                >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Aimcab
                </a>
                <a className="text-light mb-2" href="https://worldtriplink.com">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  World Trip Link
                </a>
                <a
                  className="text-light mb-2"
                  href="https://www.ajcabservices.com/"
                >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  AJ Cab Services
                </a>
                <a
                  className="text-light mb-2"
                  href="https://parmeshwarcabservices.com/"
                >
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Parmeshwar Cab Service
                </a>
                <a className="text-light mb-2" href="https://shivgarjana.com/">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Shivgarjana Cabs
                </a>
                <a className="text-light mb-2" href="https://accabservice.com/">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  AC Cab Service
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Popular Links</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="/">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Home
                </a>
                <a className="text-light mb-2" href="/About">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  About Us
                </a>
                <a className="text-light mb-2" href="/Service">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Our Services
                </a>
                <a className="text-light mb-2" href="/">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Meet The Team
                </a>
                <a className="text-light mb-2" href="/">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Latest Blog
                </a>
                <a className="text-light" href="/Contact">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid text-white" style={{ background: "#061429" }}>
    <div className="container text-center">
      <div className="row justify-content-end">
        <div className="col-lg-8 col-md-6">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: 75 }}
          >
            <p className="mb-0">
              ©{" "}
              <a className="text-white border-bottom" href="/">
                Cobaztech
              </a>
              . All Rights Reserved.
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed by{" "}
              <a
                className="text-white border-bottom"
                href="/"
              >
                Cobaztech
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a
    href="/Contact"
    className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>

  <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
    <Script src="lib/wow/wow.min.js"></Script>
    <Script src="lib/easing/easing.min.js"></Script>
    <Script src="lib/waypoints/waypoints.min.js"></Script>
    <Script src="lib/counterup/counterup.min.js"></Script>
    <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
    <Script src="js/main.js"></Script>

</>

  )
}
export default Contact;