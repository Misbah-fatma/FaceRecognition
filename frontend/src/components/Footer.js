import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            {/* About Section */}
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="/" className="logo d-flex align-items-center">
                <span className="sitename">FaceRecognitionPro</span>
              </a>
              <div className="footer-contact pt-3">
                <p>Talat Zia</p>
                <p>Student | Aspiring AI Developer</p>
                <p className="mt-3">
                  <strong>Email:</strong> <span>talatzia@example.com</span>
                </p>
                <p><strong>GitHub:</strong> <a href="https://github.com/talatzia" target="_blank" rel="noopener noreferrer">github.com/talatzia</a></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="https://twitter.com/talatzia" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                <a href="https://www.linkedin.com/in/talatzia" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                <a href="https://instagram.com/talatzia" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Tools and Technologies */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Tools Used</h4>
              <ul>
                <li><a href="#">OpenCV</a></li>
                <li><a href="#">TensorFlow</a></li>
                <li><a href="#">React.js</a></li>
                <li><a href="#">Mediapipe</a></li>
                <li><a href="#">Python</a></li>
              </ul>
            </div>

            {/* Project Features */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Project Features</h4>
              <ul>
                <li><a href="#">Real-Time Face Detection</a></li>
                <li><a href="#">High Accuracy</a></li>
                <li><a href="#">Scalable System</a></li>
                <li><a href="#">Secure Processing</a></li>
                <li><a href="#">User-Friendly UI</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:talatzia@example.com">Email Talat</a></li>
                <li><a href="https://github.com/talatzia" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
                <li><a href="https://linkedin.com/in/talatzia" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                <li><a href="/contact">Contact Form</a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
