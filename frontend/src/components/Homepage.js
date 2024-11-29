import React, { useState , useEffect} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";



const slides = [
  {
    id: 1,
    title: "How Face Recognition Software Can Enhance Personal Security",
    description:
      "Discover how face recognition technology is transforming personal security by providing a more secure and convenient way to unlock devices and access sensitive areas.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*o1f7Ur9w58rmgHYU9vNcuA.jpeg",
    link: "single-post.html",
  },
  {
    id: 2,
    title: "The Role of AI in Improving Face Recognition Accuracy",
    description:
      "Explore the key role AI and machine learning algorithms play in improving the accuracy and efficiency of face recognition software in real-time applications.",
    image: "https://itchronicles.com/wp-content/uploads/2023/07/face-recognition-1024x630.jpg",
    link: "single-post.html",
  },
  {
    id: 3,
    title: "Face Recognition Technology: Applications Beyond Security",
    description:
      "Learn about the diverse applications of face recognition software, from personalized marketing to healthcare, and its impact on various industries.",
    image: "https://cdn.prod.website-files.com/5ef788f07804fb7d78a4127a/6090354ac9e1bdec34377577_facial-recognition-systems.jpg",
    link: "single-post.html",
  },
  {
    id: 4,
    title: "The Ethics and Privacy Concerns of Face Recognition Technology",
    description:
      "Understand the ethical challenges and privacy concerns surrounding the use of face recognition software, and how developers can mitigate these issues in their projects.",
    image: "https://cdn.prod.website-files.com/5ef788f07804fb7d78a4127a/6090354ac9e1bdec34377577_facial-recognition-systems.jpg",
    link: "single-post.html",
  },
];


