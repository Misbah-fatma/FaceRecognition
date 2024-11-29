import React, { useState } from "react";
import Navbar from "./Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleRegister = async () => {
    if (!name || !email  || !image || !agreeToTerms) {
      setMessage("Please fill in all fields, upload an image, and agree to the terms.");
      return;
    }

    // Create FormData object for file upload
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Registration successful!");
      } else {
        setMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("An error occurred during registration.");
    }
  };

  return (

    <><Navbar /><section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                {/* Left Image Section */}
                <div className="col-12 col-md-6">
                  <img
                    className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                    loading="lazy"
                    src="https://itchronicles.com/wp-content/uploads/2023/07/face-recognition-1024x630.jpg"
                    alt="Welcome to Registration" />
                </div>
                {/* Right Form Section */}
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <div className="col-12 col-lg-11 col-xl-10">
                    <div className="card-body p-3 p-md-4 p-xl-5">
                      <div className="text-center mb-4">
                        <h2 className="h4">Registration</h2>
                      </div>


                      <p className="text-center mt-4 mb-5">
                        Enter your details to register
                      </p>

                      {/* Form */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleRegister();
                        } }
                      >
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                        </div>
                      
                        <div className="mb-3">
                          <label htmlFor="image" className="form-label">
                            Upload Image
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            required />
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="agreeToTerms"
                            checked={agreeToTerms}
                            onChange={(e) => setAgreeToTerms(e.target.checked)} />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="agreeToTerms"
                          >
                            I agree to the{" "}
                            <a
                              href="#!"
                              className="link-primary text-decoration-none"
                            >
                              terms and conditions
                            </a>
                          </label>
                        </div>
                        <div className="d-grid">
                          <button
                            className="btn btn-dark btn-lg"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                      </form>
                      {/* Message */}
                      {message && (
                        <div className="alert alert-info mt-3">{message}</div>
                      )}

                      {/* Sign-in Redirect */}
                      <p className="mb-0 mt-5 text-secondary text-center">
                        Already have an account?{" "}
                        <a
                          href="/recognize"
                          className="link-primary text-decoration-none"
                        >
                          Recognize
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default Register;
