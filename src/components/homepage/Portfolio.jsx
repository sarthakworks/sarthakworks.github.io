import { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  const [isCopied, setCopied] = useState(false);
  return (
    <>
      <div>
        <div className="card d-block">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h3>Career Highlight</h3>
              <div className="dropdown">
                <Link
                  to="/"
                  className="dropdown-toggle arrow-none card-drop"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="dripicons-dots-3" />
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  data-popper-placement="top-end"
                  style={{
                    position: "absolute",
                    inset: "auto 0px 0px auto",
                    margin: 0,
                    transform: "translate3d(-0.00401306px, -30.544px, 0px)",
                  }}
                >
                  <Link to="/" className="dropdown-item">
                    <i className="mdi mdi-pencil me-1" />
                    Edit
                  </Link>

                  <Link to="/" className="dropdown-item">
                    <i className="mdi mdi-delete me-1" />
                    Delete
                  </Link>

                  <Link to="/" className="dropdown-item">
                    <i className="mdi mdi-email-outline me-1" />
                    Invite
                  </Link>

                  <Link to="/" className="dropdown-item">
                    <i className="mdi mdi-exit-to-app me-1" />
                    Leave
                  </Link>
                </div>
              </div>
              {/* project title*/}
            </div>
            <div className="badge bg-secondary text-light mb-3">
              Front End Developer
            </div>

            <h5>Sarthak Bansal</h5>
            <p className="text-muted mb-4">
              I like to develop webites and I am working from past 6 years with
              various clients helping them achieving their website requirements.
              I have worked on website relating to various domains <i>viz. </i>
              Finance , Healthcare , E-commerce , Hotels , Telecom , Logistics
              etc.
            </p>

            <div className="tab-content">
              <div className="tab-pane active" id="aboutme">
                <h5 className="text-uppercase">
                  <i className="mdi mdi-briefcase me-1" />
                  Experience
                </h5>
                <div className="timeline-alt pb-0">
                  <div className="timeline-item">
                    <i className="mdi mdi-circle bg-info-lighten text-info timeline-icon" />
                    <div className="timeline-item-info">
                      <h5 className="mt-0 mb-1">Senior technical consultant</h5>
                      <p className="font-14">
                        Adobe
                        <span className="ms-2 font-12">
                          Year: 2022 - Present
                        </span>
                      </p>
                      <p className="text-muted mt-2 mb-0 pb-3">
                        Working on cutting edge technologies.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <i className="mdi mdi-circle bg-primary-lighten text-primary timeline-icon" />
                    <div className="timeline-item-info">
                      <h5 className="mt-0 mb-1">Associate technology L2</h5>
                      <p className="font-14">
                        Publicis Sapient
                        <span className="ms-2 font-12">Year: 2021 - 2022</span>
                      </p>
                      <p className="text-muted mt-2 mb-0 pb-3">
                        Here I worked with two Clients on Frontend part of
                        projects in agile methology Collaborate with others to
                        craft clear user stories, design tests for prototypes
                        and products, and continuously deliver product
                        enhancements. Develop high-quality, well-documented, and
                        efficient code. Align and integrate with architects,
                        designers and other stakeholders.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <i className="mdi mdi-circle bg-info-lighten text-info timeline-icon" />
                    <div className="timeline-item-info">
                      <h5 className="mt-0 mb-1">
                        Application development analyst
                      </h5>
                      <p className="font-14">
                        Accenture
                        <span className="ms-2 font-12">Year: 2017 - 2021</span>
                      </p>
                      <p className="text-muted mt-2 mb-0 pb-2">
                        I was part of 5-member team which was responsible for
                        developing multiple websites within stringent time
                        frame. I analyzed mockups from Zeplin or PSD and realize
                        it into working website and Communicate with other
                        developers across teams in UI development. I contributed
                        to cross functional teams as a fed developer here &
                        developed quoting pages for insurance websites. Worked
                        together with Back End team to design and develop
                        functional, performing, and complete APIs that work with
                        existing company software and products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="mb-4">
                  <h5>Career Start Date</h5>
                  <p>
                    Jan, 2017
                    {/* <small className="text-muted">1:00 PM</small> */}
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="mb-4" style={{ position: "relative" }}>
                  <h5>Email</h5>
                  <a
                    href="#!"
                    onClick={() => {
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 1000);
                      navigator.clipboard.writeText(
                        "sarthak.workplace@gmail.com"
                      );
                    }}
                  >
                    sarthak.workplace@gmail.com
                    {isCopied ? (
                      <span>
                        <div
                          className="tooltip fade show bs-tooltip-end"
                          role="tooltip"
                          data-popper-placement="right"
                          style={{
                            position: "absolute",
                            top: "21px",
                            left: "200px",
                          }}
                        >
                          <div
                            className="tooltip-arrow"
                            style={{
                              top: 0,
                              transform: "translate3d(0px, 10px, 0px)",
                            }}
                          />
                          <div className="tooltip-inner">Copied!!</div>
                        </div>
                      </span>
                    ) : (
                      <i className="mdi mdi-content-copy"></i>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end card-body*/}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