const Homepage = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : (prev - 1) % slides.length
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  
  
  return (
    <div>
      <Navbar />
      <section id="slider" className="slider section dark-background">
      <div className="container">
        <div className="slider-wrapper">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${
                index === currentSlide ? "active" : "inactive"
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className="content">
                <h2>
                  <a href={slide.link}>{slide.title}</a>
                </h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button className="prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>ß


      <section id="trending-category" class="trending-category section">

        <div class="container">

          <div class="container">
            <div class="row g-5">
              <div class="col-lg-4">

                <div class="post-entry lg">
                  <a href="feature-details.html"><img src="https://innocenceproject.org/wp-content/uploads/2023/02/iStock-925574662-scaled.jpg" alt="Facial Recognition" class="img-fluid" /></a>
                  <div class="post-meta"><span class="date">Technology</span> <span class="mx-1">•</span> <span>Nov 26th '24</span></div>
                  <h2><a href="feature-details.html">Revolutionizing Security: AI-Powered Facial Recognition</a></h2>
                  <p class="mb-4 d-block">Discover how our cutting-edge facial recognition system leverages AI to enhance security, improve accessibility, and transform identity verification processes. Facial recognition technology is a powerful tool for identifying and verifying individuals by analyzing their unique facial features. It plays a significant role in applications ranging from enhancing security to streamlining event check-ins.

                    Central to this innovation is artificial intelligence (AI) and machine learning (ML), which enable facial recognition systems to analyze complex data and improve their accuracy over time.

                    By capturing facial images and extracting key features, these AI-driven systems match them against stored profiles, ensuring swift identification and continually refining their processes through learning.

                    This seamless integration of AI in facial recognition transforms security measures and reshapes user experiences, making it a vital component of modern event management.</p>

                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/person-1.jpg" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0">Alex Johnson</h3>
                    </div>
                  </div>
                </div>

              </div>

              <div class="col-lg-8">
                <div class="row g-5">
                  <div class="col-lg-4 border-start custom-border">
                    <div class="post-entry">
                      <a href="feature-details.html"><img src="https://learn.g2.com/hubfs/G2CM_FI454_Learn_Article_Images_%5BFacial_recognition%5D_V1a-1.png" alt="AI Integration" class="img-fluid" /></a>
                      <div class="post-meta"><span class="date">Innovation</span> <span class="mx-1">•</span> <span>Nov 15th '24</span></div>
                      <h2><a href="feature-details.html">How AI Integrates Seamlessly into Real-World Security Systems</a></h2>
                    </div>
                    <div class="post-entry">
                      <a href="feature-details.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFB2-FNPqmTI2rwCCtfwR2WeFWwQUqfkuANoLfeYlzADsr0drcnWsXWAXllhsf5yu_MGE&usqp=CAU" alt="Personalization" class="img-fluid" /></a>
                      <div class="post-meta"><span class="date">Solutions</span> <span class="mx-1">•</span> <span>Oct 30th '24</span></div>
                      <h2><a href="feature-details.html">The Power of Personalization in AI Recognition Systems</a></h2>
                    </div>
                    <div class="post-entry">
                      <a href="feature-details.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1bTitJFehjIi-VjqnqWBn80cktEM40dC49TEB-IIBohI-mxW_Tk7I5VmS7Z7bzjMnCU&usqp=CAU" alt="Future of Tech" class="img-fluid" /></a>
                      <div class="post-meta"><span class="date">Futurism</span> <span class="mx-1">•</span> <span>Nov 10th '24</span></div>
                      <h2><a href="feature-details.html">What’s Next for AI: The Evolution of Facial Recognition Technology</a></h2>
                    </div>
                  </div>
                  <div class="col-lg-4 border-start custom-border">
                    <div class="post-entry">
                      <a href="feature-details.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPSsFsaffpJa0n9ZT4kFHrndTz71DjK2Qwg&s" alt="Applications" class="img-fluid" /></a>
                      <div class="post-meta"><span class="date">Business</span> <span class="mx-1">•</span> <span>Nov 18th '24</span></div>
                      <h2><a href="feature-details.html">Top 5 Business Applications of Facial Recognition in 2024</a></h2>
                    </div>
                    <div class="post-entry">
                      <a href="feature-details.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5S3Z0VhjUliFXnmxVg7QfGfiQaLHrtPKlYA&s" alt="Ethics" class="img-fluid" /></a>
                      <div class="post-meta"><span class="date">Ethics</span> <span class="mx-1">•</span> <span>Nov 12th '24</span></div>
                      <h2><a href="feature-details.html">AI Ethics: Ensuring Transparency in Facial Recognition</a></h2>
                    </div>
                    <div class="post-entry">
                      <a href="feature-details.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP1IJ0XZl4rAqMFbqz4dRiRlWtdrAk9WkVA&s" alt="Global Impact" class="img-fluid" /></a>
                      <div class="post-meta"><span class="date">Global</span> <span class="mx-1">•</span> <span>Nov 8th '24</span></div>
                      <h2><a href="feature-details.html">How Facial Recognition Technology Impacts Smart Cities Worldwide</a></h2>
                    </div>
                  </div>

                  <div class="col-lg-4">

                    <div class="trending">
                      <h3>Trending</h3>
                      <ul class="trending-post">
                        <li>
                          <a href="feature-details.html">
                            <span class="number">1</span>
                            <h3>Exploring Biometric Access: A New Era in Workplace Security</h3>
                            <span class="author">Chris Lee</span>
                          </a>
                        </li>
                        <li>
                          <a href="feature-details.html">
                            <span class="number">2</span>
                            <h3>The Role of Facial Recognition in Modern Healthcare</h3>
                            <span class="author">Emily Brown</span>
                          </a>
                        </li>
                        <li>
                          <a href="feature-details.html">
                            <span class="number">3</span>
                            <h3>Unlocking AI Potential: Smart Surveillance for Safer Cities</h3>
                            <span class="author">Sarah White</span>
                          </a>
                        </li>
                        <li>
                          <a href="feature-details.html">
                            <span class="number">4</span>
                            <h3>Overcoming Privacy Challenges in Facial Recognition Development</h3>
                            <span class="author">Jordan Miller</span>
                          </a>
                        </li>
                        <li>
                          <a href="feature-details.html">
                            <span class="number">5</span>
                            <h3>Why Your Business Needs AI-Based Identity Verification</h3>
                            <span class="author">Lisa Green</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>


      <section id="business-category" class="business-category section">

        <div class="container section-title">
          <div class="section-title-container d-flex align-items-center justify-content-between">
         

          </div>
        </div>

        <div class="container">

<div class="row">
  <div class="col-md-9 order-md-2">

    <div class="d-lg-flex post-entry">
      <a href="blog-details.html" class="me-4 thumbnail d-inline-block mb-4 mb-lg-0">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*-3nzJYeKlbL39_8Dx6mcSg.jpeg" alt="Face Recognition Technology" class="img-fluid"/>
      </a>
      <div>
        <div class="post-meta"><span class="date">Face Recognition</span> <span class="mx-1">•</span> <span>Nov 28th '24</span></div>
        <h3><a href="blog-details.html">Building Face Recognition Software as a Student Project</a></h3>
        <p>As part of a college project, Talat Zia developed a face recognition system designed to identify and verify individuals in real-time. This project focuses on understanding the technology behind face detection and recognition, incorporating advanced algorithms to enhance accuracy.</p>
        <p>The system uses Python libraries like OpenCV for facial detection, and React.js for creating an intuitive user interface. The project also addresses ethical considerations, emphasizing user consent and data security.</p>
        <div class="d-flex align-items-center author">
          <div class="photo"><img src="assets/img/person-4.jpg" alt="Talat Zia" class="img-fluid"/></div>
          <div class="name">
            <h3 class="m-0 p-0">Talat Zia</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <div class="post-list border-bottom">
          <a href="blog-details.html"><img src="https://www.lystloc.com/blog/wp-content/uploads/2023/02/How-Does-Face-Recognition-Door-Access-Control-System-Works.webp" alt="Face Recognition Access Control" class="img-fluid"/></a>
          <div class="post-meta"><span class="date">Student Project</span> <span class="mx-1">•</span> <span>Nov 28th '24</span></div>
          <h2 class="mb-2"><a href="blog-details.html">Integrating Face Recognition with Security Systems</a></h2>
         
          <p class="mb-4 d-block">Learn how Talat Zia integrated face recognition technology with IoT devices for a secure and user-friendly authentication system. The integration aims to simplify access control while ensuring high security standards.</p>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="post-list">
          <a href="blog-details.html"><img src="https://www.mobbeel.com/wp-content/uploads/2021/03/face-recognition-process.png" alt="Face Recognition in Applications" class="img-fluid"/></a>
          <div class="post-meta"><span class="date">Face Recognition</span> <span class="mx-1">•</span> <span>Nov 28th '24</span></div>
          <h2 class="mb-2"><a href="blog-details.html">Applications of Face Recognition in Daily Life</a></h2>
         
          <p className="mb-4 d-block">
  Exploring how face recognition technology can revolutionize areas like education, healthcare, and personal security. Talat Zia discusses how this project inspired new ideas for accessible technology. With the growing potential of AI, face recognition is now being integrated into various devices and applications, offering greater convenience and security. As technology advances, it is expected to play a major role in simplifying daily tasks and enhancing safety measures across industries. This technology has the potential to redefine personal interaction with devices, making it more intuitive and secure.
</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-3">
  <div class="post-list border-bottom">
    <div class="post-meta"><span class="date">Learning</span> <span class="mx-1">•</span> <span>Nov 28th '24</span></div>
    <h2 class="mb-2"><a href="blog-details.html">How I Developed the Project</a></h2>
    <p>For this project, I used Python for backend processing, leveraging libraries like OpenCV and dlib for face detection and recognition. The front-end was created using React.js to provide a seamless user experience.</p>
    <p>Challenges included managing real-time accuracy under different lighting conditions and ensuring that user data was processed securely. I also implemented Haar cascades and deep learning models to improve recognition rates significantly.</p>
  </div>

  <div class="post-list border-bottom">
    <div class="post-meta"><span class="date">Challenges</span> <span class="mx-1">•</span> <span>Nov 28th '24</span></div>
    <h2 class="mb-2"><a href="blog-details.html">Overcoming Real-Time Accuracy Issues</a></h2>
    <p>One of the biggest hurdles was ensuring that the face recognition algorithm performed accurately in real-time. Variations in lighting, camera angles, and movement often affected the system’s performance. I tackled this challenge by fine-tuning the model, using techniques like data augmentation to simulate different scenarios and improve robustness.</p>
  </div>

  <div class="post-list border-bottom">
    <div class="post-meta"><span class="date">Ethics</span> <span class="mx-1">•</span> <span>Nov 28th '24</span></div>
    <h2 class="mb-2"><a href="blog-details.html">Ethical Considerations in Face Recognition</a></h2>
    <p>While developing this project, I had to carefully consider the ethical implications of using face recognition technology. This includes ensuring that users' consent is obtained before their data is used, as well as safeguarding personal data to protect user privacy. I implemented encryption techniques and focused on transparency throughout the development process.</p>
  </div>

 
</div>

</div>

</div>



      </section>


      <section className="bsb-faq-2 bg-light py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-5 gy-lg-0">
          <div className="col-12 col-lg-6">
            <h2 className="h1 mb-3">How can we help you? Unlocking possibilities with Face Recognition.</h2>
            <p className="lead fs-4 text-secondary mb-4">Find answers to common questions about our face recognition app. If you need further assistance, please feel free to contact us.</p>
            <a href="#!" className="btn btn-lg bsb-btn-2xl btn-primary">All FAQ</a>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <div className="accordion" id="accordionExample">
                  {/* Question 1 */}
                  <div className="accordion-item mb-4 shadow-sm">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={`accordion-button bg-transparent fw-bold ${activeIndex === 0 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAnswer(0)}
                      >
                        What is a face recognition app?
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}
                      aria-labelledby="headingOne"
                    >
                      <div className="accordion-body">
                        A face recognition app uses artificial intelligence to analyze facial features and identify or verify individuals. It captures key facial landmarks to compare and match with existing data.
                      </div>
                    </div>
                  </div>
                  
                  {/* Question 2 */}
                  <div className="accordion-item mb-4 shadow-sm">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className={`accordion-button collapsed bg-transparent fw-bold ${activeIndex === 1 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAnswer(1)}
                      >
                        How accurate is the face recognition app?
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`}
                      aria-labelledby="headingTwo"
                    >
                      <div className="accordion-body">
                        The accuracy of face recognition depends on various factors, such as lighting, image quality, and angle. Under ideal conditions, the app achieves an accuracy rate of over 95%.
                      </div>
                    </div>
                  </div>
                  
                  {/* Question 3 */}
                  <div className="accordion-item mb-4 shadow-sm">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className={`accordion-button collapsed bg-transparent fw-bold ${activeIndex === 2 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAnswer(2)}
                      >
                        Is my data secure when using the face recognition app?
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${activeIndex === 2 ? 'show' : ''}`}
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        Yes, your data is safe. We prioritize privacy by using encrypted storage for facial data and employing secure transmission methods. We do not store or share your facial images without your consent.
                      </div>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="accordion-item mb-4 shadow-sm">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className={`accordion-button collapsed bg-transparent fw-bold ${activeIndex === 3 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAnswer(3)}
                      >
                        Can the app work in low-light conditions?
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${activeIndex === 3 ? 'show' : ''}`}
                      aria-labelledby="headingFour"
                    >
                      <div className="accordion-body">
                        Yes, the app uses advanced image processing algorithms to detect faces and enhance facial features even in low-light environments, although optimal lighting is recommended.
                      </div>
                    </div>
                  </div>

                  {/* Question 5 */}
                  <div className="accordion-item shadow-sm">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className={`accordion-button collapsed bg-transparent fw-bold ${activeIndex === 4 ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAnswer(4)}
                      >
                        What devices are compatible with the face recognition app?
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${activeIndex === 4 ? 'show' : ''}`}
                      aria-labelledby="headingFive"
                    >
                      <div className="accordion-body">
                        The app is compatible with most modern devices that have a camera and are running iOS or Android, including smartphones, tablets, and laptops.
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      <Footer />
    </div>
  );
};

export default Homepage;
