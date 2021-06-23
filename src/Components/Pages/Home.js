import React from "react";
import Typed from "react-typed";
import Pic1 from "../../Images/pic1.jpg";

const Home = () => {
  return (
    <section className="container">
      <div className="row" id="home">
        <div className="col-md-6">
          <div className="max-width">
            <div className="home-content">
              <div className="text-1">Hello, my name is</div>
              <div className="text-2">Florence Ochomma.</div>
              <div className="text-3">
                <span>
                  <Typed
                    strings={[
                      "MERN Stack Developer.",
                      "I Love Design.",
                      "Ethusiastic Developer.",
                      "A Developer."
                    ]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                  />
                </span>
              </div>
              <p>
                Knack for building web applications and a passionate Web
                developer.
              </p>
              <div>
                <a href="/contact" className="btn1">
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <div className="home_image">
            <img
              src={Pic1}
              alt="profile-pic"
              className="img-fluid"
              id="image__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
