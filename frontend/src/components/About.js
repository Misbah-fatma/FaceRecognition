import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div>
        <Navbar/>
      <main className="main">
        {/* Page Title */}
        <div className="page-title">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">About</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><a href="/">Home</a></li>
                <li className="current">About</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="about section">
          <div className="container">
            <div className="row gy-4">
              {/* About Content */}
              <div className="col-lg-6 content"  >
                <p className="who-we-are">Who We Are</p>
                <h3>Revolutionizing Security with Face Recognition Technology</h3>
                <p className="fst-italic">
                  This face recognition project leverages cutting-edge technology to offer robust, efficient, and scalable solutions for personal and enterprise-level security. It combines innovation with practicality to deliver exceptional results.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> 
                    <span>Accurate and fast face detection and recognition powered by advanced AI algorithms.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> 
                    <span>Optimized for scalability with support for large datasets and real-time processing.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> 
                    <span>Seamless integration with other systems for access control, attendance, and more.</span>
                  </li>
                </ul>
              </div>

              {/* About Images */}
              <div className="col-lg-6 about-images" >
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <img src="https://images.ctfassets.net/3viuren4us1n/5YzA7KGIWQEjt8KStZGlxd/992b5c0e04b062195155c4072d802015/facial_recognition.jpg?fm=webp&w=1920" className="img-fluid rounded" alt="Face Recognition Visualization" />
                  </div>
                  <div className="col-lg-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sWpQ_A33r9IO5GWICWycE1AuPePtQ_o5-w&s" className="img-fluid rounded" alt="Model Training Process" />
                  </div>
                  <div className="col-lg-6">
                    <img src="https://www.mdpi.com/applsci/applsci-13-09880/article_deploy/html/images/applsci-13-09880-g004.png" className="img-fluid rounded" alt="System Architecture" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technologies" className="section bg-light">
          <div className="container section-title" >
            <div className="section-title-container d-flex align-items-center justify-content-between">
              <h2>Technologies Used</h2>
              <p>Explore the tools and technologies powering this project.</p>
            </div>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6"  >
                <div className="technology-item">
                  <h4>Programming Languages</h4>
                  <p>Python, JavaScript</p>
                </div>
              </div>
              <div className="col-lg-6" >
                <div className="technology-item">
                  <h4>Libraries and Frameworks</h4>
                  <p>OpenCV, TensorFlow, React.js</p>
                </div>
              </div>
              <div className="col-lg-6"  data-aos-delay="300">
                <div className="technology-item">
                  <h4>Face Recognition Package</h4>
                  <p>Face Recognition (Dlib-based), Mediapipe</p>
                </div>
              </div>
              <div className="col-lg-6"  data-aos-delay="400">
                <div className="technology-item">
                  <h4>Deployment Tools</h4>
                  <p>Docker, Flask, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="team section">
          <div className="container section-title" >
            <div className="section-title-container d-flex align-items-center justify-content-between">
              <h2>Achievements</h2>
              <p>Highlights of what this project has accomplished.</p>
            </div>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="achievement-item">
                  <h4>Real-Time Detection</h4>
                  <p>Successfully implemented real-time face detection with minimal latency.</p>
                </div>
              </div>
              <div className="col-lg-6" >
                <div className="achievement-item">
                  <h4>High Accuracy</h4>
                  <p>Achieved 98% accuracy in recognizing faces across diverse datasets.</p>
                </div>
              </div>
              <div className="col-lg-6" >
                <div className="achievement-item">
                  <h4>Integration</h4>
                  <p>Integrated face recognition with third-party systems for attendance tracking and access control.</p>
                </div>
              </div>
              <div className="col-lg-6" >
                <div className="achievement-item">
                  <h4>User Feedback</h4>
                  <p>Received positive feedback from test users for ease of use and effectiveness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default About;
