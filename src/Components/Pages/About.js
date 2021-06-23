import React from "react";
import pic3 from "../../Images/pic4.jpg";

const About = () => {
  return (
    <section className="container about" id="about">
      <h2 className="title">About me</h2>
      <div className="row">
        <div className=" about-img  col-md-6 mt-3">
          <img src={pic3} alt="profile-pic" className="img-fluid" />
        </div>
        <div className="col-md-6 mt-2">
          <div className="about-info text-white">
            <p className="header-text">
              Hey it's florrie 😊, i am a Web developer and Designer from  Lagos Nigeria.
            </p>
            <p>
              I enjoy taking complex problems and turning them into simple and
              beautiful interface designs. I also love the logic and structure
              of coding and always strive to write elegant and efficient codes,
              whether it be HTML or CSS or React.
            </p>
            <p>
              When i am not coding or pushing pixels, you'll find me watching
              movies, reading or listening to music.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-6 mb-3">
              <div className="about-contact">
                <h4>Name:</h4>
                <span>Ochomma Florence</span>
              </div>

              <div className="about-contact">
                <h4>Phone:</h4>
                <span>
                  <a href="tel: +234 816 440 2887">+234 816 440 2887</a>
                </span>
              </div>

              <div className="about-contact">
                <h4>Github:</h4>
                <span>
                  <a
                    href="https://github.com/ochommaflorence"
                    target="blank"
                    rel="noopener noreferre"
                  >
                    Link to my github
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="about-contact">
                <h4>Profile:</h4>
                <span>Software Developer</span>
              </div>
              <div className="about-contact">
                <h4>Email:</h4>
                <span>
                  <a href="mailto: ochommaflorence7@gmail.com">
                    ochommaflorence7@gmail.com
                  </a>
                </span>
              </div>

              <a
                href="https://drive.google.com/file/d/14TXmgV8A_8hhLBUEUugAS3nEVF3mG7Vi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn2"
              >
                Download Cv <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
