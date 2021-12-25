import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./Home.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import alibaba from "../../Images/alibaba.png";
import amazon from "../../Images/amzon.png";
import adidas from "../../Images/adidis.jpg";
import air from "../../Images/air.png";
import AnimatedNumber from "react-animated-number";

const Home = () => {
  // Token Function
  const [showToken, setShowToken] = useState(false);

  const handleCloseToken = () => setShowToken(false);
  const handleShowToken = () => setShowToken(true);

  const [country, setCountry] = useState([]);
  const [operator, setOperator] = useState([]);

  const desh = [
    { name: "America", value: "1" },
    { name: "Bangladesh", value: "2" },
    { name: "Pakistan", value: "3" },
    { name: "India", value: "4" },
    { name: "South Africa", value: "5" },
    { name: "America", value: "6" },
    { name: "Bangladesh", value: "7" },
    { name: "Pakistan", value: "8" },
    { name: "India", value: "9" },
    { name: "South Africa", value: "10" },
  ];

  const company = [
    { name: "Adidas", value: "1" },
    { name: "Amazon", value: "2" },
    { name: "Fiverr", value: "3" },
    { name: "Bata", value: "4" },
    { name: "Galaxy", value: "5" },
    { name: "Adidas", value: "6" },
    { name: "Amazon", value: "7" },
    { name: "Fiverr", value: "8" },
    { name: "Bata", value: "9" },
    { name: "Galaxy", value: "10" },
  ];
  return (
    <>
      <section className="home-section">
        <div className="home-left">
          <div className="search-btn">
            <div className="search-input-btn">
              <SelectSearch
                options={desh}
                value={country}
                onChange={setCountry}
                search
                filterOptions={fuzzySearch}
                placeholder="Search Country"
              />
            </div>

            <div className="search-input-btn">
              <SelectSearch
                options={company}
                value={operator}
                onChange={setOperator}
                search
                filterOptions={fuzzySearch}
                placeholder="Search Operator"
              />
            </div>
          </div>

          <div className="home-product">
            <div className="home-product-card" onClick={handleShowToken}>
              <img src={alibaba} alt={alibaba} />
              <p>Alibaba</p>
            </div>

            <div className="home-product-card">
              <img src={amazon} alt={amazon} />
              <p>Amazon</p>
            </div>

            <div className="home-product-card">
              <img src={adidas} alt={adidas} />
              <p>Adidas</p>
            </div>

            <div className="home-product-card">
              <img src={air} alt={air} />
              <p>Airbnb fdgdfsgfd fdgsdfghgfh </p>
            </div>

            <div className="home-product-card">
              <img src={air} alt={air} />
              <p>Airbnb fdgdfsgfd fdgsdfghgfh </p>
            </div>
          </div>
        </div>

        <div className="home-right">
          <div className="home-right-bg">
            <h2
              style={{
                color: "#ffffff",
                fontSize: "35px",
                padding: "35px 0px 27px 0px",
              }}
            >
              Verify your accounts with private numbers!
            </h2>
            <p
              style={{
                color: "#cccccc",
                fontSize: "16px",
                padding: "0px",
                margin: "0px",
              }}
            >
              You can now verify your online accounts without using your
              personal, work or business numbers.
            </p>
            <p
              style={{
                color: "#cccccc",
                fontSize: "16px",
                padding: "0px",
                margin: "0px",
              }}
            >
              Company name provides real sim card numbers for you to create and
              verify your accounts.
            </p>
            <p
              style={{
                color: "#cccccc",
                fontSize: "16px",
                padding: "0px",
                margin: "0px",
              }}
            >
              Using our SMS and Voice platforms we offer a wide variety of
              countries for SMS Verifications and Voice/Call Back Verfications.
            </p>

            <button>Buy Now</button>
          </div>

          <div className="home-right-title">
            <h2
              style={{
                color: "#ffffff",
                fontSize: "30px",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              How to get service
            </h2>
            <p style={{ color: "#cccccc", fontSize: "18px" }}>
              Simply use one of our numbers to create or verify your required
              accounts.
            </p>
          </div>

          <div className="home-right-step">
            <div className="col-md-4">
              <i className="fas fa-tv"></i>
              <div className="service-detail">
                <h4>Step One</h4>
                <p>
                  Sign up for your account with SMSCodes.io and add some credit
                  to your account through our easy to use website..
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <i className="fas fa-user-shield"></i>
              <div className="service-detail">
                <h4>Step Two</h4>
                <p>
                  Select the service or website that is of interest, such as
                  Google, Instagram, Facebook, etc, and pick your country.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <i className="fas fa-server"></i>
              <div className="service-detail">
                <h4>Step Three</h4>
                <p>
                  Use the number provided for the country and service requested
                  to verify or register your account, simple as 1 2 3.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row text-center">
              <div className="col-md-3 col-sm-3 facts container-block">
                <i className="fas fa-edit"></i>
                <h1 className="counter">
                  <AnimatedNumber
                    value={1014}
                    style={{
                      fontSize: 30,
                    }}
                    duration={6000}
                    formatValue={(n) => n.toFixed(0)}
                    frameStyle={(percentage) =>
                      percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
                    }
                  />
                </h1>
                <h4>Numbers Issued Today</h4>
              </div>

              <div className="col-md-3 col-sm-3 facts container-block">
                <i className="fas fa-clock"></i>
                <h1 className="counter">
                  <AnimatedNumber
                    value={1594}
                    style={{
                      fontSize: 30,
                    }}
                    duration={6000}
                    formatValue={(n) => n.toFixed(0)}
                    frameStyle={(percentage) =>
                      percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
                    }
                  />
                </h1>
                <h4>SMS Received Today</h4>
              </div>

              <div className="col-md-3 col-sm-3 facts container-block">
                <i className="fas fa-briefcase"></i>
                <h1 className="counter">
                  <AnimatedNumber
                    value={780}
                    style={{
                      fontSize: 30,
                    }}
                    duration={6000}
                    formatValue={(n) => n.toFixed(0)}
                    frameStyle={(percentage) =>
                      percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
                    }
                  />
                </h1>
                <h4>Services Supported</h4>
              </div>

              <div className="col-md-3 col-sm-3 facts container-block">
                <i className="fas fa-user"></i>
                <h1 className="counter">
                  <AnimatedNumber
                    value={3336}
                    style={{
                      fontSize: 30,
                    }}
                    duration={6000}
                    formatValue={(n) => n.toFixed(0)}
                    frameStyle={(percentage) =>
                      percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
                    }
                  />
                </h1>
                <h4>Happy Customers</h4>
              </div>
            </div>
          </div>

          <div
            className="home-right-title"
            style={{
              margin: "40px 0px",
            }}
          >
            <h2
              style={{
                color: "#ffffff",
                fontSize: "30px",
                letterSpacing: "2px",
              }}
            >
              FAQs
            </h2>
            <p
              style={{
                color: "#cccccc",
                fontSize: "18px",
                width: "61%",
                margin: "auto",
              }}
            >
              Here are some of the frequently asked questions and answers If you
              dont see your question answered below please contact us.
            </p>
          </div>

          <div className="home-right-details">
            <div className="col-md-5">
              <div className="home-right-details-block">
                <h4 className="question" data-wow-delay=".1s">
                  Can I Get A Free Trial?
                </h4>
                <p className="answer">
                  Yes you can, after registering and confirming your email we
                  give you a free balance of $0.50. You can then use this for
                  the trial, but please note the incoming SMS will be masked,
                  after purchasing your first credits your account will be fully
                  activated and all incoming SMS will be readable.
                </p>
              </div>

              <div className="home-right-details-block">
                <h4 className="question">How To Purchase Credits?</h4>
                <p className="answer m-b-0">
                  We accept payments in most of the major crypto currencies,
                  this is done using CoinPayments.net. Simply click on "Buy Now"
                  from your dashboard and you will be asked to select the amount
                  you wish to add to your account, $10.00, $25.00, $50.00 and
                  other amounts. After payment your account will be
                  automatically updated.
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="home-right-details-block">
                <h4 className="question">What Is The Points System?</h4>
                <p className="answer">
                  We value our clients and have added a points system. Each time
                  you successfully purchase credits we will add points to your
                  account and then once you reach a certain amount of points
                  these can be exchanged for credits.
                </p>
              </div>

              <div className="home-right-details-block">
                <h4 className="question">How Long Do Payments Take?</h4>
                <p className="answer m-b-0">
                  Payments take around 5-10 minutes to approve, this is due to
                  the fact that we wait for confirmations from the payment
                  blockchains to confirm the payment has been successful. This
                  small delay is only when purhcasing credits, using credits and
                  receiving your numbers and SMS are instant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="social-container">
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>

        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>

        <a href="#">
          <i className="fab fa-instagram-square"></i>
        </a>

        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <footer className="footer">
        <p>© 2021 - CompanyName | Terms of Use | Privacy Policy</p>
      </footer>

      {/* Token Modal */}
      <Modal show={showToken} onHide={handleCloseToken}>
        <Modal.Header closeButton>
          <Modal.Title>Alibaba</Modal.Title>
        </Modal.Header>
        <div className="modal-product">
          <p>5 SIM.NET</p>
          <p>16526 pcs.</p>
          <p>min</p>
          <p>4P</p>
          <Button
            style={{
              color: "#ffdd40",
              backgroundColor: "#1f5156",
              marginBottom: "10px",
            }}
          >
            Buy
          </Button>
        </div>

        <div className="modal-product">
          <p>5 SIM.NET</p>
          <p>16526 pcs.</p>
          <p>min</p>
          <p>4P</p>
          <Button
            style={{
              color: "#ffdd40",
              backgroundColor: "#1f5156",
              marginBottom: "10px",
            }}
          >
            Buy
          </Button>
        </div>

        <div className="modal-product">
          <p>5 SIM.NET</p>
          <p>16526 pcs.</p>
          <p>min</p>
          <p>4P</p>
          <Button
            style={{
              color: "#ffdd40",
              backgroundColor: "#1f5156",
              marginBottom: "10px",
            }}
          >
            Buy
          </Button>
        </div>

        <div className="modal-product">
          <p>5 SIM.NET</p>
          <p>16526 pcs.</p>
          <p>min</p>
          <p>4P</p>
          <Button
            style={{
              color: "#ffdd40",
              backgroundColor: "#1f5156",
              marginBottom: "10px",
            }}
          >
            Buy
          </Button>
        </div>

        <div className="modal-product">
          <p>5 SIM.NET</p>
          <p>16526 pcs.</p>
          <p>min</p>
          <p>4P</p>
          <Button
            style={{
              color: "#ffdd40",
              backgroundColor: "#1f5156",
              marginBottom: "10px",
            }}
          >
            Buy
          </Button>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseToken}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
