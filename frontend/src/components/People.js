import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://localhost:5000/profiles");
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading profiles...</span>
        </div>
      </div>
    );
  }

  return (
    <><Navbar /><section className="py-5 bg-light">
          <div className="container">
              <h1 className="text-center mb-4 text-uppercase">Registered Users</h1>
              <div className="row g-4">
                  {profiles.map((profile) => (
                      <div key={profile.profileId} className="col-12 col-sm-6 col-md-4">
                          <div className="card shadow-sm h-100">
                              {/* Profile Image */}
                              <img
                                  src={profile.image}
                                  alt={`${profile.name}'s profile`}
                                  className="card-img-top rounded-top"
                                  style={{ height: "200px", objectFit: "cover" }} />
                              <div className="card-body text-center">
                                  {/* Profile Info */}
                                  <h5 className="card-title">{profile.name}</h5>
                                  <p className="card-text mb-1">{profile.email}</p>
                                  <p className="text-muted">
                                      Phone: {profile.phone || "N/A"}
                                  </p>
                                  {/* View Profile Button */}
                                  <a
                                      href={`/profile?id=${profile.profileId}`}
                                      className="btn btn-primary btn-sm text-uppercase"
                                  >
                                      View Profile
                                  </a>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      <Footer/>
      </>
  );
}

export default Profiles;
