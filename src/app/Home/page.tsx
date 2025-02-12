import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

const Home = () => {
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
  {/* Navbar & Carousel Start */}
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
          <a href="/" className="nav-item nav-link active">
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
        <a href="/Contact" className="nav-item nav-link">
          Contact
        </a>
      </div>
    </nav>
  </div>
  <div
    id="header-carousel"
    className="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: 900 }}>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">
              Creative &amp; Innovative
            </h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
              Creative &amp; Innovative Digital Solution
            </h1>
            <a
              href="/Contact"
              className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
            >
              Enquiry
            </a>
            <a
              href="/Contact"
              className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: 900 }}>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">
              Creative &amp; Innovative
            </h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
              Creative &amp; Innovative Digital Solution
            </h1>
            <a
              href="/Contact"
              className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
            >
              Enquiry
            </a>
            <a
              href="/Contact"
              className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#header-carousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#header-carousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Navbar & Carousel End */}
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
  {/* Facts Start */}
  <div className="container-fluid facts py-5 pt-lg-0">
    <div className="container py-5 pt-lg-0">
      <div className="row gx-0">
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
          <div
            className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
            style={{ height: 150 }}
          >
            <div
              className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-users text-primary" />
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Happy Clients</h5>
              <h1 className="text-white mb-0" data-toggle="counter-up">
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
          <div
            className="bg-light shadow d-flex align-items-center justify-content-center p-4"
            style={{ height: 150 }}
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-check text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-primary mb-0">Projects Done</h5>
              <h1 className="mb-0" data-toggle="counter-up">
                12345
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div
            className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
            style={{ height: 150 }}
          >
            <div
              className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-award text-primary" />
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Win Awards</h5>
              <h1 className="text-white mb-0" data-toggle="counter-up">
                12345
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts Start */}
  {/* About Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
            <h1 className="mb-0">
              The Best IT Solution With 10 Years of Experience
            </h1>
          </div>
          <p className="mb-4">
            Cobaztech is a results-driven digital marketing agency that helps
            businesses grow through tailored SEO, PPC, and social media
            strategies. We focus on delivering measurable success by driving
            targeted traffic and boosting brand visibility.
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                Award Winning
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                Professional Staff
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                24/7 Support
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                Fair Prices
              </h5>
            </div>
          </div>
          <div
            className="d-flex align-items-center mb-4 wow fadeIn"
            data-wow-delay="0.6s"
          >
            <a
              href="tel:+919145730054"
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </a>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">(+91) 9145730054</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src="img/about.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Features Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
        <h1 className="mb-0">
          We Are Here to Grow Your Business Exponentially
        </h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
              <div
                className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-cubes text-white" />
              </div>
              <h4>Best In Industry</h4>
              <p className="mb-0">
                Setting the standard for excellence and innovation in the
                industry.
              </p>
            </div>
            <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
              <div
                className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-award text-white" />
              </div>
              <h4>Award Winning</h4>
              <p className="mb-0">
                Recognized for outstanding achievement and excellence in our
                field.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4  wow zoomIn"
          data-wow-delay="0.9s"
          style={{ minHeight: 350 }}
        >
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded wow zoomIn"
              data-wow-delay="0.1s"
              src="img/feature.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
              <div
                className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-users-cog text-white" />
              </div>
              <h4>Professional Staff</h4>
              <p className="mb-0">
                Dedicated experts committed to delivering exceptional service
                and results.
              </p>
            </div>
            <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
              <div
                className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: 60, height: 60 }}
              >
                <i className="fa fa-phone-alt text-white" />
              </div>
              <h4>24/7 Support</h4>
              <p className="mb-0">
                Always here for you, providing reliable support anytime, day or
                night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features Start */}
  {/* Service Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
        <h1 className="mb-0">
          Custom IT Solutions for Your Successful Business
        </h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa fa-search text-white" />
            </div>
            <a href="/webDevelopment" className="card-link">
  <h4 className="mb-3">Web Development</h4>
  <p className="m-0">
    Transforming ideas into responsive, user-friendly websites that
    drive success. Expertly crafted solutions tailored to meet your
    business needs and goals
  </p>
</a>

          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fab fa-android text-white" />
            </div>
            <a href="/appDevelopment" className="card-link">
  <h4 className="mb-3">App Development</h4>
  <p className="m-0">
    Creating intuitive and high-performance apps that enhance user
    experiences. Custom-built solutions designed to meet your unique
    business needs and objectives.
  </p>
</a>

          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa fa-code text-white" />
            </div>
            <a href="/digitalMarketing" className="card-link">
            <h4 className="mb-3">Digital Marketing</h4>
            <p className="m-0">
              Driving growth through data-driven strategies and targeted digital
              campaigns. Boosting your brand’s online presence and engagement to
              reach the right audience.
            </p>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa fa-chart-pie text-white" />
            </div>
            <h4 className="mb-3">Lead Generation</h4>
            <p className="m-0">
              Empowering your business with high-quality leads that convert into
              lasting relationships. Strategic campaigns designed to attract,
              engage, and nurture your ideal prospects.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa fa-shield-alt text-white" />
            </div>
            <h4 className="mb-3">PPC Marketing</h4>
            <p className="m-0">
              Maximize your ROI with targeted pay-per-click campaigns that
              deliver results. Drive qualified traffic and boost conversions
              through data-driven PPC strategies.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
            <h3 className="text-white mb-3">Call Us For Quote</h3>
            <p className="text-white mb-3">
              Get a personalized quote tailored to your needs—fast and
              hassle-free. Contact us today to discover how we can help you
              achieve your goals!
            </p>
            <h2 className="text-white mb-0">(+91) 9145730054</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Quote Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase">
              Submit Enquiry
            </h5>
            <h1 className="mb-0">
              Need A Free Quote? Please Feel Free to Contact Us
            </h1>
          </div>
          <div className="row gx-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-4">
                <i className="fa fa-reply text-primary me-3" />
                Reply within 24 hours
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-4">
                <i className="fa fa-phone-alt text-primary me-3" />
                24 hrs telephone support
              </h5>
            </div>
          </div>
          <p className="mb-4">
            Looking for a customized solution? We're here to help! Reach out
            today for a free, no-obligation quote tailored to your needs. Our
            team is ready to assist you every step of the way—contact us now!
          </p>
          <div
            className="d-flex align-items-center mb-4 wow fadeIn"
            data-wow-delay="0.6s"
          >
            <a
              href="tel:+919145730054"
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </a>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">(+91) 9145730054</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div
            className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn"
            data-wow-delay="0.9s"
          >
            <form>
              <div className="row g-3">
                <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control bg-light border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <select
                    className="form-select bg-light border-0"
                    style={{ height: 55 }}
                  >
                    {/* <option selected="">Select A Service</option> */}
                    <option value={1}>Service 1</option>
                    <option value={2}>Service 2</option>
                    <option value={3}>Service 3</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-light border-0"
                    rows={3}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-dark w-100 py-3" type="submit">
                    Submit Enquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-4 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
        <h1 className="mb-0">
          What Our Clients Say About Our Digital Services
        </h1>
      </div>
      <div
        className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.6s"
      >
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img
              className="img-fluid rounded"
              src="img/testimonial-1.jpg"
              style={{ width: 60, height: 60 }}
            />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Nancy Drew</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Exceptional service and quick turnaround—highly recommend!
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img
              className="img-fluid rounded"
              src="img/testimonial-2.jpg"
              style={{ width: 60, height: 60 }}
            />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Anne Tanwar</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            The team delivered exactly what we needed, exceeding expectations!
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img
              className="img-fluid rounded"
              src="img/testimonial-3.jpg"
              style={{ width: 60, height: 60 }}
            />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Jack Robert</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Outstanding experience with top-notch professionalism.
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img
              className="img-fluid rounded"
              src="img/testimonial-4.jpg"
              style={{ width: 60, height: 60 }}
            />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Jessica Devidson</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Reliable, efficient, and always available for support!
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Blog Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
        <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              <a
                className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="/"
              >
                Web Design
              </a>
            </div>
            <div className="p-4">
              <h4 className="mb-3">How to build a website</h4>
              <p>
                Building a website begins with defining your goals and selecting
                the right platform to bring your vision to life. By choosing a
                user-friendly design, incorporating essential features, and
                optimizing for search engines, you can create a functional and
                visually appealing online presence.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/blog-2.jpg" alt="" />
              <a
                className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="/"
              >
                App Design
              </a>
            </div>
            <div className="p-4">
              <h4 className="mb-3">How to build an application</h4>
              <p>
                Building an application starts with identifying its purpose and
                target audience, followed by designing an intuitive user
                interface. With the right development tools and thorough
                testing, you can create a high-performing app that delivers
                value to users. Continuous updates and user feedback ensure the
                app evolves to meet growing needs and expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/blog-3.jpg" alt="" />
              <a
                className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href="/"
              >
                Lead Generation
              </a>
            </div>
            <div className="p-4">
              <h4 className="mb-3">How to generate leads</h4>
              <p>
                Generating leads begins with identifying your target audience
                and creating compelling offers that attract their interest. By
                leveraging strategies like content marketing, social media, and
                paid ads, you can drive quality traffic and convert prospects
                into valuable customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog Start */}
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
  <footer>
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
                <a className="text-light mb-2" href="https://worldtriplink.com/">
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
  </footer>

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

export default Home;